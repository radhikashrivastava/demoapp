"use client";
import{useRouter} from 'next/navigation'
import {useState, FormEvent} from "react";
import { Card, CardContent } from "@/components/ui/card"
import { UserMetricsCard } from "../components/use-metrics.card"
import { UserHeader } from "../components/use-header"
export default function Home() {

    const [inputVal, setInputVal] = useState("")
    const {push} = useRouter()
    const handleSubmit = (event: FormEvent) => {
       event.preventDefault()
       console.log(inputVal)
       const userId = 42;
const url = `/users/${userId}`;
       push('/prediction/${userId}')
    }
  return (
    
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //    <form onSubmit={handleSubmit}>
    //     <input type="text" placeholder="type your name" onChange={(e)=>setInputVal(e.target.value)} value={inputVal}/>
    //     <button type="submit">Submit</button>
    //    </form>
    // </div>
    <main className="min-h-screen bg-background">
    {/* Header */}
    <UserHeader />

    {/* Main Content */}
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Card className="border-0 shadow-sm">
        <CardContent className="p-6">
          {/* Title Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-black-500 mb-2">Requester-Level Summary</h1>
      
          </div>
          <div className="mb-8">
  

  <select className="border border-gray-300 rounded px-3 py-1">
    <option value="10">Last 10 days</option>
    <option value="30">Last 30 days</option>
    <option value="60">Last 60 days</option>
  </select>
</div>

          {/* Metrics Grid */}
          <div className="space-y-4">
            <UserMetricsCard
              metric="0"
              label="Total Tickets Submitted in past 3 days"
              linkText="Click to view user profile"
            />
            <UserMetricsCard metric="0" label="Total Unsolved Tickets" linkText="Click to view user profile" />
            <UserMetricsCard
              metric="24"
              label="Total Tickets Submitted (All History)"
              linkText="Click to view user profile"
            />
            <UserMetricsCard
              metric="0"
              label="Open tickets with Jira"
              subtext="No matching tickets"
              hasLink={false}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  </main>
    
  );
}
