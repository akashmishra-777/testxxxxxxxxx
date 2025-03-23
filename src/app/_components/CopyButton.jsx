"use client"
export default function CopyButton({text}) {
    async function copyText() {
        try {
            await navigator.clipboard.writeText(text);
            alert("Copied to clipboard");
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    }
  return <>
  
  <button onClick={copyText} className="text-[gray] hover:scale-[1.05] hover:cursor-pointer border-[gray] px-2 text-sm rounded border-2">Copy</button>
  </>



}