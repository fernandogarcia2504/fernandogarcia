"use client"
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "../ThemeSwitch";

const links = [
    {href:'/' , label:'About me'},
    {href:'/certifications' , label:'Certifications'},
    {href:'/webdevelopment' , label:'Web development'},
    {href:'/cybersecurity' , label:'Cybersecurity'},
]

const MainNavbar = () => {

    const pathname = usePathname();

    return(
        <div className="flex flex-row justify-between items-center border border-[#363636] w-full h-20 px-40">
            <ThemeSwitcher />
            {links.map((link) => (
                <Link 
                    href={link.href} 
                    key={link.href} 
                    className= {`text-lg ${pathname === link.href ? 'bg-gradient-to-r from-[#1f78ff] to-[#124899] bg-clip-text text-transparent' : null    
                    }`}
                >
                    {link.label}
                </Link>
            ))}     
            
        </div>
    )
}

export default MainNavbar;