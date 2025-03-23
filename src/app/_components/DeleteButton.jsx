"use client"
import { useRouter } from "next/navigation"
export default function DeleteButton({id}) {
    const router = useRouter()

    async function deleteBtn() {
        try {
            const res = await fetch(`/api/todo`,{
                method:"DELETE",
                cache:"no-cache",
                body:JSON.stringify({id:id})
            })

            const data = await res.json()
            router.refresh()
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    }
  return <>
  
  <button className="text-[#E22336] hover:scale-[1.05] hover:cursor-pointer border-[#e22336] px-2 text-sm rounded border-2" onClick={deleteBtn}>Delete</button>
  </>



}