"use client"
import React, { useState } from "react";
import { IWebpage } from "./types";
import Image from "next/image";
import Link from "next/link";

import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";

const Webpage: React.FC<IWebpage> = (props) => {

    type TechIcons = {
        [key: string]: React.JSX.Element;
    };

    const techIcons: TechIcons = {
        "React": <FaReact style={{color:'#61dbfb', fontSize:'16px' }} />,
        "Node JS": <FaNode style={{color:'#68a063', fontSize:'16px' }}/>,
        "Tailwind":<RiTailwindCssFill style={{color:'#a5f3fc', fontSize:'16px' }}/>,
        "Typescript":<SiTypescript style={{color:'#358ef1', fontSize:'16px' }}/>,
        "MySQL": <GrMysql  style={{color:'#00758F', fontSize:'16px' }}/>,
        "Next JS": <RiNextjsFill style={{color:'#ffff', fontSize:'16px' }}/>
    };

    return (
        <div className="relative rounded-md mt-12 flex flex-col w-2/5">
            {props.title === 'AutoBot' ? (
                <h1 className="font-bold text-6xl bg-gradient-to-r from-[#33A070] to-[#31423A] bg-clip-text text-transparent">{props.title}</h1>
            ) : props.title === 'DoMore' ? (
                <h1 className="font-bold text-6xl bg-gradient-to-r from-[#EA580C] to-[#783310] bg-clip-text text-transparent">{props.title}</h1>
            ) : props.title === 'Movies Nando' ? (
                <h1 className="font-bold text-6xl bg-gradient-to-r from-[#13A9D9] to-[#0A5B66] bg-clip-text text-transparent">{props.title}</h1>
            ) : props.title === 'Construction App' ? (
                <h1 className="font-bold text-6xl bg-gradient-to-r from-[#7B16E1] to-[#340857] bg-clip-text text-transparent">{props.title}</h1>
            ) : (
                <h1 className="font-bold text-6xl bg-gradient-to-r from-[#EA580C] to-[#31423A] bg-clip-text text-transparent">{props.title}</h1>
            )}
            
            <ul className="flex gap-4 pt-3">
                {props.listItems.map((tech, index) => (
                    <li key={index} className="flex items-center">
                        <span className="mr-2">{techIcons[tech]}</span>
                        <span className="text-sm ">{tech}</span>
                    </li>
                ))}
            </ul>
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                {props.title === 'AutoBot' ? (
                    <div style={{
                        clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }} className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#33A070] to-[#31423A] opacity-25 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
                    />
                ) : props.title === 'DoMore' ? (
                    <div style={{
                        clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }} className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#EA580C] to-[#783310] opacity-25 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
                    />
                ) : props.title === 'Movies Nando' ? (
                    <div style={{
                        clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }} className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#13A9D9] to-[#0A5B66] opacity-25 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
                    />
                ) : props.title === 'Construction App' ? (
                    <div style={{
                        clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }} className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#7B16E1] to-[#340857] opacity-25 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
                    />
                )  : (
                    <h1 className="font-bold text-6xl bg-gradient-to-r from-[#EA580C] to-[#31423A] bg-clip-text text-transparent">{props.title}</h1>
                )}

            </div>
            <div
                className="flex flex-row items-center gap-1 pt-3 hover:text-white"
            >
                <Link className="text-sm text-gray-500 w-fit" href={props.websitelink}>See the website yourself</Link>
                <MdArrowOutward className="transition-colors duration-300"  style={{color:'#6b7280', fontSize:'14px' }}/>
            </div>

            <div className="flex flex-row items-center gap-1 pt-3 hover:text-white">
                <Link className="text-sm text-gray-500  w-fit" href={props.githublink}>Checkout the Github Repository!</Link>
                <MdArrowOutward className="transition-colors duration-300"  style={{color:'#6b7280', fontSize:'14px' }} />
            </div>

            <p className="pt-3 text-sm">{props.description}</p>
            
            <Image 
                src={props.src} 
                width={350} 
                height={100} 
                quality={100} 
                alt="showcase of website" 
                className="pt-3"
            />


        </div>
    );
};

export default Webpage;
