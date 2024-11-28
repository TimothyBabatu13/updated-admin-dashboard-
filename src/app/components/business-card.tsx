
import { Check, X } from 'lucide-react'
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { dataType } from '../dashboard/data'

export function BusinessCard({business} : {
  business: dataType
}) {
    
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={'/img1.jpg'}
            alt={business.businessName+' image'}
            layout="fill"
            objectFit="cover"
          />
          
        </div>
      </CardHeader>
      <CardContent className="grid gap-2.5 p-4">
        <h3 className="text-2xl font-bold">{business.businessName}</h3>
        <div className="flex items-center gap-2">
          <Badge variant={business.businessType === "Online" ? "default" : "secondary"}>
            {business.businessType}
          </Badge>
          <Badge
            variant={
              business.status === "Accepted"
                ? "secondary"
                : business.status === "Declined"
                ? "destructive"
                : "outline"
            }
          >
            {business.status}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Marketing: {business.marketingStrategies}
        </p>
        {business.contactInformation?.phone && <p className="text-sm">{business.contactInformation.phone}</p>}
        {business.contactInformation?.email && <p className="text-sm">{business.contactInformation.email}</p>}
      </CardContent>
      <CardFooter className="flex justify-between p-4">
        <Button variant="outline" size="sm" className="w-[48%] bg-blue-600 text-white">
          <Check className="mr-2 h-4 w-4" />
          Approve
        </Button>
        <Button variant="outline" size="sm" className="w-[48%] bg-red-500 text-white">
          <X className="mr-2 h-4 w-4" />
          Decline
        </Button>
      </CardFooter>
    </Card>
  )
}

