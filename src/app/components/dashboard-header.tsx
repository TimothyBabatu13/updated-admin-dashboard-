'use client';
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { useStatusProvider } from "../dashboard/StatusProvider";

export type stringName = 'Approved' | 'Declined' | 'All' | 'Pending'
export function DashboardHeader() {
  const [active, setActive] = useState<stringName>('All');
  const stat = useStatusProvider();

  const handleClick = (e: stringName) : void => {
    setActive(e)
    stat?.setStatus(e)
  }
  return (
    <div className="flex flex-col gap-4 xs:flex-row xs:items-center xs:justify-between">
      <h2 className="text-3xl font-bold tracking-tight">Businesses</h2>
      <div className="flex items-center gap-2">
        <Button onClick={()=>handleClick('All')} className={`${active === 'All' && "bg-blue-600 text-white hover:bg-blue-600 hover:text-white"}`}  variant="outline">All</Button>
        <Button onClick={()=>handleClick('Approved')} variant="outline" className={`${active === 'Approved' && "bg-blue-600 text-white hover:bg-blue-600 hover:text-white"}`}>Approved</Button>
        <Button onClick={()=>handleClick('Declined')} variant="outline" className={`${active === 'Declined' && "bg-red-500 text-white hover:bg-red-500 hover:text-white"}`}>Declined</Button>
    <Button onClick={()=>handleClick('Pending')} className={`${active === 'Pending' && "text-[#636AE8FF] bg-[#F2F2FDFF] hover:text-[#636AE8FF] hover:bg-[#F2F2FDFF]"}`} variant="outline">Pending</Button>
      </div>
    </div>
  )
}

