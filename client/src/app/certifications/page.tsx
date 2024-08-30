import MainNavbar from "@/components/navbars/MainNavbar";
import Certification from "@/components/certification/page";

export default function certifications(){
    return(
        <div>
            <MainNavbar />
            <div className="pl-20 pb-12 ">
                <Certification 
                    title="Google Cybersecurity Professional Certificate" 
                    date="Completion Date: January 2024" 
                    listItems={[
                        "• Understand the importance of cybersecurity practices and their impact on organizations.",
                        "• Identification of common risks, threats and vulnerabilities, also some techniques to mitigate them.",
                        "• Protect networks, devices people, and data from unauthorized access and cyberattacks using SIEM tools.",
                        "• Hands-on experience with Linux and SQL."
                    ]}
                    src="/googleevidence.png"
                    isEvidence = {true}
                    link="https://www.linkedin.com/in/fernando-garcia-tejeda-8a74b4294/" 
                />
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 translate-y-1/3 top-[%20]  -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div style={{
                        clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }} className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1f78ff] to-[#124899] opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>

                <Certification 
                    title="Splunk Search Expert 101, 102, 103" 
                    date="Completion Date: August 2024" 
                    listItems={[
                        "• Improve search performance by understanding search best practices, accelerating repots and data models to optimize frequently accessed data.",
                        "• Manipulate, evaluate, and analyze multivalue data and create multivalue fields in search with multivalue eval commands and functions.",
                        "• Understand how components of a search are broken down and processed across the Splunk data pipeline and how to troubleshoot searches.",
                        "• Use specific commands to calculate co-occurrence between fields and analyze data from multiple datasets."
                    ]}
                    src="/splunkevidence.png"
                    isEvidence = {false}
                    link="" 
                />
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 translate-y-3/4 top-3/4 -z-10 transform-gpu overflow-hidden blur-3xl ">
                    <div style={{
                        clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }} className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1f78ff] to-[#124899] opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <Certification 
                    title="CompTIA Security +" 
                    date="Completion Date: October 2024" 
                    listItems={[
                        "• Attacks, threats and vulnerabilities: More threats, attacks and vulnerabilities from newer custom devices that need to be mitigated, such as IoT and integrated devices, newer DDoS attacks and social engineering attacks based on current events.",
                        "• Architecture and design: Business environments and cloud dependence, which is growing rapidly as organizations transition to hybrid networks.",
                        "• Implementation: Identity management, access management, PKI, basic cryptography, wireless and end-to-end security.",
                        "• Operations and incident response: Organizational security assessment and incident response procedures, such as basic threat detection, risk mitigation techniques, security controls and basic digital forensics.",
                        "• Governance, risk and compliance: Organizational risk management and regulatory compliance, such as PCI-DSS, SOX, HIPAA, GDPR, FISMA, NIST and CCPA."
                    ]}
                    src="/seguridad.png"
                    isEvidence = {false}
                    link="" 
                />

            </div>
                
        </div>
    )
}