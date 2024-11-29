'use client';
import { useEffect, useState } from "react";
import { BusinessCard } from "../components/business-card"
import { DashboardHeader } from "../components/dashboard-header"
import { DashboardShell } from "../components/dashboard-shell"
import { data, dataType } from "./data"
import { useStatusProvider } from "@/context/StatusProvider";


const Page = () => {
  const [Data, setData] = useState<Array<dataType>>(data);
  const c = useStatusProvider();
  useEffect(()=>{
    setData(()=>{
      if(c?.status === 'All') return data
      return data.filter(item => item.status === c?.status)
    })
  }, [c?.status])
  const Datum = Data;
  return (
    <div>
      <DashboardShell>
      <DashboardHeader />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Datum.map((business, id) => (
          <BusinessCard key={id} business={business} />
        ))}
      </div>
    </DashboardShell>
    </div>
  )
}

export default Page