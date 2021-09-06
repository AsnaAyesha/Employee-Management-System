const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log("MongoDB Connection Succeded ");
    }else{
        console.log("Errror inDB Connection" +err);
    }
});
require('./employee.model');