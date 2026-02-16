// import { Link } from 'react-router-dom';
// import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="container mx-auto px-16 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
//           {/* Company Info */}
//           <div>
//             <h3 className="text-lg font-bold mb-2">PulseConnect</h3>
//             <p className="text-gray-400 text-sm">
//               Connecting blood donors with those in need.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-base font-semibold mb-2">Quick Links</h4>
//             <ul className="space-y-1 text-sm">
//               <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
//               <li><Link to="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
//               <li><Link to="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
//               <li><Link to="/appointment" className="text-gray-400 hover:text-white transition">Register</Link></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-base font-semibold mb-2">Contact Us</h4>
//             <ul className="space-y-1 text-gray-400 text-sm">
//               <li className="flex items-center gap-2">
//                 <FaEnvelope className="text-xs" /> info@PulseConnect.com
//               </li>
//               <li className="flex items-center gap-2">
//                 <FaPhone className="text-xs" /> +91 1234567890
//               </li>
//               <li className="flex items-center gap-2">
//                 <FaMapMarkerAlt className="text-xs" /> Mumbai, India
//               </li>
//             </ul>
//           </div>

//           {/* Social Links */}
//           <div>
//             <h4 className="text-base font-semibold mb-2">Follow Us</h4>
//             <div className="flex space-x-3 text-xl">
//               <a href="#" className="text-gray-400 hover:text-white transition">
//                 <FaFacebook />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition">
//                 <FaTwitter />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition">
//                 <FaInstagram />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-400 text-xs">
//           <p>&copy; {new Date().getFullYear()} रक्तदातृ. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0B1C2D] text-white pt-10 pb-6 border-t-4 border-red-600">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold mb-3">PulseConnect</h2>
            <p className="text-gray-400 text-sm leading-6">
              Connecting blood donors with those in need.
              Together, we save lives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link to="/appointment" className="hover:text-white transition">Register</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-3">Contact Us</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>info@PulseConnect.com</li>
              <li>+91 1234567890</li>
              <li>Mumbai, India</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-medium mb-3">Follow Us</h3>
            <div className="flex space-x-4 text-gray-400">
              <span className="hover:text-white transition cursor-pointer">Facebook</span>
              <span className="hover:text-white transition cursor-pointer">Twitter</span>
              <span className="hover:text-white transition cursor-pointer">Instagram</span>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} PulseConnect. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
