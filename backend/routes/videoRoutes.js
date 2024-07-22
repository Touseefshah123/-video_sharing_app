import express from 'express';
import { addVideo, deletVideo, getVideo, rendom, search, sub, trends, updateVideo } from '../controller/videos.js';
import { verifyToken } from '../verifyToken.js';

const router=express.Router();


router.post('/addVideos',verifyToken,addVideo);
router.put('/:id',verifyToken,updateVideo);
router.delete('/:id',verifyToken,deletVideo);
router.get('/getvideo/:id',getVideo);
router.put('/view/:id',addVideo);
router.get('/trend',trends);
router.get('/sub',verifyToken,sub);
router.get('/rendom',rendom)
router.get('/search',search);

export default router;