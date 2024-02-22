const Employee = require('../Models/employee');

exports.getallemployees= async(req,res) =>{
    try{
       const employee = await Employee.find();
       res.status(200).json({
        status:'success',
        data:{
            employee:employee
        }
       })

    }
    catch(err){
      res.status(400).json({
        status:'failed',
        message:err.message
      })
    }
}

exports.createemployee = async(req,res) => {
    try{
       const employee = await Employee.create(req.body);
       res.status(201).json({
        status:'sucess',
        data:{
            employee:employee
        }
       })
    }catch(err){
        res.status(400).json({
            status:'failed',
            message:err.message
          })
    }
}

exports.getemployeebyid = async(req,res) =>{
    try{
        const empbyid = await Employee.findById(req.params.id);
        res.status(200).json({
            status:'sucess',
            data:{
                employee:empbyid
            }
           })

    }
    catch(err){
        res.status(400).json({
            status:'failed',
            message:err.message
          })
    }
}

exports.updateemployee = async(req, res) => {
    try{
       const updateemployee = await Employee.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
       res.status(201).json({
         status:"success",
         data:{
            employee:updateemployee
         }
       })

    }catch(err){
        res.status(400).json({
            status:"failed",
            message:"invalid data "+err
        })
    }
}

exports.deleteemployee = async(req, res) => {
   try{
        const deleteemployee = await Employee.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status:"success",
            data:null
        })
   }
   catch(err){
        res.status(400).json({
            status:"failed",
            message:"invalid data "+err
        })

   }
   
}