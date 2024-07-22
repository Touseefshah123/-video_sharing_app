import express from 'express';
import { delet, deslike, like, subscribe, unsubscribe, update } from '../controller/user.js';
import get from '../controller/user.js';
import { verifyToken } from '../verifyToken.js';

const router=express.Router();

router.put('/:id',verifyToken ,update);
router.delete('/:id',verifyToken,delet);;
router.get('/find/:id',get);
router.put('/subscribe/:id',verifyToken,subscribe);
router.put('/unsubscribe/:id',verifyToken,unsubscribe);
router.put('/like/:videoId',verifyToken,like);
router.put('/deslike/:videoId',verifyToken,deslike)

export default router;