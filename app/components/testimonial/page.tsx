import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

type Props= {
  avatar: string;
  content: string;
  name: string;
  title: string;
  url: string;
}


export default function Testimonial({avatar, name, title, content, url}:Props) {
  return (
    <div className='p-4 m-4 rounded shadow-lg hover:shadow-2xl'>
        <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
            <Image
            alt={name}
            height={40}
            radius="sm"
            src={avatar}
            width={40}
            />
            <div className="flex flex-col">
            <p className="text-md">{name}</p>
            <p className="text-small text-default-500">{title}</p>
            </div>
        </CardHeader>
        <Divider/>
        <CardBody>
            <p>{content}</p>
        </CardBody>
        <Divider/>
        <CardFooter>
            <Link
            isExternal
            showAnchorIcon
            href={url}
            >
            Visit.
            </Link>
        </CardFooter>
        </Card>
    </div>
  );
}
