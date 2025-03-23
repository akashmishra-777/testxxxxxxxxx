
import Link from "next/link"
import CopyButton from "./_components/CopyButton"
import DeleteButton from "./_components/DeleteButton"
import Form from "./_components/Form"
export default async function Page(){

  const data = await fetch(`/api/todo`,{
    cache:"no-cache",
  })

  const datax = await data.json()

  const dx= Array.from(datax.data)
  
 const len = dx.length


  return<>
    <div className="container bg-slate-900 h-screen px-5 py-5 flex flex-col items-center ">
      
      <div className="text-gray-400 px-3 py-2 mx-auto w-[65%] rounded bg-slate-800 text-2xl justify-between flex items-center mb-3">

        <span className="text-lg  font-semibold">TODOx</span>

        <Form/>

        

      </div>


     {len === 0 ? <div className="text-gray-400 px-3 py-2 mx-auto w-[65%] rounded bg-slate-800 text-2xl justify-between flex items-center flex-col mb-2 ">
      All the tasks are completed
      </div>:

      dx.map((item,index)=>{

        return<div key={item._id} className="text-blue-700 px-3 py-2 mx-auto w-[65%] rounded bg-slate-800 text-2xl justify-between flex items-center flex-col mb-2 ">
        
        <div className="flex flex-row justify-between  w-[100%]">
        <span className="text-lg text-gray-400 font-semibold">Task {index+1}</span>
        

        <div className="flex flex-row gap-2"> 

        <CopyButton text= {item.task}/>
        <DeleteButton  id={item._id}/>

       
       
        </div>

        </div>

        <span className="text-gray-400 mt-1 text-lg text-justify  w-full">
          {item.task}
        </span>

      </div>
        
      })
     }

     


    </div>
  </>
}