import React from 'react'
import Testimonial from '../testimonial/page'

export default function Testimonials() {
    const testimonials = [
        {
          name: 'John Doe',
          title: 'CEO, SinoHydro Construction Company',
          content: 'This company is amazing! They provided excellent service and exceeded my expectations.',
          avatar: 'company3.jpg',
          url: 'https://www.sinohydro.com/',
        },
        {
          name: 'Jane Smith',
          title: 'Marketing Director, ACME Inc.',
          content: 'I highly recommend their services. They were professional and delivered high-quality work.',
          avatar: '/company2.jpg',
          url: 'https://www.acmeinc.com/',
        },
        {
            name: 'Victor Timely',
            title: 'Marketing Director, Time Variant Authority.',
            content: 'I highly recommend their services. They were professional and delivered high-quality work.',
            avatar: '/company1.jpg',
            url: 'https://www.acmeinc.com/',
          },
        // Add more testimonials as needed
      ];
      


  return (
    <div id='testimonials'>
        {testimonials.map((testimonial, index) => (
            <Testimonial
                key={index}
                title={testimonial.title}
                name={testimonial.name}
                content = {testimonial.content}
                avatar={testimonial.avatar}
                url={testimonial.url}
            />
        ))}
    </div>
  )
}
