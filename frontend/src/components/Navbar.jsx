
// // export default Navbar;
// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const navLinkClass = ({ isActive }) =>
//     `font-medium transition duration-300 ${
//       isActive
//         ? "text-red-600"
//         : "text-black hover:text-red-600"
//     }`;

//   return (
//     <>
//       <nav className="bg-white shadow-md fixed w-full top-0 z-50">
//         <div className="container mx-auto px-12">
//           <div className="flex justify-between items-center h-24">
            
//             {/* Logo */}
//             <NavLink
//               to="/"
//               end
//               className="text-4xl font-bold text-red-600 tracking-wide"
//             >
//               PulseConnect
//             </NavLink>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-10 text-lg">
              
//               <NavLink to="/" end className={navLinkClass}>
//                 Home
//               </NavLink>

//               <NavLink to="/about" className={navLinkClass}>
//                 About
//               </NavLink>

//               <NavLink to="/services" className={navLinkClass}>
//                 Availability
//               </NavLink>

//               <NavLink to="/features" className={navLinkClass}>
//                 Perks
//               </NavLink>

//               <NavLink to="/contact" className={navLinkClass}>
//                 Contact Us
//               </NavLink>

//               {/* Login Button */}
//               <NavLink
//                 to="/login"
//                 className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition duration-300"
//               >
//                 LOGIN
//               </NavLink>

//             </div>

//             {/* Mobile Button */}
//             <div className="md:hidden">
//               <button
//                 onClick={toggleMenu}
//                 className="text-2xl text-black focus:outline-none"
//               >
//                 {isOpen ? <FaTimes /> : <FaBars />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Dropdown */}
//           {isOpen && (
//             <div className="md:hidden pb-6">
//               <div className="flex flex-col space-y-5 text-lg">

//                 <NavLink to="/" end onClick={toggleMenu} className={navLinkClass}>
//                   Home
//                 </NavLink>

//                 <NavLink to="/about" onClick={toggleMenu} className={navLinkClass}>
//                   About
//                 </NavLink>

//                 <NavLink to="/services" onClick={toggleMenu} className={navLinkClass}>
//                   Availability
//                 </NavLink>

//                 <NavLink to="/features" onClick={toggleMenu} className={navLinkClass}>
//                   Perks
//                 </NavLink>

//                 <NavLink to="/contact" onClick={toggleMenu} className={navLinkClass}>
//                   Contact Us
//                 </NavLink>

//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* THIS FIXES CONTENT OVERLAP */}
//       <div className="h-24"></div>
//     </>
//   );
// };

// export default Navbar;
// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "../assets/img/bloodDonationLogo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const navLinkClass = ({ isActive }) =>
//     `font-medium transition duration-300 ${
//       isActive
//         ? "text-red-600"
//         : "text-black hover:text-red-600"
//     }`;

//   return (
//     <>
//       <nav className="bg-white shadow-md fixed w-full top-0 z-50">
//         <div className="container mx-auto px-2">
//           <div className="flex justify-between items-center h-24">

//             {/* Logo + Brand */}
//             <NavLink
//               to="/"
//               end
//               className="flex items-center gap-3"
//             >
//               <img
//                 src={logo}
//                 alt="PulseConnect Logo"
//                 className="w-14 h-14 object-contain"
//               />
//               <span className="text-4xl font-bold text-red-600 tracking-wide">
//                 PulseConnect
//               </span>
//             </NavLink>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-10 text-xl">
              
//               <NavLink to="/" end className={navLinkClass}>
//                 Home
//               </NavLink>

//               <NavLink to="/about" className={navLinkClass}>
//                 About
//               </NavLink>

//               <NavLink to="/services" className={navLinkClass}>
//                 Availability
//               </NavLink>

//               <NavLink to="/features" className={navLinkClass}>
//                 Perks
//               </NavLink>

//               <NavLink to="/contact" className={navLinkClass}>
//                 Contact Us
//               </NavLink>

//               <NavLink
//                 to="/login"
//                 className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition duration-300"
//               >
//                 LOGIN
//               </NavLink>

//             </div>

//             {/* Mobile Button */}
//             <div className="md:hidden">
//               <button
//                 onClick={toggleMenu}
//                 className="text-2xl text-black focus:outline-none"
//               >
//                 {isOpen ? <FaTimes /> : <FaBars />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Dropdown */}
//           {isOpen && (
//             <div className="md:hidden pb-6">
//               <div className="flex flex-col space-y-5 text-lg mt-4">

//                 <NavLink to="/" end onClick={toggleMenu} className={navLinkClass}>
//                   Home
//                 </NavLink>

//                 <NavLink to="/about" onClick={toggleMenu} className={navLinkClass}>
//                   About
//                 </NavLink>

//                 <NavLink to="/services" onClick={toggleMenu} className={navLinkClass}>
//                   Availability
//                 </NavLink>

//                 <NavLink to="/features" onClick={toggleMenu} className={navLinkClass}>
//                   Perks
//                 </NavLink>

//                 <NavLink to="/contact" onClick={toggleMenu} className={navLinkClass}>
//                   Contact Us
//                 </NavLink>

//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Spacer to prevent content overlap */}
//       <div className="h-24"></div>
//     </>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/img/bloodDonationLogo.png";
import AuthButton from "../pages/Auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClass = ({ isActive }) =>
    `font-medium transition duration-300 ${
      isActive ? "text-red-600" : "text-black hover:text-red-600"
    }`;

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto px-2">
          <div className="flex justify-between items-center h-24">

            {/* Logo + Brand */}
            <NavLink to="/" end className="flex items-center gap-3">
              <img
                src={logo}
                alt="PulseConnect Logo"
                className="w-14 h-14 object-contain"
              />
              <span className="text-4xl font-bold text-red-600 tracking-wide">
                PulseConnect
              </span>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 text-xl">
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
                Perks
              </NavLink>

              <NavLink to="/contact" className={navLinkClass}>
                Contact Us
              </NavLink>

              {/* CTA Buttons */}
              <NavLink
                to="/register-donor"
                className="bg-green-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-700 transition duration-300"
              >
                Become a Donor
              </NavLink>

              <NavLink
                to="/request-blood"
                className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700 transition duration-300"
              >
                Request Blood
              </NavLink>

              {/* Auth Button */}
              <AuthButton />
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
              <div className="flex flex-col space-y-5 text-lg mt-4">
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
                  Perks
                </NavLink>

                <NavLink to="/contact" onClick={toggleMenu} className={navLinkClass}>
                  Contact Us
                </NavLink>

                <NavLink
                  to="/register-donor"
                  onClick={toggleMenu}
                  className="bg-green-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-700 transition duration-300 text-center"
                >
                  Become a Donor
                </NavLink>

                <NavLink
                  to="/request-blood"
                  onClick={toggleMenu}
                  className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700 transition duration-300 text-center"
                >
                  Request Blood
                </NavLink>

                <AuthButton />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-24"></div>
    </>
  );
};

export default Navbar;
