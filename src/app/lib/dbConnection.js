import mongoose from "mongoose";


export default async function dbConnection(){
    try{
        await mongoose.connect(process.env.DB)
        console.log("Database is connected successfully")
    }catch(e){
        console.log(e)
    }
}