import express from 'express';

import comments from '../Models/Comment.js';


import Video from "../Models/Video.js";

export const addComment=async(req,res,next)=>{
const comment=new comments({...req.body,userId:req.user.id})

try{
const newComments=await comment.save();
console.log(newComments)
res.status(200).json(newComments);


}catch(err){
    console.warn(err)
}

}
export const delet = async (req, res, next) => {
  const commentId=req.params.id;
  try {
      const comment = await comments.findById(commentId);
      
      const video = await Video.findById(comment.videoId);

      if (!comment) {
          return res.status(404).json({ message: "Comment not found" });
      }

      if (!video) {
          return res.status(404).json({ message: "Video not found" });
      }

      if (req.user.id === comment.userId || video.userId === req.user.id) {
          await comments.findByIdAndDelete(req.params.id);
          res.status(200).json({ message: "Comment deleted" });
      } else {
          res.status(403).json({ message: "Unauthorized" });
      }
  } catch (err) {
    console.warn(err)
      res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getComment=async(req,res,next)=>{

const comment=await comments.find({videoId:req.params.videoId});
console.warn(comment)
try{

res.status(200).json(comment);


}catch(err){
    console.warn(err)
}
}