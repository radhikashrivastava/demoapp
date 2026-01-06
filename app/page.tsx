"use client";
import{useRouter} from 'next/navigation'
import {useState, FormEvent} from "react";
export default function Home() {
    const [inputVal, setInputVal] = useState("")
    const {push} = useRouter()
    const handleSubmit = (event: FormEvent) => {
       event.preventDefault()
       push('/prediction/${inputVal}')
    }
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
       <form onSubmit={handleSubmit}>
        <input type="text" placeholder="type your name" onChange={(e)=>setInputVal(e.target.value)} value={inputVal}/>
        <button type="submit">Submit</button>
       </form>
    </div>
  );
}
