import { FaTiktok } from "react-icons/fa";
const TiktokLogo = ({ size = 30}) => {
  return (
    <div style={{ position: 'relative', width: size, height: size, display: 'inline-block' }}>
      {/* Cyan layer - offset left */}
      <FaTiktok
        size={size}
        style={{
          position: 'absolute',
          top: 1,
          left: -1.5,
          color: '#69C9D0',
        }}
      />
      {/* Red layer - offset right */}
      <FaTiktok
        size={size}
        style={{
          position: 'absolute',
          top: -1,
          left: 1.5,
          color: '#EE1D52',
        }}
      />
      {/* Black layer - on top */}
      <FaTiktok
        size={size}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          color: '#000000',
        }}
      />
    </div>
  )
}
export default TiktokLogo;
