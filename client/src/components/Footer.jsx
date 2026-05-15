import { Link } from 'react-router';
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
        <footer className="relative w-full mx-auto text-xl text-[var(--bg)]">
            <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row bg-[var(--button)]  text-center lg:text-left lg:px-8 lg:py-18 py-12 gap-8" >

                {/* Logo */}
                <div className="h-30 order-last lg:order-first flex-2 flex justify-center">
                    <Link to="/">
                        <img src={whiteLogo} alt="Kingdom's Logo" className='object-contain min-w-90 w-90 h-full' />
                    </Link>
                </div>

                {/* Section 1 */}
                <div id="footer-id" className="flex-shrink-0 flex-1 place-items-center">
                    <div>
                        <h3 className=''>
                            Location:
                        </h3>
                        <p className='w-65'>
                            6000 Meadow Brook Mall Ct, Ste 1, Clemmons, NC (at Village Square)
                        </p>
                    </div>
                </div>

                {/* Section 2 */}
                <div id="footer-id" className="flex-1 lg:items-center place-items-center">
                    <div>
                        <h3>
                            Contact:
                        </h3>
                        <div className='flex gap-3 lg:justify-start justify-center'>
                            <LuPhone size={20} />
                            <p>336-727-3039</p>
                        </div>
                        <div className='flex gap-3 lg:justify-start justify-center'>
                            <a href="mailto:kingdomofkpopandmore@gmail.com" target="_blank" rel="noopener noreferrer">
                                <LuMail size={20} />
                            </a>
                            <a href="mailto:kingdomofkpopandmore@gmail.com" target="_blank" rel="noopener noreferrer" className='hover:underline decoration-[var(--bg)]'>
                                kingdomofkpopandmore@gmail.com
                            </a>
                        </div>
                        <div className="flex gap-2 mt-4 lg:justify-start justify-center">
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
                </div>

                {/* Section 3 */}
                <div id="footer-id" className='flex-1 place-items-center'>
                    <div className='lg:w-50'>
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
            </div>
        </footer>
    )
}
export default Footer;