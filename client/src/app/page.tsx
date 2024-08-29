import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#1b1b1b] pl-20 w-screen h-screen flex flex-col justify-center ">
      <h1 className="font-bold text-7xl text-[#f5f5f5] pb-4 ">Fernando Garcia Tejeda</h1>
      <h1 className="bg-gradient-to-r from-[#1f78ff] to-[#124899] bg-clip-text text-transparent text-6xl font-bold w-1/2 pb-8">Web development & Cybersecurity</h1>

      <div className="flex flex-row items-center px-12 rounded-2xl border border-[#363636] w-[950px] h-20 justify-between">
        <p className="text-[#f5f5f5] text-xl">LinkedIn</p>
        <p className="text-[#f5f5f5] text-xl">Github</p>
        <p className="text-[#f5f5f5] text-xl">nando.garcia2504@gmail.com</p>
        <p className="text-[#f5f5f5] text-xl">+52 55 5951 8331</p>
      </div>
      <div className="pt-5">
        <h3 className="text-[#f5f5f5] text-2xl pt-4">Computer Science</h3>
        <h3 className="text-[#f5f5f5] text-2xl pt-2">Tecnologico de Monterrey (August 2021 - May 2025)</h3>
        <p className="w-[950px] text-base pt-4">I am a disciplined, methodic and enthutiastic engineer with a strong foundation in critical thinking and problem-solving. I am always looking to learn new things and grow in the tech world, driven by a genuine curiosity and passion for understanding how certain things work and how to apply them in real life. Some of the most important values for me are clear communication, teamwork and honesty.</p>
        <h2 className="pt-4">Languages</h2>
        <div className="flex flex-row pt-2 gap-12">
          <p>Spanish (native)</p>
          <p>English (C1 Level)</p>
        </div>
      </div>
    </div>
  );
}
