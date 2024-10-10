import { IUser, User,userModel } from "../models/userModel";




const createUserService = async (user:IUser):Promise<User|unknown> => {
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
  const gettUserByName = async (username:string) :Promise<User | unknown> => {
    return await userModel.find({username})
  }