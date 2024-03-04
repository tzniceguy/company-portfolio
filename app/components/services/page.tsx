import React from 'react';
import Service from '../service/page';

export default function Services() {
    const services = [
        { title: 'Facility and Camp Management', image: '/camp-management.jpg', description: '' },
        { title: 'Catering', image: '/catering-services.jpeg', description: '' },
        { title: 'Laundry Services', image: '/laundry.jpg', description: '' },
        { title: 'Waste Management', image: '/waste-management.jpeg', description: '' },
        { title: 'Gardening And Cleaning', image: '/gardening.jpg', description: '' },
        { title: 'Mining Supply Tools', image: '/mining-equipments.jpg', description: '' },
        { title: 'Hardware Supply', image: '/hardware.jpg', description: '' },
        { title: 'Supply of Construction and Building Materials', image: '/construction.jpg', description: 'We provide construction building materials to companies and individuals in need' },
        { title: 'Machine And Equipment Hire', image: '/equipment-hire.jpg', description: '' },
        { title: 'Mechanical Engineering', image: '/mechanical-engineering.jpg', description: '' },
    ];

    return (
        <div className='md:flex flex-wrap justify-between w-full md:1/3 p-4'>
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
