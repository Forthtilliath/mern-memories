import express from 'express';
import * as postsCtrl from '../controllers/posts.js';

const router = express.Router();
import auth from '../middleware/auth.js';

router.get('/', postsCtrl.getPosts);
router.get('/search', postsCtrl.getPostsBySearch);
router.get('/:id', postsCtrl.getPost);


router.post('/', auth, postsCtrl.createPost);
router.patch('/:id', auth, postsCtrl.updatePost);
router.delete('/:id', auth, postsCtrl.deletePost);

router.patch('/:id/likePost', auth, postsCtrl.likePost);

export default router;
