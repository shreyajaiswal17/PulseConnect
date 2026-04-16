import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-100 border-t-4 border-gov-red mt-auto">
      <div className="gov-page py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 text-sm">
         

          <div>
            <h2 className="text-gov-yellow font-bold uppercase tracking-wide text-xs mb-3">
              Important links
            </h2>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <Link to="/" className="hover:text-white underline-offset-2 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white underline-offset-2 hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white underline-offset-2 hover:underline">
                  Contact / Grievance
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white underline-offset-2 hover:underline">
                  Availability and services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-gov-yellow font-bold uppercase tracking-wide text-xs mb-3">
              Contact (helpline)
            </h2>
            <ul className="space-y-2 text-neutral-300">
              <li>Email: info@PulseConnect.com</li>
              <li>Phone: +91 1234567890 (10:00–18:00 IST)</li>
  
            </ul>
          </div>

        </div>

        <div className="border-t border-neutral-700 mt-8 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-neutral-500">
          {}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
