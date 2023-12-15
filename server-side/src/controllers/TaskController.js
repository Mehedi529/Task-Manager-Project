const TaskModel = require('../models/TaskModel');



//Create Task --> Need to wrok when any one can put wrong mail in the mail db that could be show wrong mail
exports.CreateTask = async (req,res)=>{
    try{
        let reqBody = req.body;
        reqBody.email = req.headers['email']
        let result = await TaskModel.create(reqBody);
        res.status(200).json({status:"success",data:result})
    }
    catch(error){
        res.status(200).json({status:"fail",data:error})
    }
}



//Update Task
exports.UpdateTask = async (req,res)=>{
    try{
        let id = req.params.id;
        let Query={_id:id};
        let reqBody=req.body;
        let result= await TaskModel.updateOne(Query,reqBody)
        res.status(200).json({status:"success",data:result})
    }
    catch(error){
        res.status(200).json({status:"fail",data:error})
    }
}


//List Task Bt=y Status
exports.ListTaskByStatus=async (req,res)=>{
    try {
        let status= req.params.status;
        let email=req.headers['email'];
        let result= await TaskModel.find({email:email,status:status});
        res.status(200).json({status:"success",data:result})
    }
    catch (error) {
        res.status(200).json({status:"fail",data:error})
    }
}



//Task Status Count
exports.TaskStatusCount=async (req,res)=>{
    try {
        let email=req.headers['email'];
        let result= await TaskModel.aggregate([
            {$match:{email:email}},
            {$group:{_id:"$status",sum:{$count:{}}}}
        ])
        res.status(200).json({status:"success",data:result})
    }
    catch (error) {
        res.status(200).json({status:"fail",data:error})
    }
}



//Delete Task
exports.DeleteTask = async (req,res)=>{
    try{
        let id = req.params.id;
        let Query = {_id:id};
        let result = await TaskModel.deleteOne(Query);
        res.status(200).json({status:"success",data:result})
    }
    catch(error){
        res.status(200).json({status:"fail",data:error})
    }
}