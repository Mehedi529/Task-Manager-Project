const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');



//User Manage
router.post('/Registration',UserController.Registration)
router.post('/Login',UserController.Login);

router.post('/ProfileUpdate',AuthVerifyMiddleware,UserController.ProfileUpdate)
router.get("/ProfileDetails",AuthVerifyMiddleware,UsercleController.ProfileDetails);



//Task Manage


module.exports = router;