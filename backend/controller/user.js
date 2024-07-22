import { createError } from "../CreateError.js"
import UsersShema from "../Models/User.js";
import Video from "../Models/Video.js";
export const update=async(req,res,next)=>{
   if(req.params.id===req.user.id){
    try{
     const updatedUser=await UsersShema.findByIdAndUpdate(req.params.id,{

        $set:req.body
     },{
        new:true
     })

res.status(200).json('updated user');
    }catch(err){
 next(createError(400,"updation error"))

    }
   }else{

    next(createError(401,"you cannot update others account"))
   }


}
export const delet=async(req,res)=>{
    if(req.params.id===req.user.id){
        try{
         await UsersShema.findByIdAndDelete(req.params.id);
    
    res.status(200).json('DELETED USER');
        }catch(err){
     next(createError(400,"you cannot deleted"))
    
        }
       }else{
    
        next(createError(401,"you cannot deleted others account"))
       }
    

    
}
export const subscribe=async(req,res,next)=>{
try{
await UsersShema.findByIdAndUpdate(req.user.id,{

    $push:{subscribedUsers:req.params.id}
    
})
await  UsersShema.findByIdAndUpdate(req.params.id,{
$inc:{subscribers:1}

},{
    new:true
})
res.status(200).json("subscription successfully")

}catch(err){

    next(createError(400,"Error in subscription"))
}

    
}
export const unsubscribe=async(req,res,next)=>{

try{
await UsersShema.findByIdAndUpdate(req.user.id,{
    $pull:{subscribedUsers:req.params.id}
})
await UsersShema.findByIdAndUpdate(req.params.id,{
    $inc:{subscribers:-1}
},{
    new:true
})

}catch(err){
    console.warn(err)
}
    
}
 const get=async(req,res,next)=>{
const user= await UsersShema.findByid(req.params.id);
try{
if(user){
res.status(200).json(user);


}

}catch(err){
next(createError(401,"error in displaying data"))
}
}
export const like=async(req,res)=>{
const id=req.user.id;
const videoId=req.params.videoId;
try{
   await Video.findByIdAndUpdate(videoId,{
    $addToSet:{likes:id},
    $pull:{deslikes:id}
   })
res.status(200).json("liked the video")

}catch(err){
    console.warn(err);
    res.json(err);
}

    
}
export const deslike=async(req,res)=>{
    const id=req.user.id;
    const videoId=req.params.videoId;
    try{
       await Video.findByIdAndUpdate(videoId,{
        $addToSet:{deslikes:id},
        $pull:{likes:id}
       })
    res.status(200).json("liked the video")
    
    }catch(err){
        console.warn(err);
        res.json(err);
    }
    
    

    
}
export default get;