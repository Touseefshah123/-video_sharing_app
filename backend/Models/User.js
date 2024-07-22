import mongoose, { Schema } from "mongoose";
const userSchema=new Schema({
name:{type:String,required:true,unique:true},
email:{type:String,required:true,unique:true},
password:{type:String,required:true},
img:{type:String},
subscribers:{type:Number,
    default:0
},

subscribedUsers:[String]



})
const UsersShema=mongoose.model("users",userSchema);
export default UsersShema;