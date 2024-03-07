import React from 'react'
import Image from 'next/image'
import {
    Card,
    CardContent,
   
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
type Props={
    title : string;
    description: string;
    image: string;
}

export default function Service ({title, description, image }: Props) {
  return (
    <div className='p-4 max-w-sm'>
      <div className='flex rounded-lg h-full'>
          <Card>
          <CardHeader>
              <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
              <div className='relative h-40 w-full'>
                  <Image src={image} alt={title} layout='fill' objectFit='fill' className='rounded-lg'/>
              </div>
              <p>{description}</p>
          </CardContent>
          </Card>
      </div>
    </div>
  )
}
