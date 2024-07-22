
import { createError } from '../CreateError.js';
import Video from '../Models/Video.js'
import UsersShema from '../Models/User.js';

export const addVideo=async(req,res,next)=>{
const newVideo= new Video({userId:req.user.id,...req.body});
try{
const saved_video=await newVideo.save();

res.status(200).json(saved_video)
}catch(err){
    console.warn(err)
}

}
export const deletVideo=async(req,res,next)=>{

    const video=await Video.findById(req.params.id);
    if(!video){
    
    next(createError(401,"oops video not found"))
    }
    if(req.user.id===video.id){
    const updatedVideo=await Video.findByIdAndDelete(req.params.id )
    
    res.status(200).json(videoDeleted);
}else{
next(createError(401,"error in deletion"))

}
}
export const updateVideo=async(req,res,next)=>{
const video=await Video.findById(req.params.id);
if(!video){

next(createError(401,"oops video not found"))
}
if(req.user.id===video.id){
const updatedVideo=await Video.findByIdAndUpdate(req.params.id,{

    $set:req.body
},{
    new:true
}




)

res.status(200).json(updateVideo);

}

}
export const getVideo=async(req,res,next)=>{
const videos=await Video.findById(req.params.id);
try{
res.status(400).json(videos)

}catch(err){
    console.warn(err)
    next(createError(400,"video not found"))
}

}
export const addViews=async(req,res,next)=>{
   
    try{
     
        await Video.findByIdAndUpdate(req.params.id,{
            $inc:{views:1}
        });
        res.status(200).json("views added")

    }catch(err){

        next(createError(400,"views error"))
    }


}
export const rendom=async(req,res,next)=>{
    const videos=await Video.aggregate([{$sample:{size:40}}])
    try{

  res.status(200).json(videos)
    }catch(err){
console.log(err)

    }



}
export const trends=async(req,res,next)=>{
    const videos=await Video.find().sort({views:-1});
    try{

  res.status(200).json(videos)
    }catch(err){

   res.status(401).json(err);
   console.log(err);
    }



}
export const sub = async (req, res, next) => {
    try {
        // Fetch the user from the database
        const user = await UsersShema.findById(req.user.id);
        if (!user) {
            return next(createError(404, "User not found"));
        }

        // Assuming subscribedUsers is an array field in the user schema
        const subscribedChannels = user.subscribedUsers;

        if (!subscribedChannels || subscribedChannels.length === 0) {
            return res.status(200).json([]); // Return an empty array if user has no subscribed channels
        }

        const list = await Promise.all(
            subscribedChannels.map((channelId) => {
                return Video.find({ userId: channelId });
            })
        );

        res.status(200).json(list.flat());
    } catch (error) {
        next(createError(500, "Internal Server Error"));
    }
};
export const getBytags=async(req,res)=>{

const tags=req.query.tags.splite(",")

try{
const videos=await Video.find({tags:{$in:tags}}).limit(20);
res.status(200).json(videos);

}catch(err){
    console.warn(err)
}

}


export const search = async (req, res, next) => {
    try {
        // Ensure query is a string
        const query = String(req.query.q).trim();

        if (!query) {
            return next(createError(400, "Query parameter is required"));
        }

        console.log(`Searching for videos with title containing: ${query}`);

        // Use regex to search for videos by title
        const videos = await Video.find({
            title: { $regex: query, $options: "i" }
        }).limit(40);

        if (videos.length === 0) {
            return res.status(404).json({ message: "No videos found" });
        }

        // Send the found videos as a JSON response
        res.status(200).json(videos);
    } catch (error) {
        // Handle any errors that occur
        console.error(`Error during search: ${error.message}`);
        next(createError(500, "Internal Server Error"));
    }
};
