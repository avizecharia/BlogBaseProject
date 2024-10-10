import mongoose, { Schema, Document, Types, InferSchemaType } from "mongoose";
import validator from "validator";
import isEmail from "validator/lib/isEmail";
import profileDto from '../types/dto/profileDto'


export interface IUser extends Document {
  username: string;
  email: string;
  profile: {
    bio?: string;
    socialLinks?: string[];
  };
  posts?:Types.ObjectId[];
}





const UserSchema = new Schema<IUser>({
  username : {
    type: String,
    required : [true, "you  missing user name"],
    min:[4, "insert min 4 chart"],
    max:[20,"you cant insert more then 20 chart"]
  },
  email:{
    type:String,
    required: [true , " you must insert email"],
    validate : isEmail
  },
  profile:{
    type:profileDto
  },
  posts:{
    type:[Types.ObjectId],
    ref:"Post",
    default:[]
  }

});

export type User = InferSchemaType<typeof UserSchema>;

export const userModel =  mongoose.model<IUser>("User", UserSchema);


