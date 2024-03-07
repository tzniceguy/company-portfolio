import React from 'react';
import Service from '../service/page';

export default function Services() {
    const services = [
        { title: 'Facility and Camp Management', image: '/camp-management.jpg', description: '' },
        { title: 'Catering', image: '/catering-services.jpeg', description: 'We provide catering services to various events ' },
        { title: 'Laundry Services', image: '/laundry.jpg', description: '' },
        { title: 'Waste Management', image: '/waste-management.jpeg', description: 'We provide waste and scrape management and disposal in streets of towns, municipalities and cities' },
        { title: 'Gardening And Cleaning', image: '/gardening.jpg', description: '' },
        { title: 'Mining Supply Tools', image: '/mining-equipments.jpg', description: 'We provide hire to mining equipment to companies n need' },
        { title: 'Hardware Supply', image: '/hardware.jpg', description: 'We provide hardware materials for construction and maintanance services' },
        { title: 'Supply of Construction and Building Materials', image: '/construction.jpg', description: 'We provide construction building materials to companies and individuals in need' },
        { title: 'Machine And Equipment Hire', image: '/equipment-hire.jpg', description: '' },
        { title: 'Mechanical Engineering', image: '/mechanical-engineering.jpg', description: '' },
    ];

    return (
        <div className='flex-wrap justify-center mt-10 p-4 md:grid grid-cols-3' id='services'>
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
