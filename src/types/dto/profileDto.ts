import { Schema } from "mongoose";


 interface ProfileDto {
    bio?:string,
    socialLinks?:string[]
}
const profileSchema = new Schema<ProfileDto>({});

export default profileSchema
