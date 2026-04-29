import whiteLogo from '../assets/kingdom-logo-white.png';
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";


function Footer() {
    return (
        <footer className="w-full mt-auto flex items-center bg-[var(--button)] text-[var(--bg)] py-12 text-center md:text-left">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 max-w-fit-content">
                <div className="md:mr-4">
                    <a className="" href="/">
                        <img src={whiteLogo} alt="Kingdom's Logo" />
                    </a>
                </div>
                <div id="footer-id" className="border-[#fff]">
                    <h3 >
                        Location:
                    </h3>
                    <p>
                        6000 Meadow Brook Mall Ct, Ste 1, Clemmons, NC (at Village Square)
                    </p>
                </div>
                <div id="footer-id" >
                    <ul>
                        <h3>
                            Contact:
                        </h3>
                        <li><LuPhone />336-727-3039</li>
                        <li><HiOutlineMail />kingdomofkpopandmore@gmail.com</li>
                        <li>
                            <IoLogoInstagram size={23} />
                            <FaFacebook />
                            <FaTiktok />
                        </li>
                    </ul>
                </div>
                <div id="footer-id" className=''>
                    <h3 id="footer-id">
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