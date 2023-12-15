const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');
const TaskController = require('../controllers/TaskController');



//User Manage
router.post('/Registration',UserController.Registration)
router.post('/Login',UserController.Login);

router.post('/ProfileUpdate/:email',AuthVerifyMiddleware,UserController.ProfileUpdate)
router.get("/ProfileDetails",AuthVerifyMiddleware,UserController.ProfileDetails);
router.get("/RecoverVerifyEmail/:email",UserController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",UserController.RecoverVerifyOTP);
router.post("/RecoverResetPass",UserController.RecoverResetPass);



//Task Manage
router.post("/CreateTask",AuthVerifyMiddleware,TaskController.CreateTask);
router.get("/UpdateTask/:id/",AuthVerifyMiddleware,TaskController.UpdateTask);
router.get("/ListTaskByStatus/:status",AuthVerifyMiddleware,TaskController.ListTaskByStatus);
router.get("/TaskStatusCount",AuthVerifyMiddleware,TaskController.TaskStatusCount);
router.get("/DeleteTask/:id",AuthVerifyMiddleware,TaskController.DeleteTask);



module.exports = router;