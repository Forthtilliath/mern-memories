import express from 'express';

import * as usersCtrl from '../controllers/user.js';

const router = express.Router();

router.post('/signin', usersCtrl.signin);
router.post('/signup', usersCtrl.signup);

export default router;
