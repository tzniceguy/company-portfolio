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
import Contact from '../components/contact/page'

export default function page() {

  const team =[
    {name :"Ismail L Ngaula", image: "/person1.jpg", alt: "Ismail Ngaula",  position: "Director"},
    {name :"Athanus Machiya Ngesse", image: "/person1.jpg", alt: "Athanus Ngesse",  position: "Director"},
    {name :"Khamis Ramadhani Suluhu", image: "/person1.jpg", alt: "Khamis Suluhu",  position: "Director"},
    {name :"Farizal Jumanne Kibela", image: "/person1.jpg", alt: "Farizal Jumanne Kibela",  position: "Director"},
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
              <Image src={member.image} alt={member.alt} sizes='' layout='responsive' width ={1000} height={1000}
              className='cover shadow-md'>                
              </Image>
            </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className='shadow-md m-4 text-center' id="contacts">
        <span className='text-2xl text-center p-4'>Our Offices</span>
        <div className="md:flex p-4 ">
          <Contact/>
        </div>
      </div>
    </main>
  )
}
