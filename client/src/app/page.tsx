import Link from "next/link";

import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import MainNavbar from "@/components/navbars/MainNavbar";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden  ">
      <div className=" pl-20 w-full h-screen flex flex-col justify-center">
        <div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 -z-0 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div style={{
            clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }} className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1f78ff] to-[#124899] opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        </div>
        <h1 className="font-bold text-7xl  pb-4 ">Fernando Garcia Tejeda</h1>
        <h1 className="bg-gradient-to-r from-[#1f78ff] to-[#124899] bg-clip-text text-transparent text-6xl font-bold w-1/2 pb-8">Web development & Cybersecurity</h1>
        <div className="flex flex-row items-center px-12 rounded-2xl border border-darkBg w-[950px] h-20 justify-between">
          <div className="flex gap-2 items-center">
            <FaLinkedin style={{ color: '#0e76a8', fontSize: '24px' }}/>
            <Link href={'https://www.linkedin.com/in/fernando-garcia-tejeda-8a74b4294/'} className=" text-md hover:text-gray-300">LinkedIn</Link>
          </div>

          <div className="flex gap-2 items-center">
            <FaGithubSquare style={{ color: '#6e5494', fontSize: '24px' }} />
            <Link href={'https://github.com/fernandogarcia2504'} className="text-md hover:text-gray-300">Github</Link>
          </div>
          <div className="flex gap-2 items-center">
            <SiGmail style={{ color: '#c71610', fontSize: '24px' }} />
            <p className=" text-md">nando.garcia2504@gmail.com</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaPhoneFlip style={{ color: '#f5f5f5', fontSize: '24px' }} />
            <p className=" text-md">+52 55 5951 8331</p>
          </div>
        </div>
        <div className="pt-5">
          <h3 className="text-xl pt-4">• Computer Science</h3>
          <div className="flex gap-2 items-center">
            <FaUniversity style={{ color: '#0e76a8', fontSize: '24px' }} />
            <h3 className=" text-xl pt-2">Tecnologico de Monterrey (August 2021 - May 2025)</h3>
          </div>
          <p className="w-[950px] text-sm text-gray-500 pt-4">I am a disciplined, methodic and enthutiastic engineer with a strong foundation in critical thinking and problem-solving. I am always looking to learn new things and grow in the tech world, driven by a genuine curiosity and passion for understanding how certain things work and how to apply them in real life. Some of the most important values for me are clear communication, teamwork and honesty.</p>
          <h2 className="pt-4 text-xl">Languages</h2>
          <div className="flex flex-row pt-2 gap-12">
            <p className="text-gray-500 text-sm">• Spanish (native)</p>
            <p className="text-gray-500 text-sm">• English (C1 Level)</p>
          </div>
        </div>
      </div>
      <MainNavbar />
    </div>
  );
}
