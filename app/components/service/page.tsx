import React from 'react'
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
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
    <main>
        <Card>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{image}</CardDescription>
        </CardHeader>
        <CardContent>
            <div className='relative h-40 w-full'>
                <Image src={image} alt={title} layout='fill' objectFit='cover' className='rounded-lg'/>
             </div>
            <p>{description}</p>
        </CardContent>
        </Card>
    </main>
  )
}
