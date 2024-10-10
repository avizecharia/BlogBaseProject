import userModel, { IUser } from "../models/userModel";




const createUserService = async (user:IUser) => {
    try {
      const { username,email,profile} = user;
      const dbUser = new userModel({
        username,
        email,
        profile
      });
      await dbUser.save()
    } catch (err) {
      console.log(err)
      throw err
    }
  };
  