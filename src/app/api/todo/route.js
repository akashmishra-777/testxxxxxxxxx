import { NextResponse } from "next/server"
import dbConnection from "@/app/lib/dbConnection"
import TODO from "@/app/models/todo"


dbConnection()

export async function GET(req){
    try{
        const data = await TODO.find({})
        return NextResponse.json({data:data})
        
    }catch(e){
        console.log(e)
        return NextResponse.json({msg:e.message})
    }

    
}

export async function POST(req) {
    try{
        const body = await req.json()
        const task = body.task
        const check = await TODO.create({
            task:task
        })

        return NextResponse.json({msg:"Task created successfully"})
    }catch(e){
        console.log(e)
        return NextResponse.json({msg:e.message})
    }
}



export async function DELETE(req){
    try{
        const body = await  req.json()
        const id   = body.id
        const check = await TODO.findByIdAndDelete(id)
        return NextResponse.json({msg:"Task deleted successfully"})
    }catch(e){
        console.log(e)
        return NextResponse.json({msg:e.message})
    }
}


export async function PUT(req){
    try{
        const body = await req.json()()
        const id = body.id
        const task = body.get("task")
        const check = await TODO.findByIdAndUpdate(id,{
            task:task
        })      
        return NextResponse.json({msg:"Task updated successfully"})
    }catch(e){
        console.log(e)
        return NextResponse.json({msg:e.message})
    }
}
