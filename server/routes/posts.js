import express from 'express';
import * as postsCtrl from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', postsCtrl.getPosts);
router.post('/', auth, postsCtrl.createPost);
router.patch('/:id', auth, postsCtrl.updatePost);
router.delete('/:id', auth, postsCtrl.deletePost);

router.patch('/:id/likePost', auth, postsCtrl.likePost);

export default router;
