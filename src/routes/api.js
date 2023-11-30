const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');



//User Manage
router.post('/Registration',UserController.Registration)
router.post('/Login',UserController.Login);

router.post('/ProfileUpdate/:email',AuthVerifyMiddleware,UserController.ProfileUpdate)
router.get("/ProfileDetails",AuthVerifyMiddleware,UserController.ProfileDetails);
router.get("/RecoverVerifyEmail/:email",UserController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",UserController.RecoverVerifyOTP);
router.post("/RecoverResetPass",UserController.RecoverResetPass);



//Task Manage


module.exports = router;