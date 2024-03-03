import React from 'react';
import Image from 'next/image';


export default function Header() {
  const background = '/header-image.jpg'; 

  return (
    <section>
      <div className='bg-gradient-to-tl from-black via-transparent to-transparent h-96 w-full relative'>
        <Image src={background}alt='background-image' layout='fill' className='object-cover absolute w-full h-full mix-blend-overlay'/>
        <div className='p-16 md:p-24 w-full h-full relative z-10'>
          <h1 className='text-black text-3xl font-bold uppercase'>Future Allied Company</h1>
          <h3 className='text-black text-l font-light md:text-2xl'>
          We provide a multinational highly qualified team to manage and operate and maintain our services on various projects in Tanzania.Our pride in performance, integrity and commitment comes from good Management and professional and dedicated employees providing great satisfaction to our valued clients all over our operations. Experienced in various projects based on corporate companies, large Mining services, Financial institutions, Military, Universities, schools and Embassies.
          </h3>
        </div>
      </div>
    </section>
  );
}
