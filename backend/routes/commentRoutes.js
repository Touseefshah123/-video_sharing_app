import express from 'express';
import { verifyToken } from '../verifyToken.js';
import { addComment, delet, getComment } from '../controller/comment.js';

const router=express.Router();

router.post('/addComment',verifyToken,addComment);

router.delete('/delet/:id',verifyToken,delet)
router.get('/getComment/:videoId',getComment)
export default router;