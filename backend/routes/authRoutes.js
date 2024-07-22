import express from 'express';
import auth, { signIn } from '../controller/auth.js'
import  signUp  from '../controller/auth.js';
import { verifyToken } from '../verifyToken.js';
const router=express.Router();
router.post('/signUp',signUp)
router.post('/signin',signIn)



export default router;