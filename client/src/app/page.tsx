import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";


export default function Home() {
  return (
    <div className="bg-[#1b1b1b] pl-20 w-screen h-screen flex flex-col justify-center ">
      <h1 className="font-bold text-7xl text-[#f5f5f5] pb-4 ">Fernando Garcia Tejeda</h1>
      <h1 className="bg-gradient-to-r from-[#1f78ff] to-[#124899] bg-clip-text text-transparent text-6xl font-bold w-1/2 pb-8">Web development & Cybersecurity</h1>

      <div className="flex flex-row items-center px-12 rounded-2xl border border-[#363636] w-[950px] h-20 justify-between">
        <div className="flex gap-2 items-center">
          <FaLinkedin style={{ color: '#0e76a8', fontSize: '24px' }}/>
          <p className="text-[#f5f5f5] text-xl">LinkedIn</p>
        </div>
        <div className="flex gap-2 items-center">
          <FaGithubSquare style={{ color: '#6e5494', fontSize: '24px' }} />
          <p className="text-[#f5f5f5] text-xl">Github</p>
        </div>
        <div className="flex gap-2 items-center">
          <SiGmail style={{ color: '#c71610', fontSize: '24px' }} />
          <p className="text-[#f5f5f5] text-xl">nando.garcia2504@gmail.com</p>
        </div>
        <div className="flex gap-2 items-center">
          <FaPhoneFlip style={{ color: '#f5f5f5', fontSize: '24px' }} />
          <p className="text-[#f5f5f5] text-xl">+52 55 5951 8331</p>
        </div>
      </div>
      <div className="pt-5">
        <h3 className="text-[#f5f5f5] text-2xl pt-4">• Computer Science</h3>
        <div className="flex gap-2 items-center">
          <FaUniversity style={{ color: '#0e76a8', fontSize: '24px' }} />
          <h3 className="text-[#f5f5f5] text-2xl pt-2">Tecnologico de Monterrey (August 2021 - May 2025)</h3>
        </div>
        <p className="w-[950px] text-base text-[#f5f5f5] pt-4">I am a disciplined, methodic and enthutiastic engineer with a strong foundation in critical thinking and problem-solving. I am always looking to learn new things and grow in the tech world, driven by a genuine curiosity and passion for understanding how certain things work and how to apply them in real life. Some of the most important values for me are clear communication, teamwork and honesty.</p>
        <h2 className="pt-4 text-2xl text-[#f5f5f5]">Languages</h2>
        <div className="flex flex-row pt-2 gap-12">
          <p className="text-[#f5f5f5] text-base">• Spanish (native)</p>
          <p className="text-[#f5f5f5] text-base">• English (C1 Level)</p>
        </div>
      </div>
    </div>
  );
}
