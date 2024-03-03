import React from 'react';
import Service from '../service/page';

export default function Services() {
    const services = [
        { title: 'Facility and Camp Management', image: '/camp-management.jpg', description: '' },
        { title: 'Catering', image: '/catering.jpg', description: '' },
        { title: 'Laundry Services', image: '/laundry.jpg', description: '' },
        { title: 'Waste Management', image: '/waste-management.jpg', description: '' },
        { title: 'Gardening And Cleaning', image: '/gardening.jpg', description: '' },
        { title: 'Mining Supply Tools', image: '/mining.jpg', description: '' },
        { title: 'Hardware Supply', image: '/hardware.jpg', description: '' },
        { title: 'Supply of Construction and Building Materials', image: '/construction.jpg', description: '' },
        { title: 'Machine And Equipment Hire', image: '/equipment-hire.jpg', description: '' },
        { title: 'Mechanical Engineering', image: '/engineering.jpg', description: '' },
    ];

    return (
        <div className='flex flex-wrap justify-between w-full md:1/3 p-4'>
            {services.map((service, index) => (
                <Service
                    key={index}
                    title={service.title}
                    image={service.image}
                    description={service.description}
                />
            ))}
        </div>
    );
}
