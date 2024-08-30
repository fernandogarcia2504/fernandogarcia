import Image from "next/image";
import { ICertification } from "./types";
import Link from "next/link";

const Certification: React.FC<ICertification> = (props) => {
    return(
        <div className="pt-12">
            <h1 className="font-bold text-4xl bg-gradient-to-r from-[#1f78ff] to-[#124899] bg-clip-text text-transparent ">{props.title}</h1>
            <h1 className="text-xl pt-4">{props.date}</h1>
            
            <ul className="">
                {props.listItems.map((item, index) => (
                    <li key={index} className="text-base text-gray-500 pt-4 w-[950px]">{item}</li>
                ))}
            </ul>
            
            <Image className="mt-4" src={props.src} height={315} width={651} quality={100} alt="image of the respective certification"/>
            {props.isEvidence === true ? 
                <Link href={props.link} 
                className="text-sm bg-gradient-to-r from-[#1f78ff] to-[#124899] bg-clip-text text-transparent cursor-pointer ">
                    Evidence on LinkedIn
                </Link> : null 
            }
        </div>
    )
}

export default Certification;
