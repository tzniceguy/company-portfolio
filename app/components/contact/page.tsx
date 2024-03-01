import Link from "next/link";
import React from "react";
import {Image} from "@nextui-org/react";

export default function Contact() {
  return (
    <div className="flex items-center p-4 m-4">
      <div className="w-full md:w-1/2">
        <Image isZoomed  width={240}alt="location" src="/location2.jpg" className="shadow-lg rounded object-cover w-full h-48 "/>
      </div>
      <div className="flex flex-col space-y-4 md:w-1/2 ml-4">
          <address className="text-sm">
            Plot Number: <br/>
            Block Number <br/>
            Ngokolo Near Ngokolo Primary,<br/>
            Ngokolo<br/>
            P.O.BOX 812
            Shinyanga, <br/>
            Tanzania.
          </address>
      </div>
      <div className="space-y-2 right-0 bottom-0">
            <Link href="tel:+255622800999">+255622800999</Link> <br/>
            <Link href="tel:+255767220870">+255767220870</Link><br/>
            <Link href="mailto:info@featureallied.co.tz">info@featureallied.co.tz</Link><br/>
      </div>
    </div>
  );
}
