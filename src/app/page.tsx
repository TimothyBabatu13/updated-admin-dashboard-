'use client';

import { useAuthProvider } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const c = useAuthProvider();
  const redirect = useRouter();

  useEffect(()=>{
    setTimeout(()=>{
      return (c?.isUserAuthenticated) ? redirect.push('/dashboard') : redirect.push('/login')
    }, 3000)
  }, [])
  
  /*
    Check if user is authenticated
    if user is authenticated, redirect them to dashboard#
    if user is not authenticated, redirect them to login page
  */
  return (
    <div className="flex items-center justify-center min-h-[100vh]">
      Loading...
    </div>
  );
}
