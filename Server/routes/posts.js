import express from 'express';
import { getFeedPosts, likePost,getUserPosts } from '../controllers/posts.js';
// import {  } from '../controllers/posts.js'

const router = express.Router();

router.get('/' ,getFeedPosts);
router.get("/:userId",getUserPosts);

router.patch("/:id/like",likePost);
export default router;