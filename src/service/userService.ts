import { IUser, User,userModel } from "../models/userModel";




export const createUserService = async (user:IUser):Promise<User|unknown> => {
    try {
      const { username,email,profile} = user;
      const dbUser = new userModel({
        username,
        email,
        profile
      });
      await dbUser.save()
      return await gettUserByName(username)
    } catch (err) {
      console.log(err)
      throw err
    }
  };
  export const gettUserByName = async (username:string) :Promise<User | unknown> => {
    return await userModel.findOne({username})
  }

  export const getAllUsers = async ():Promise<User[] | unknown> => {
    return await userModel.find()
  }