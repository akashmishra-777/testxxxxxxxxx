"use client"
import { useRouter } from "next/navigation"
export default function Form() {

    const router = useRouter()
    async function addTodo(e){
        e.preventDefault()
        try{
            const res  = await fetch(`/api/todo`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({task:e.target[0].value}),
                cache:"no-cache"
            })

            const data = await res.json()

            router.refresh()
        }catch(e){
            console.log(e)
        }

    }

    return<>

    <div className="flex">      
    <form  method="post" onSubmit={addTodo}>
          <input type="text" className="text-white border-2 mr-3 px-2 text-[17px] py-1 rounded border-gray-500" placeholder="New todo..." />
          <button type="submit" className="bg-white text-black text-lg px-2 rounded hover:cursor-pointer hover:scale-[1.05]">+</button>
    </form>
        </div>

        
    </>
}