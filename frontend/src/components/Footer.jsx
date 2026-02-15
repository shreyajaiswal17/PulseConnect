import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Get In Touch */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <i className="fa fa-map-marker-alt mr-3 text-primary"></i>
                New Delhi, India
              </p>
              <p className="flex items-center">
                <i className="fa fa-phone-alt mr-3 text-primary"></i>
                +91 8674392xxx
              </p>
              <p className="flex items-center">
                <i className="fa fa-envelope mr-3 text-primary"></i>
                Umang@gmail.com
              </p>
            </div>
            <div className="flex space-x-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/about" className="hover:text-white transition-colors duration-300">
                About Us
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors duration-300">
                Contact Us
              </Link>
              <Link to="/services" className="hover:text-white transition-colors duration-300">
                Availability
              </Link>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms & Condition
              </a>
            </div>
          </div>

          {/* Newsletter or additional info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">About रक्तदातृ</h3>
            <p className="text-sm leading-relaxed">
              Empowering timely blood donations and saving lives. Join us in making a difference
              by becoming a donor or requesting blood when needed.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; 2026 रक्तदातृ. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
