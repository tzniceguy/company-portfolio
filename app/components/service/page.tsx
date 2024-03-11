import React from 'react'
import Image from 'next/image'
import {
    Card,
    CardContent,
   
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
type Props={
    params:{ title : string, description: string, image: string;};
    
}

export default function Service ({params }: Props) {
  return (
    <div className='p-4 max-w-sm'>
      <div className='flex rounded-lg h-full'>{params &&(
          <Card>
          <CardHeader>
              <CardTitle>{params.title}</CardTitle>
          </CardHeader>
          <CardContent>
              <div className='relative h-40 w-full'>
                  <Image src={params.image} alt={params.title} layout='fill' objectFit='fill' className='rounded-lg'/>
              </div>
              <p>{params.description}</p>
          </CardContent>
          </Card>
          )}
      </div>
    </div>
  )
}
