const express = require('express');
const multer = require("multer");
// const upload = require('../middlewares/multer.js');
const {
  CreateUSer,
  verifyUserController,
  signup,
  login,
  getUserData
} = require('../controllers/user.controller.js');
const jwt = require('jsonwebtoken');
const upload = multer({ dest: "temp-uploads/" });
const router = express.Router();
const verifyUser = require('../middlewares/jwt-verify.js');
router.post('/create-user', upload.single('file'), CreateUSer);
router.get('/activation/:token', verifyUserController);

router.post('/signup', upload.single("file"),signup);
router.post('/login', login);
router.get('/user-data', verifyUser, getUserData);
module.exports = router;