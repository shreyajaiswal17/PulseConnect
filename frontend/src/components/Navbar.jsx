import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <i className="fas fa-star-of-life text-primary text-2xl"></i>
            <h1 className="text-2xl lg:text-3xl font-display font-bold text-primary m-0">
              रक्तदातृ
            </h1>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 focus:outline-none"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`nav-link ${
                isActive('/') ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
              } transition-colors duration-300`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-link ${
                isActive('/about') ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
              } transition-colors duration-300`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`nav-link ${
                isActive('/services') ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
              } transition-colors duration-300`}
            >
              Availability
            </Link>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-gray-700 hover:text-primary transition-colors duration-300 flex items-center"
              >
                Pages
                <i className={`fas fa-chevron-down ml-2 text-xs transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md py-2 w-48">
                  <Link
                    to="/appointment"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/features"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Perks
                  </Link>
                  <Link
                    to="/blog"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Our Blog
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`nav-link ${
                isActive('/contact') ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
              } transition-colors duration-300`}
            >
              Contact Us
            </Link>

            {/* Login Button */}
            <Link
              to="/appointment"
              className="btn-primary"
            >
              LOGIN
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3">
            <Link
              to="/"
              className={`block ${isActive('/') ? 'text-primary font-semibold' : 'text-gray-700'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block ${isActive('/about') ? 'text-primary font-semibold' : 'text-gray-700'}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`block ${isActive('/services') ? 'text-primary font-semibold' : 'text-gray-700'}`}
              onClick={() => setIsOpen(false)}
            >
              Availability
            </Link>
            <Link
              to="/appointment"
              className="block text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/features"
              className="block text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Perks
            </Link>
            <Link
              to="/blog"
              className="block text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Our Blog
            </Link>
            <Link
              to="/contact"
              className={`block ${isActive('/contact') ? 'text-primary font-semibold' : 'text-gray-700'}`}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/appointment"
              className="btn-primary inline-block"
              onClick={() => setIsOpen(false)}
            >
              LOGIN
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
