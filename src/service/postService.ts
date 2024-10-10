import mongoose from "mongoose";
import postModel, { IPost } from "../models/postModel";
import { User, userModel } from "../models/userModel";
import { gettUserById, gettUserByName } from "./userService";

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
      return await gettPostById(dbPost.id)
    } catch (err) {
      console.log(err)
      throw err
    }
  };

  export const gettPostById = async (id:mongoose.Types.ObjectId) :Promise<IPost | unknown> => {
    return await postModel.findById(id)
  }