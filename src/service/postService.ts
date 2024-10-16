import mongoose from "mongoose";
import postModel, { IPost } from "../models/postModel";
import { User, userModel } from "../models/userModel";
import { gettUserById, gettUserByName } from "./userService";
import UpdatePostDto from "../types/dto/updatePostDto";

export const createPostService = async (post:IPost):Promise<IPost|unknown> => {
    try {
      const { title,content,author} = post;
      const myuser:User|unknown = await gettUserById(author)
      if(!myuser){
        throw new Error("author not found");
      }
      const dbPost:IPost = new postModel({
          title,
          content,
          author
        })
        await dbPost.save()     
        const dbUser:User | unknown = await userModel.findByIdAndUpdate(author,{$push: {posts:dbPost.id}}) 
        console.log(dbUser);
        
      return await getPostById(dbPost.id)
    } catch (err) {
      console.log(err)
      throw err
    }
  };

  export const getPostById = async (id:string) :Promise<IPost | unknown> => {
    return await postModel.findById(id).populate("author").populate("comments.author")
  }
  export const getAllPosts = async ():Promise<IPost[] | unknown> => {
    return await postModel.find()
  }

  export const updatePostService = async(id:string, updatePost :UpdatePostDto): Promise<IPost | unknown> => {
    const post :IPost | unknown = await postModel.findByIdAndUpdate(id,updatePost)
    return await getPostById(id)
  }


export const DeletePost = async(id:string):Promise<IPost|unknown> => {
    try {
        const myPost : IPost | unknown = await getPostById(id)
        
        console.log("plpllppl");
        
        await postModel.deleteOne({_id: id})
        await userModel.updateOne(
            { posts: id },
            { $pull: { posts: id } })
        return myPost
    } catch (err) {
        throw err
    }
}