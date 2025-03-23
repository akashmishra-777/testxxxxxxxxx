import mongoose from "mongoose";


export default async function dbConnection(){
    try{
        await mongoose.connect("mongodb+srv://akashmishra273164:Am123212@cluster0.boqu9.mongodb.net/todo")
        console.log("Database is connected successfully")
    }catch(e){
        console.log(e)
    }
}