import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'

export default function page() {

  const team =[
    {name :"John Doe", image: "/person1.jpg", alt: "john doe",  position: "Founder and CTO"},
    {name :"John Doe", image: "/person1.jpg", alt: "john doe",  position: "Founder and CTO"},
    {name :"John Doe", image: "/person1.jpg", alt: "john doe",  position: "Founder and CTO"},
    {name :"John Doe", image: "/person1.jpg", alt: "john doe",  position: "Founder and CTO"},
  ]
  return (
    <main>
      <div className='shadow-md m-4 text-center' id="intro">
        <span className='text-2xl text-center p-4'>About us</span>
        <div className="md:flex p-4 ">
          <Card className='p-4 m-4 shadow-md hover:shadow-2xl'>
            <CardHeader>
              <CardTitle>Mission</CardTitle>
              <CardDescription>s to provide the best result based services, which are cost-efficient in Hospitality Industry, Mechanical, Mining Machines and other imperative Environmental services in Africa.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className='p-4 m-4 shadow-md hover:shadow-2xl'>
            <CardHeader>
              <CardTitle>Vision</CardTitle>
              <CardDescription> to become the best reliable company for provision of unique services and observe quality and professionalism. We want to attain a World Class Standard and become a model of reference in Tanzania and Africa.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className='p-4 m-4 shadow-md hover:shadow-2xl'>
            <CardHeader>
              <CardTitle>Goal</CardTitle>
              <CardDescription>to become a leading company to the quality and sustainability of services business development in Africa and make Hospitality industry reliable choice instead of a challenge
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
      <div className='shadow-md m-4 text-center' id="team">
        <span className='text-2xl text-center p-4'>Our Team</span>
        <div className="md:flex p-4 ">
          {team.map((member,index) =>(
            <Card key={index} className="p-4 m-4 shadow-md hover:shadow-2xl">
              <CardHeader>
              <CardTitle>{member.name}</CardTitle>
              <CardDescription>{member.position}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={member.image} alt={member.alt} width={150} height={150}>                
              </Image>
            </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className='shadow-md m-4 text-center' id="team">
        <span className='text-2xl text-center p-4'>Our Offices</span>
        <div className="md:flex p-4 ">
          
        </div>
      </div>
    </main>
  )
}
