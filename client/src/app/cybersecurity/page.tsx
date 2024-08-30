import MainNavbar from "@/components/navbars/MainNavbar";
import Security from "@/components/security/page";

export default function Cybersecurity() {
  return (
    <>
      <MainNavbar />
      <div className="pl-32 pt-12 pb-8">
        <h1 className="text-3xl pt-12 bg-gradient-to-r from-[#1f78ff] to-[#124899] bg-clip-text text-transparent">
          Cybersecurity
        </h1>
        <p className="text-lg text-gray-500 w-2/5 pt-4">
          Tools, operating systems and SaaS that I've been using throughout
          my early career and can bring real value to a company.
        </p>
        <Security
          title="Kali Linux"
          skills={[
            "Hack The Box",
            "Tcpdump",
            "Wireshark",
            "Nmap",
            "Metasploit",
          ]}
          description="Used Kali Linux for Capture The Flag and exploiting Virtual Machines in Hack the Box. Network analysis, port scanning, and exploiting common vulnerabilities with unsupported OS in a secure and legal environment."
          isEvidence={false}
          href=""
        />

        <Security
          title="Internal security audit"
          skills={["Risk assessment", "Control and compliance"]}
          description="Fictional case study. In this scenario, Botium Toys, a small U.S. business experiencing significant growth in their online presence. The company needed to ensure compliance and secure their infrastructure as they expanded globally."
          isEvidence={true}
          href="https://www.linkedin.com/feed/update/urn:li:activity:7224168164647931904/"
        />

        {/* Background div adjusted to be more centered */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1f78ff] to-[#124899] opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <Security
          title="Splunk"
          skills={["Network monitoring", "Log management", "Troubleshooting"]}
          description="Used Splunk for monitoring networks with the search engine and different commands and functions that allow graphical representation for everyone in a company to understand the logs. Configuration of logs as if it was an IDS."
          isEvidence={false}
          href=""
        />

        <Security
          title="Nessus"
          skills={[
            "Vulnerability scanning",
            "Network security assessment",
            "Threats and weaknesses",
          ]}
          description="Used Nessus to identify possible vulnerabilities in operating systems and in mobile apps."
          isEvidence={false}
          href=""
        />
      </div>
    </>
  );
}
