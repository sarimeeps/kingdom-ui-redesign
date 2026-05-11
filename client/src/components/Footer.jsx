import {Link} from 'react-router';
import whiteLogo from '../assets/kingdom-logo-white.png';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTiktok } from "react-icons/io5";




const Footer = () => {
    return (
        <footer className="relative w-full mx-auto">
            <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row bg-[var(--button)] text-[var(--bg)] text-center md:text-left md:px-8 py-12 gap-8" >
                
                {/* Logo */}
                <div className="flex-1 order-last md:order-first md:mr-20 flex justify-center md:justify-start">
                    <Link to="/">
                        <img src={whiteLogo} alt="Kingdom's Logo" className='h-26 w-auto object-contain'/>
                    </Link>
                </div>

                {/* Section 1 */}
                <div id="footer-id" className="flex-1">
                    <h3 >
                        Location:
                    </h3>
                    <p>
                        6000 Meadow Brook Mall Ct, Ste 1, Clemmons, NC (at Village Square)
                    </p>
                </div>

                {/* Section 2 */}
                <div id="footer-id" className="flex-1 md:items-center">
                    <h3>
                        Contact:
                    </h3>
                    <div className='flex gap-3 md:justify-start justify-center'>
                        <LuPhone size={20} />
                        <p>336-727-3039</p>
                    </div>
                    <div className='flex gap-3 md:justify-start justify-center'>
                        <a href="mailto:kingdomofkpopandmore@gmail.com" target="_blank" rel="noopener noreferrer">
                            <LuMail size={20} />
                        </a>
                        <a href="mailto:kingdomofkpopandmore@gmail.com" target="_blank" rel="noopener noreferrer" className='hover:underline decoration-[var(--bg)]'>
                            kingdomofkpopandmore@gmail.com
                        </a>
                    </div>
                    <div className="flex gap-2 mt-4 md:justify-start justify-center">
                        <h3 className='hidden '>Connect with us</h3>
                        <a href="https://www.instagram.com/kingdomofkpopandmore/" target="_blank" rel="noopener noreferrer">
                            <IoLogoInstagram size={30} />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61558391370752" target="_blank" rel="noopener noreferrer">
                            <IoLogoFacebook size={30} />
                        </a>
                        <a href="https://www.tiktok.com/@kingdomkpopandmore" target="_blank" rel="noopener noreferrer">
                            <IoLogoTiktok size={30} />
                        </a>
                    </div>
                </div>

                {/* Section 3 */}
                <div id="footer-id" className='flex-1'>
                    <h3>
                        Store Hours:
                    </h3>
                    <ul>
                        <li>Wed-Fri: 12pm - 7pm</li>
                        <li>Sat: 10am - 7pm</li>
                        <li>Sun: 10am - 3pm</li>
                        <li>Mon-Tue: CLOSED</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;