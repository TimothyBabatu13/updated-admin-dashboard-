'use client';
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"

interface contextType {
    isUserAuthenticated: boolean,
    setIsUserAuthenticated:  Dispatch<SetStateAction<boolean>>
}

const context = createContext< contextType | null>(null)

const AuthProvider = ({ children } : {
    children: React.ReactNode
}) => {

    const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean>(false);
  return (
    <context.Provider value={{isUserAuthenticated, setIsUserAuthenticated}}>
        {children}
    </context.Provider>
  )
}

export const useAuthProvider = () => {
    const Context = useContext(context);
    if(Context) return Context;
}
export default AuthProvider