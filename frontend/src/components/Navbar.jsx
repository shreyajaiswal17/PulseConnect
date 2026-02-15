import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import AuthButton from '../pages/Auth';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-[#17153B]">
            रक्तदातृ
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#17153B] transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#17153B] transition">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-[#17153B] transition">Services</Link>
            <Link to="/features" className="text-gray-700 hover:text-[#17153B] transition">Features</Link>
            <Link to="/blog" className="text-gray-700 hover:text-[#17153B] transition">Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#17153B] transition">Contact</Link>
            <AuthButton />
          </div>

          {/* Mobile Menu Button - Shows hamburger icon on small screens */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl text-[#17153B]">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu - Only visible on small screens when hamburger is clicked */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" onClick={toggleMenu} className="text-gray-700 hover:text-[#17153B] transition">Home</Link>
              <Link to="/about" onClick={toggleMenu} className="text-gray-700 hover:text-[#17153B] transition">About</Link>
              <Link to="/services" onClick={toggleMenu} className="text-gray-700 hover:text-[#17153B] transition">Services</Link>
              <Link to="/features" onClick={toggleMenu} className="text-gray-700 hover:text-[#17153B] transition">Features</Link>
              <Link to="/blog" onClick={toggleMenu} className="text-gray-700 hover:text-[#17153B] transition">Blog</Link>
              <Link to="/contact" onClick={toggleMenu} className="text-gray-700 hover:text-[#17153B] transition">Contact</Link>
              <AuthButton />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;