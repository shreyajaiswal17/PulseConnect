import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FaTint, FaSearch, FaHospital, FaUsers } from "react-icons/fa";
import About from "./About";
import homeVideo from "../assets/img/homevideo1.mp4";

const SERVICE_TABS = [
  {
    id: "availability",
    label: "Blood Availability Search",
    Icon: FaSearch,
    body: "Locate indicative blood availability and service information for your area. Use this facility to plan requests in coordination with licensed blood centres and hospitals.",
    cta: {
      label: "Blood Availability Search",
      to: "/services",
      secondary: true,
    },
  },
  {
    id: "request",
    label: "Looking for Blood",
    Icon: FaHospital,
    body: "Submit a structured request when blood is required for a patient. Matching is subject to donor registration, city, and blood group — and to medical and institutional protocols.",
    cta: { label: "Request Blood", to: "/request-blood", secondary: false },
  },
  {
    id: "donate",
    label: "Donor Registration",
    Icon: FaUsers,
    body: "Voluntary donors may register through this portal. Eligibility and deferral rules are applied only by authorised personnel at the collection site.",
    cta: {
      label: "Register as Donor",
      to: "/register-donor",
      secondary: false,
    },
  },
];

const Home = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("availability");

  const goProtected = (path) => {
    if (!isAuthenticated) {
      loginWithRedirect({ appState: { returnTo: path } });
    } else {
      navigate(path);
    }
  };

  const active =
    SERVICE_TABS.find((t) => t.id === activeTab) ?? SERVICE_TABS[0];
  const ActiveIcon = active.Icon;

  const handleTabCta = (to) => {
    const protectedPaths = ["/request-blood", "/register-donor"];
    if (protectedPaths.includes(to)) {
      goProtected(to);
    } else {
      navigate(to);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-white">
        <section
          id="main-content"
          className="relative min-h-[calc(100vh-88px)] md:min-h-[calc(100vh-96px)] overflow-hidden"
          aria-label="Homepage video"
        >
          <div className="absolute inset-0 bg-neutral-900" aria-hidden />
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            src={homeVideo}
          />
          <div className="absolute inset-0 bg-black/35" aria-hidden />

          <div className="absolute inset-x-0 bottom-8">
            <div className="gov-page">
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("public-about")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="mx-auto block text-white/90 text-xs font-bold uppercase tracking-widest"
              >
                Scroll 👇🏻
              </button>
            </div>
          </div>
        </section>

        <section id="public-about" className="bg-[#f6f3ee]">
          <div className="gov-page py-14 md:py-20">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="flex items-center justify-center">
                <img
                  src="/imageabout.png"
                  alt="Blood donation awareness"
                  className="w-full max-w-xl h-auto object-contain"
                  loading="lazy"
                />
              </div>

              <div className="text-left">
                <p className="text-[11px] uppercase tracking-[0.35em] text-gov-red font-bold mb-4">
                  About Us
                </p>
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-neutral-900 mb-6">
                  Our Story: Pioneering Blood Donation for a Healthier Tomorrow
                </h2>
                <div className="h-1 w-16 bg-gov-red mb-6" aria-hidden />
                <p className="text-neutral-700 leading-relaxed text-base md:text-lg">
                  PulseConnect aims to address critical challenges in the blood
                  donation process, including donor engagement, intelligent
                  matching, and faster response during emergencies.
                </p>
                <p className="text-neutral-700 leading-relaxed text-base md:text-lg mt-4">
                  We connect donors, patients, hospitals, and blood banks
                  through a secure digital experience — making access to safe
                  blood more timely and transparent.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => goProtected("/register-donor")}
                    className="btn-gov-primary px-8 py-3 text-base rounded-full"
                  >
                    Want to Donate
                  </button>
                  <button
                    type="button"
                    onClick={() => goProtected("/request-blood")}
                    className="btn-gov-secondary px-8 py-3 text-base rounded-full"
                  >
                    Looking for Blood
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <section
        id="main-content"
        className="relative border-b-4 border-gov-red overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 bg-neutral-900" aria-hidden />
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src={homeVideo}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/55 to-neutral-950/20"
          aria-hidden
        />

        <div className="gov-page py-14 md:py-20 lg:py-24 relative z-10">
          <div className="border-neutral-800 px-4 py-2 inline-block mb-6">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wide text-neutral-900"></p>
          </div>

          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white uppercase tracking-tight max-w-4xl leading-tight mb-6"
          >
            Connecting Lives Through Every Drop
          </h1>

          <p className="text-white/85 max-w-3xl text-base md:text-lg mb-10 leading-relaxed text-left">
            PulseConnect empowers individuals to contribute through voluntary
            blood donation while ensuring fast and reliable access during
            emergencies, making every connection count.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <button
              type="button"
              onClick={() => goProtected("/register-donor")}
              className="btn-gov-primary px-8 py-3 text-base"
            >
              Take Pledge
            </button>
            <button
              type="button"
              onClick={() => goProtected("/request-blood")}
              className="btn-gov-secondary px-8 py-3 text-base"
            >
              Find Blood
            </button>
          </div>
        </div>
      </section>

      {/* Our Services — tabbed block */}
      <section
        className="gov-page py-14 md:py-20 lg:py-24"
        aria-labelledby="services-heading"
      >
        <h2
          id="services-heading"
          className="text-2xl md:text-3xl font-bold text-gov-red uppercase tracking-wide mb-8 md:mb-10 text-left"
        >
          Our Services
        </h2>

        <div className="flex flex-col gap-4 lg:gap-0">
          <div className="flex flex-col lg:flex-row lg:flex-nowrap gap-2 lg:gap-3 overflow-x-auto pb-2 lg:pb-0 -mx-2 px-2 lg:mx-0 lg:px-0">
            {SERVICE_TABS.map(({ id, label, Icon }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center justify-center gap-3 min-h-[56px] lg:flex-1 px-4 py-4 text-left rounded-md border-2 transition-colors ${
                    isActive
                      ? "bg-gov-red border-gov-red text-white shadow-sm"
                      : "bg-gov-panel border-gov-border text-neutral-900 hover:border-gov-red/40"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md border-2 ${
                      isActive
                        ? "border-white/40 bg-white/15 text-white"
                        : "border-gov-border bg-white text-gov-red"
                    }`}
                  >
                    <Icon className="text-lg" aria-hidden />
                  </span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wide leading-snug">
                    {label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 md:mt-8 rounded-lg border-2 border-gov-border bg-gov-panel p-8 md:p-12 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="text-left space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-gov-red uppercase tracking-wide">
                  {active.label}
                </h3>
                <p className="text-neutral-800 text-base md:text-lg leading-relaxed">
                  {active.body}
                </p>
                {active.cta.secondary ? (
                  <button
                    type="button"
                    onClick={() => handleTabCta(active.cta.to)}
                    className="btn-gov-secondary px-8 py-3 text-base"
                  >
                    {active.cta.label}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleTabCta(active.cta.to)}
                    className="btn-gov-primary px-8 py-3 text-base"
                  >
                    {active.cta.label}
                  </button>
                )}
              </div>
              <div className="flex justify-center lg:justify-end relative min-h-[200px] lg:min-h-[280px]">
                <div className="relative flex items-center justify-center w-full max-w-sm aspect-square rounded-lg bg-white border-2 border-gov-border">
                  <FaTint
                    className="text-[120px] md:text-[160px] text-gov-red/25 absolute"
                    aria-hidden
                  />
                  <ActiveIcon
                    className="relative text-6xl md:text-7xl text-gov-red drop-shadow-sm"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="portal-about">
        <About />
      </div>
    </div>
  );
};

export default Home;
