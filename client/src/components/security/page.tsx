import Link from "next/link";
import { ISecurity } from "./types";

import { SiWireshark } from "react-icons/si";
import { SiHackthebox } from "react-icons/si";
import { MdOutlineZoomInMap } from "react-icons/md";
import { SiMetasploit } from "react-icons/si";
import { MdPermScanWifi } from "react-icons/md";
import { MdAssessment } from "react-icons/md";
import { GrDocumentThreat } from "react-icons/gr";
import { MdNetworkCheck } from "react-icons/md";
import { MdOutlineTroubleshoot } from "react-icons/md";
import { PiNetworkFill } from "react-icons/pi";
import { MdManageSearch } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";

type SkillIcons = {
    [key: string]: React.JSX.Element;
};

const skillIcons: SkillIcons = {
    "Hack The Box": <SiHackthebox style={{color:'#61dbfb', fontSize:'16px' }} />,
    "Tcpdump": <PiNetworkFill style={{color:'#68a063', fontSize:'16px' }}/>,
    "Wireshark":<SiWireshark style={{color:'#a5f3fc', fontSize:'16px' }}/>,
    "Nmap":<MdOutlineZoomInMap style={{color:'#358ef1', fontSize:'16px' }}/>,
    "Metasploit": <SiMetasploit style={{color:'#00758F', fontSize:'16px' }}/>,
    "Vulnerability scanning": <MdPermScanWifi style={{color:'#ffff', fontSize:'16px' }}/>,
    "Network security assessment": <MdAssessment style={{color:'#ffff', fontSize:'16px' }}/>,
    "Risk assessment": <MdAssessment style={{color:'#ffff', fontSize:'16px' }}/>,
    "Threats and weaknessess": <GrDocumentThreat style={{color:'#ffff', fontSize:'16px' }}/>,
    "Network monitoring": <MdNetworkCheck  style={{color:'#ffff', fontSize:'16px' }}/>,
    "Log management": <MdManageSearch style={{color:'#ffff', fontSize:'16px' }}/>,
    "Troubleshooting": <MdOutlineTroubleshoot style={{color:'#ffff', fontSize:'16px' }}/>,
    "Control and compliance": <GrCompliance style={{color:'#ffff', fontSize:'16px' }}/>,
};

const Security: React.FC<ISecurity> = (props) => {
    return(
        <div className="pt-12">
            <h1 className="text-xl">{props.title}</h1>
            <ul className="flex gap-4 pt-3">
                {props.skills.map((skill, index) => (
                    <li key={index} className="flex items-center">
                        <span className="mr-2">{skillIcons[skill]}</span>
                        <span className="text-sm ">{skill}</span>
                    </li>
                ))}
            </ul>
            <p className="w-2/5 pt-2 text-gray-500">{props.description}</p>
            {props.isEvidence === true ? (<Link href={props.href} className="text-sm bg-gradient-to-r from-[#1f78ff] to-[#124899] bg-clip-text text-transparent">Check the internal audit here!</Link>) : (null)}
            <p></p>
        </div>
    )
}

export default Security;