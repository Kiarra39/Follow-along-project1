const express = require('express');
const upload = require('../middlewares/multer.js');
const {
  CreateUSer,
  verifyUserController,
} = require('../controllers/user.controller.js');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/create-user', upload.single('file'), CreateUSer);
router.get('/activation/:token', verifyUserController);

router.post('/signup');
router.post('/login')
module.exports = router;