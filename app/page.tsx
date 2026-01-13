"use client";
import{useRouter} from 'next/navigation'
import {useState, FormEvent, useEffect} from "react";
import { Card, CardContent } from "@/components/ui/card"
import { UserMetricsCard } from "../components/use-metrics.card"
import { UserHeader } from "../components/use-header"
export default function Home() {

  const [days, setDays] = useState(10); // default last 10 days
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  // const fetchData = async (days: number) => {
  //   setLoading(true);
  //   try {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //     const result = await res.json();
  //     // Add the selected days to show how selection affects data
  //     setData({ ...result, selectedDays: days });
  //   } catch (err) {
  //     console.error("Error fetching data:", err);
  //     setData(null);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  /**Code with Authorization */
  const fetchData = async (days: number) => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://apim.workato.com/radhikas4/samsara-v1/samsara",
        {
          method: "GET", // change to POST if your API requires it
          headers: {
            "Content-Type": "application/json",
            "API-TOKEN": "a026ef62e10937b889bafdb3d494d8f4259cc5b1f9a66eaad3055cd396f16859",
          },
        }
      );
  
      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }
  
      const result = await res.json();
  
      // attach selected days as before
      setData({ ...result, selectedDays: days });
    } catch (err) {
      console.error("Error fetching data:", err);
      setData(null);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchData(days);
  }, [days]);   
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
  

  <select  className="border border-gray-300 rounded px-3 py-1"
        value={days}
        onChange={(e) => setDays(Number(e.target.value))}>
        <option value={10}>Last 10 days</option>
        <option value={30}>Last 30 days</option>
        <option value={60}>Last 60 days</option>
  </select>
  <div className="mt-4">
        {loading && <p>Loading...</p>}
        {!loading && data && (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
        {!loading && !data && <p>No data available</p>}
      </div>
</div>

          {/* Metrics Grid */}
          <div className="space-y-4">
            <UserMetricsCard
              data={data}
              metric="0"
              label="Total Tickets Submitted in past 3 days"
              linkText="Click to view user profile"
            />
            <UserMetricsCard data={data} metric="0" label="Total Unsolved Tickets" linkText="Click to view user profile" />
            <UserMetricsCard data={data}
              metric="24"
              label="Total Tickets Submitted (All History)"
              linkText="Click to view user profile"
            />
            <UserMetricsCard data={data}
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
