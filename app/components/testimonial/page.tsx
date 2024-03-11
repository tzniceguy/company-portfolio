import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

type Props= {
  params: {avatar: string,
  content: string;
  name: string,
  title: string,
  url: string,}
}


export default function Testimonial({params}:Props) {
  return (
    <div className='p-4 m-4 rounded shadow-lg hover:shadow-2xl'>{params &&(
        <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
            <Image
            alt={params.name}
            height={40}
            radius="sm"
            src={params.avatar}
            width={40}
            />
            <div className="flex flex-col">
            <p className="text-md">{params.name}</p>
            <p className="text-small text-default-500">{params.title}</p>
            </div>
        </CardHeader>
        <Divider/>
        <CardBody>
            <p>{params.content}</p>
        </CardBody>
        <Divider/>
        <CardFooter>
            <Link
            isExternal
            showAnchorIcon
            href={params.url}
            >
            Visit.
            </Link>
        </CardFooter>
        </Card>
        )}
    </div>
  );
}
