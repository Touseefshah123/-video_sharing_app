import express from 'express';
import jwt from 'jsonwebtoken';
import { createError } from './CreateError.js';
export const verifyToken=async(req,res,next)=>{
const token=req.cookies.access_token;
if(!token){

    
}
jwt.verify(token,process.env.secret_key,(err,user)=>{
if(err){
   res.status(401).json({message:err.message})
}
req.user=user;
next()

});




}