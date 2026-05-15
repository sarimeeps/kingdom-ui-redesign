import { FaInstagram } from "react-icons/fa";
const InstaLogo = ({ size = 30 }) => {
  return (
    <>
      <svg width={0} height={0} style={{ position: 'absolute' }}>
         <defs>
          <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            {/* Bottom-left to top-right */}
            <stop offset="0%"   stopColor="#FFD600" /> {/* Yellow */}
            <stop offset="25%"  stopColor="#FF6A00" /> {/* Orange */}
            <stop offset="50%"  stopColor="#FF0069" /> {/* Hot Pink/Red */}
            <stop offset="75%"  stopColor="#D300C5" /> {/* Magenta */}
            <stop offset="100%" stopColor="#7638FA" /> {/* Purple */}
          </linearGradient>
        </defs>
      </svg>
      <FaInstagram size={size} style={{ fill: 'url(#ig-gradient)', display: 'block' }} />
    </>
  );
};
export default InstaLogo;

