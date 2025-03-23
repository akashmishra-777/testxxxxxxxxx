import mongoose from "mongoose";



const todoSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    }
},{timestamps:true})




const TODO = mongoose.models.TODO || mongoose.model("TODO", todoSchema);



export default TODO