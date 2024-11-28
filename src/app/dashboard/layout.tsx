import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Building2, LayoutDashboard, Settings, Users } from 'lucide-react'

import { Button } from "@/components/ui/button"
import StatusProvider from "./StatusProvider"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Admin dashboard for managing businesses",
}

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function Page({ children }: DashboardLayoutProps) {
  return (
    <StatusProvider>

    <div className="flex min-h-screen">
      <aside className="hidden w-64 flex-col bg-gray-100 p-4 dark:bg-gray-800 md:flex">
        <div className="mb-8 flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Logo"
            width={32}
            height={32}
          />
          <span className="text-lg font-bold">Admin Dashboard</span>
        </div>
        <nav className="flex flex-col gap-2">
          <Button variant="ghost" className="justify-start" asChild>
            <Link href="/dashboard">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start" asChild>
            <Link href="/dashboard/businesses">
              <Building2 className="mr-2 h-4 w-4" />
              Businesses
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start" asChild>
            <Link href="/dashboard/users">
              <Users className="mr-2 h-4 w-4" />
              Users
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start" asChild>
            <Link href="/dashboard/settings">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </Button>
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
    </StatusProvider>
  )
}

