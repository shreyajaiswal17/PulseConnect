import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  FaHandHoldingHeart,
  FaSearch,
  FaTint,
  FaHeartbeat,
  FaClipboardCheck,
  FaSyringe,
  FaArrowRight,
} from "react-icons/fa";

const sectionScrollClass = "scroll-mt-[148px] md:scroll-mt-[156px]";

const Dashboard = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gov-grey">
        <p className="text-neutral-700 font-bold uppercase text-sm tracking-wide">
          Loading…
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gov-grey pb-10">
      <div className="gov-page pt-8 md:pt-12 space-y-10 md:space-y-14 pb-4">
        {/* Welcome Section */}
        <section
          id="dashboard-home"
          className={`${sectionScrollClass} border-2 border-gov-border bg-white p-6 md:p-8`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-left border-b border-gov-border pb-6 mb-2">
            <img
              src={user?.picture}
              alt="Account"
              className="w-20 h-20 rounded-sm border-2 border-gov-red object-cover shrink-0"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gov-red uppercase tracking-wide">
                Welcome, {user?.name}
              </h1>
              <p className="text-sm text-neutral-700 mt-2 max-w-xl">
                PulseConnect - Your trusted platform for voluntary blood donation and request matching.
              </p>
            </div>
          </div>
        </section>

        {/* Action Cards - Side by Side */}
        <section className={sectionScrollClass}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Looking for Blood Card */}
            <div className="border-2 border-gov-red bg-gradient-to-br from-red-50 to-white p-6 md:p-8 rounded-sm shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col gap-4 h-full">
                <div className="flex items-center gap-4">
                  <div className="bg-gov-red text-white p-3 rounded-sm">
                    <FaSearch className="w-6 h-6" aria-hidden />
                  </div>
                  <h2 className="text-xl font-bold text-gov-red uppercase tracking-wide">
                    Looking for Blood
                  </h2>
                </div>
                <p className="text-sm text-neutral-700 flex-grow">
                  Submit a structured request with patient and contact details. Matching is subject to donor availability and centre policies.
                </p>
                <div className="bg-gov-yellow/20 border-l-4 border-gov-yellow pl-3 py-2 rounded-r">
                  <p className="text-xs font-semibold text-gov-red">⚡ Available donors matched by blood group</p>
                </div>
                <Link
                  to="/request-blood"
                  className="btn-gov-primary text-center flex items-center justify-center gap-2 group"
                >
                  Request Blood
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Want to Donate Card */}
            <div className="border-2 border-gov-red bg-gradient-to-br from-green-50 to-white p-6 md:p-8 rounded-sm shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col gap-4 h-full">
                <div className="flex items-center gap-4">
                  <div className="bg-gov-red text-white p-3 rounded-sm">
                    <FaHandHoldingHeart className="w-6 h-6" aria-hidden />
                  </div>
                  <h2 className="text-xl font-bold text-gov-red uppercase tracking-wide">
                    Want to Donate
                  </h2>
                </div>
                <p className="text-sm text-neutral-700 flex-grow">
                  Register as a voluntary donor. Your information will be used only for legitimate coordination under applicable privacy rules.
                </p>
                <div className="bg-gov-yellow/20 border-l-4 border-gov-yellow pl-3 py-2 rounded-r">
                  <p className="text-xs font-semibold text-gov-red">❤️ Save lives by becoming a blood donor</p>
                </div>
                <Link
                  to="/register-donor"
                  className="btn-gov-primary text-center flex items-center justify-center gap-2 group"
                >
                  Become a Donor
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className={sectionScrollClass}>
          <div className="border-2 border-gov-border bg-white p-6 md:p-8">
            <h2 className="text-lg font-bold text-gov-red uppercase tracking-wide mb-4">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                to="/available-donors"
                className="p-4 border border-gov-border rounded-sm hover:bg-gov-yellow/10 transition-colors flex items-center gap-3 group"
              >
                <FaTint className="w-5 h-5 text-gov-red group-hover:scale-110 transition-transform" />
                <span className="font-medium text-neutral-800 group-hover:text-gov-red">Find Donors</span>
              </Link>
              <Link
                to="/my-blood-request"
                className="p-4 border border-gov-border rounded-sm hover:bg-gov-yellow/10 transition-colors flex items-center gap-3 group"
              >
                <FaClipboardCheck className="w-5 h-5 text-gov-red group-hover:scale-110 transition-transform" />
                <span className="font-medium text-neutral-800 group-hover:text-gov-red">My Request</span>
              </Link>
              <Link
                to="/dashboard"
                className="p-4 border border-gov-border rounded-sm hover:bg-gov-yellow/10 transition-colors flex items-center gap-3 group"
              >
                <FaHeartbeat className="w-5 h-5 text-gov-red group-hover:scale-110 transition-transform" />
                <span className="font-medium text-neutral-800 group-hover:text-gov-red">Dashboard</span>
              </Link>
            </div>
          </div>
        </section>

        {/* About Blood Donation Section */}
        <section id="about-blood-donation" className={sectionScrollClass}>
          <div className="border-2 border-gov-border bg-white p-6 md:p-8">
            <div className="flex items-start gap-3 mb-6 pb-4 border-b-2 border-gov-red">
              <FaTint
                className="text-gov-red w-9 h-9 shrink-0 mt-0.5"
                aria-hidden
              />
              <div className="text-left">
                <h2 className="text-lg md:text-xl font-bold text-neutral-900 uppercase tracking-wide">
                  About Blood Donation
                </h2>
                <p className="text-xs uppercase tracking-wide text-neutral-600 mt-1">
                  Process, eligibility, and precautions (general information)
                </p>
              </div>
            </div>

            <div className="space-y-8 text-left text-sm md:text-base text-neutral-800 leading-relaxed">
              <div>
                <h3 className="font-bold text-neutral-900 uppercase text-sm tracking-wide mb-3 flex items-center gap-2">
                  <FaHeartbeat className="text-gov-red w-4 h-4" aria-hidden />
                  How donation works
                </h3>
                <ol className="list-decimal list-outside ml-5 space-y-2">
                  <li>Register and complete a short health questionnaire.</li>
                  <li>
                    Staff verify identity, hemoglobin, blood pressure, pulse,
                    and temperature.
                  </li>
                  <li>
                    Whole blood donation typically takes about 8–10 minutes.
                  </li>
                  <li>
                    Rest with refreshments; most donors feel well the same day.
                  </li>
                  <li>
                    Blood is tested, typed, and separated into components as per
                    centre protocol.
                  </li>
                </ol>
              </div>

              <hr className="border-gov-border" />

              <div>
                <h3 className="font-bold text-neutral-900 uppercase text-sm tracking-wide mb-3 flex items-center gap-2">
                  <FaClipboardCheck
                    className="text-gov-red w-4 h-4"
                    aria-hidden
                  />
                  Basic eligibility (indicative)
                </h3>
                <ul className="list-disc list-outside ml-5 space-y-2">
                  <li>
                    Age: commonly 18–65 years (varies by jurisdiction and
                    centre).
                  </li>
                  <li>Weight: usually at least 50 kg for whole blood.</li>
                  <li>Good general health — not acutely ill with infection.</li>
                  <li>
                    Hemoglobin within the required range (measured on site).
                  </li>
                  <li>
                    No recent deferral events (tattoos, travel, procedures) per
                    local rules.
                  </li>
                  <li>
                    Pregnancy and recent childbirth: follow medical officer
                    advice.
                  </li>
                </ul>
                <p className="mt-3 text-xs text-neutral-600 uppercase tracking-wide">
                  Final eligibility is determined only by authorised medical
                  staff at the blood centre.
                </p>
              </div>

              <hr className="border-gov-border" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-neutral-900 uppercase text-sm tracking-wide mb-3">
                    Before donation
                  </h3>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-800">
                    <li>Adequate sleep; eat a normal meal — do not fast.</li>
                    <li>Extra fluids the day before and on donation day.</li>
                    <li>Avoid alcohol for 24 hours prior.</li>
                    <li>
                      Carry valid photo ID and medication list if requested.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 uppercase text-sm tracking-wide mb-3 flex items-center gap-2">
                    <FaSyringe className="text-gov-red w-4 h-4" aria-hidden />
                    After donation
                  </h3>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-800">
                    <li>Rest 10–15 minutes; take offered fluids and snacks.</li>
                    <li>
                      Keep the bandage on; avoid heavy lifting with that arm.
                    </li>
                    <li>
                      Avoid strenuous work and excessive heat for ~24 hours.
                    </li>
                    <li>
                      If dizzy or unwell, sit or lie down and inform staff.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gov-yellow/80 border-l-4 border-gov-red pl-4 py-3">
                <h3 className="font-bold text-neutral-900 uppercase text-sm tracking-wide mb-2">
                  Why voluntary donation matters
                </h3>
                <ul className="list-disc list-outside ml-5 space-y-1 text-neutral-900">
                  <li>
                    Components from one donation may help more than one patient.
                  </li>
                  <li>
                    Blood is perishable — repeat donors stabilise the supply.
                  </li>
                  <li>Screening supports donor health awareness.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
