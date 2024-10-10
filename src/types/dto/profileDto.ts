import { Schema } from "mongoose";


 interface ProfileDto {
    bio:string,
    socialLinks?:string[]
}
const profileSchema = new Schema<ProfileDto>({
    bio:{
        type:String,
        default:"",
    },
    socialLinks:{
        type:[String],
        default:[]
    }
});

export default profileSchema
