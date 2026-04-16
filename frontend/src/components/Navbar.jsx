import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/img/bloodDonationLogo.png";
import AuthButton from "../pages/Auth";

/** Header height + spacer must stay in sync with Dashboard sticky offset */
export const HEADER_SPACER_CLASS = "h-[88px] md:h-[96px]";
export const STICKY_TOP_BELOW_HEADER = "top-[88px] md:top-[96px]";

const NavSep = () => (
  <span
    className="hidden lg:block w-px h-5 bg-white/35 shrink-0 self-center"
    aria-hidden
  />
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen((o) => !o);

  const handleProtectedClick = (path) => {
    toggleMenu();
    if (!isAuthenticated) {
      loginWithRedirect({ appState: { returnTo: path } });
    } else {
      navigate(path);
    }
  };

  const linkBase =
    "text-xs font-semibold uppercase tracking-wide text-white px-2 lg:px-3 py-2 rounded-sm whitespace-nowrap";

  const navLinkClass = ({ isActive }) =>
    `${linkBase} ${isActive ? "bg-white/20 ring-1 ring-white/35" : "hover:bg-white/10"}`;

  const protectedClass = (path) =>
    `${linkBase} text-left w-full lg:w-auto lg:text-center ${
      location.pathname === path
        ? "bg-white/20 ring-1 ring-white/35"
        : "hover:bg-white/10"
    }`;

  const publicLinkBase =
    "text-sm font-semibold tracking-wide text-neutral-800 px-4 lg:px-5 py-2 rounded-md whitespace-nowrap hover:text-gov-red";
  const publicNavLinkClass = ({ isActive }) =>
    `${publicLinkBase} ${isActive ? "text-gov-red" : ""}`;

  const publicLinks = (
    <>
      <NavLink to="/" end className={publicNavLinkClass} onClick={() => setIsOpen(false)}>
        Home
      </NavLink>
      <NavLink to="/about" className={publicNavLinkClass} onClick={() => setIsOpen(false)}>
        About
      </NavLink>
      <NavLink to="/features" className={publicNavLinkClass} onClick={() => setIsOpen(false)}>
        Perks
      </NavLink>
      <NavLink to="/contact" className={publicNavLinkClass} onClick={() => setIsOpen(false)}>
        Contact Us
      </NavLink>
    </>
  );

  if (!isAuthenticated) {
    return (
      <>
        <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur border-b border-neutral-200">
          <div className="gov-page flex flex-wrap items-center justify-between gap-4 py-3 md:py-4 min-h-[64px] md:min-h-[72px]">
            <NavLink to="/" end className="flex items-center gap-3 shrink-0 min-w-0" onClick={() => setIsOpen(false)}>
              <img src={logo} alt="PulseConnect" className="w-12 h-12 object-contain shrink-0" />
              <div className="flex flex-col leading-tight min-w-0">
                <span className="font-bold text-base sm:text-lg uppercase tracking-tight text-gov-red truncate">
                  PulseConnect
                </span>
              </div>
            </NavLink>

            <nav className="hidden lg:flex items-center justify-center flex-1 gap-2 min-w-0 px-4" aria-label="Primary">
              {publicLinks}
            </nav>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => loginWithRedirect({ appState: { returnTo: "/dashboard" } })}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wide bg-gov-red text-white border-2 border-gov-red hover:bg-gov-redDark hover:border-gov-redDark rounded-full"
              >
                Log In
              </button>
              <button
                type="button"
                onClick={toggleMenu}
                className="lg:hidden p-2.5 border border-neutral-300 rounded-md text-neutral-800 hover:bg-neutral-50"
                aria-expanded={isOpen}
                aria-label="Menu"
              >
                {isOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="lg:hidden border-t border-neutral-200 bg-white">
              <div className="gov-page flex flex-col py-2">
                {publicLinks}
                <div className="pt-3 pb-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      loginWithRedirect({ appState: { returnTo: "/dashboard" } });
                    }}
                    className="w-full px-4 py-2 text-xs font-bold uppercase tracking-wide bg-gov-red text-white border-2 border-gov-red hover:bg-gov-redDark hover:border-gov-redDark rounded-full"
                  >
                    Log In
                  </button>
                </div>
              </div>
            </div>
          )}
        </header>
        <div className={HEADER_SPACER_CLASS} aria-hidden />
      </>
    );
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-gov-red text-white shadow-md">
        <div className="gov-page flex flex-wrap items-center justify-between gap-4 py-3 md:py-4 min-h-[64px] md:min-h-[72px]">
          <NavLink
            to="/"
            end
            className="flex items-center gap-3 shrink-0 min-w-0"
            onClick={() => setIsOpen(false)}
          >
            <img
              src={logo}
              alt="PulseConnect"
              className="w-12 h-12 object-contain shrink-0 ring-2 ring-white/40 rounded-sm bg-white/10"
            />
            <div className="flex flex-col leading-tight min-w-0">
              <span className="font-bold text-base sm:text-lg uppercase tracking-tight text-white truncate">
                PulseConnect
              </span>
              <span className="text-[10px] sm:text-xs text-white/75 uppercase tracking-wider hidden sm:block">
                Voluntary blood donation
              </span>
            </div>
          </NavLink>

          <nav
            className="hidden lg:flex items-center justify-center flex-1 gap-1 min-w-0 px-2"
            aria-label="Primary"
          >
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavSep />
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavSep />
            <button
              type="button"
              className={protectedClass("/request-blood")}
              onClick={() => handleProtectedClick("/request-blood")}
            >
              Looking for Blood
            </button>
            <NavSep />
            <button
              type="button"
              className={protectedClass("/register-donor")}
              onClick={() => handleProtectedClick("/register-donor")}
            >
              Want to Donate
            </button>
            <NavSep />
            <button
              type="button"
              className={protectedClass("/available-donors")}
              onClick={() => handleProtectedClick("/available-donors")}
            >
              Availabale Donors
            </button>
            <NavSep />
            <button
              type="button"
              className={protectedClass("/my-blood-request")}
              onClick={() => handleProtectedClick("/my-blood-request")}
            >
              My Request
            </button>
            <NavSep />
            <button
              type="button"
              className={protectedClass("/dashboard")}
              onClick={() => handleProtectedClick("/dashboard")}
            >
              Dashboard
            </button>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:block">
              <AuthButton variant="header" />
            </div>
            <button
              type="button"
              onClick={toggleMenu}
              className="lg:hidden p-2.5 border-2 border-white/50 rounded-sm text-white hover:bg-white/10"
              aria-expanded={isOpen}
              aria-label="Menu"
            >
              {isOpen ? (
                <FaTimes className="text-lg" />
              ) : (
                <FaBars className="text-lg" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t border-white/25 bg-gov-red">
            <div className="gov-page flex flex-col py-2">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${navLinkClass({ isActive })} border-b border-white/15`
                }
                onClick={toggleMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${navLinkClass({ isActive })} border-b border-white/15`
                }
                onClick={toggleMenu}
              >
                About
              </NavLink>
              <button
                type="button"
                className={`${protectedClass("/request-blood")} border-b border-white/15`}
                onClick={() => handleProtectedClick("/request-blood")}
              >
                Looking for Blood
              </button>
              <button
                type="button"
                className={`${protectedClass("/register-donor")} border-b border-white/15`}
                onClick={() => handleProtectedClick("/register-donor")}
              >
                Want to Donate
              </button>
              <button
                type="button"
                className={`${protectedClass("/available-donors")} border-b border-white/15`}
                onClick={() => handleProtectedClick("/available-donors")}
              >
                Find Donors
              </button>
              <button
                type="button"
                className={`${protectedClass("/my-blood-request")} border-b border-white/15`}
                onClick={() => handleProtectedClick("/my-blood-request")}
              >
                My Request
              </button>
              <button
                type="button"
                className={`${protectedClass("/dashboard")} border-b border-white/15`}
                onClick={() => handleProtectedClick("/dashboard")}
              >
                Dashboard
              </button>
              <div className="pt-4 pb-2 sm:hidden">
                <AuthButton variant="header" />
              </div>
            </div>
          </div>
        )}
      </header>
      <div className={HEADER_SPACER_CLASS} aria-hidden />
    </>
  );
};

export default Navbar;
