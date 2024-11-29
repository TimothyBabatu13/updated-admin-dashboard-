'use client';

import { stringName } from "@/app/components/dashboard-header";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";


interface contextType {
  status: stringName; 
  setStatus: Dispatch<SetStateAction<stringName>>
}
const context = createContext<null | contextType>(null)

interface childrenProps {
    children: React.ReactNode
}
const StatusProvider = ( { children } : childrenProps) => {
  const [status, setStatus] = useState<stringName>('All')
  return (
    <context.Provider value={{ status, setStatus }}>
        {children}
    </context.Provider>
  )
}

export const useStatusProvider = () => {
  const Context = useContext(context);
  if(Context){
    return Context
  }
}

export default StatusProvider