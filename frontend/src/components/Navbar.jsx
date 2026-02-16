// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import AuthButton from '../pages/Auth';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <Link to="/" className="text-2xl font-bold text-[#17153B]">
//             रक्तदातृ
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/" className="text-gray-700 hover:text-[#17153B] transition">Home</Link>
//             <Link to="/about" className="text-gray-700 hover:text-[#17153B] transition">About</Link>
//             <Link to="/services" className="text-gray-700 hover:text-[#17153B] transition">Services</Link>
//             <Link to="/features" className="text-gray-700 hover:text-[#17153B] transition">Features</Link>
//             <Link to="/blog" className="text-gray-700 hover:text-[#17153B] transition">Blog</Link>
//             <Link to="/contact" className="text-gray-700 hover:text-[#17153B] transition">Contact</Link>
//             <AuthButton />
//           </div>

//           {/* Mobile Menu Button - Shows hamburger icon on small screens */}
//           <div className="md:hidden">
//             <button onClick={toggleMenu} className="text-2xl text-[#17153B]">
//               {isOpen ? <FaTimes /> : <FaBars />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Dropdown Menu - Only visible on small screens when hamburger is clicked */}
//         {isOpen && (
//           <div className="md:hidden pb-4">
//             <div className="flex flex-col space-y-4">
//               <Link to="/" onClick={toggleMenu} className="text-gray-700 hover:text-[#17153B] transition">Home</Link>
//               <Link to="/about" onClick={toggleMenu} className="text-gray-700 hover:text-[#17153B] transition">About</Link>
//               <Link to="/services" onClick={toggleMenu} className="text-gray-700 hover:text-[#17153B] transition">Services</Link>
//               <Link to="/features" onClick={toggleMenu} className="text-gray-700 hover:text-[#17153B] transition">Features</Link>
//               <Link to="/blog" onClick={toggleMenu} className="text-gray-700 hover:text-[#17153B] transition">Blog</Link>
//               <Link to="/contact" onClick={toggleMenu} className="text-gray-700 hover:text-[#17153B] transition">Contact</Link>
//               <AuthButton />
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClass = ({ isActive }) =>
    `font-medium transition duration-300 ${
      isActive
        ? "text-red-600"
        : "text-black hover:text-red-600"
    }`;

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto px-12">
          <div className="flex justify-between items-center h-24">
            
            {/* Logo */}
            <NavLink
              to="/"
              end
              className="text-4xl font-bold text-red-600 tracking-wide"
            >
              PulseConnect
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10 text-lg">
              
              <NavLink to="/" end className={navLinkClass}>
                Home
              </NavLink>

              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>

              <NavLink to="/services" className={navLinkClass}>
                Availability
              </NavLink>

              <NavLink to="/features" className={navLinkClass}>
                Pages
              </NavLink>

              <NavLink to="/contact" className={navLinkClass}>
                Contact Us
              </NavLink>

              {/* Login Button */}
              <NavLink
                to="/login"
                className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition duration-300"
              >
                LOGIN
              </NavLink>

            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-2xl text-black focus:outline-none"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div className="md:hidden pb-6">
              <div className="flex flex-col space-y-5 text-lg">

                <NavLink to="/" end onClick={toggleMenu} className={navLinkClass}>
                  Home
                </NavLink>

                <NavLink to="/about" onClick={toggleMenu} className={navLinkClass}>
                  About
                </NavLink>

                <NavLink to="/services" onClick={toggleMenu} className={navLinkClass}>
                  Availability
                </NavLink>

                <NavLink to="/features" onClick={toggleMenu} className={navLinkClass}>
                  
                </NavLink>

                <NavLink to="/contact" onClick={toggleMenu} className={navLinkClass}>
                  Contact Us
                </NavLink>

              </div>
            </div>
          )}
        </div>
      </nav>

      {/* THIS FIXES CONTENT OVERLAP */}
      <div className="h-24"></div>
    </>
  );
};

export default Navbar;
