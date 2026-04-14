import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  FaHandHoldingHeart,
  FaSearch,
  FaTint,
  FaHeartbeat,
  FaClipboardCheck,
  FaSyringe,
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
              <h1 className="text-xl md:text-2xl font-bold text-neutral-900 uppercase tracking-wide">
                Welcome, {user?.name}
              </h1>
              <p className="text-sm text-neutral-700 mt-2 max-w-xl">
                Use the section links above to navigate this page. All services
                require authentication and compliance with blood transfusion
                guidelines.
              </p>
            </div>
          </div>
        </section>

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

        <section id="looking-for-blood" className={sectionScrollClass}>
          <div className="border-2 border-gov-red bg-white p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-left">
              <div className="flex gap-4">
                <FaSearch
                  className="text-gov-red w-10 h-10 shrink-0"
                  aria-hidden
                />
                <div>
                  <h2 className="text-lg font-bold text-neutral-900 uppercase tracking-wide mb-2">
                    Looking for blood
                  </h2>
                  <p className="text-sm text-neutral-700 max-w-xl">
                    Submit a structured request with patient and contact
                    details. Matching is subject to donor availability and
                    centre policies.
                  </p>
                </div>
              </div>
              <Link
                to="/request-blood"
                className="btn-gov-primary text-center shrink-0"
              >
                Request Blood
              </Link>
            </div>
          </div>
        </section>

        <section id="want-to-donate" className={sectionScrollClass}>
          <div className="border-2 border-gov-red bg-white p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-left">
              <div className="flex gap-4">
                <FaHandHoldingHeart
                  className="text-gov-red w-10 h-10 shrink-0"
                  aria-hidden
                />
                <div>
                  <h2 className="text-lg font-bold text-neutral-900 uppercase tracking-wide mb-2">
                    Want to donate
                  </h2>
                  <p className="text-sm text-neutral-700 max-w-xl">
                    Register as a voluntary donor. Information will be used only
                    for legitimate coordination under applicable privacy rules.
                  </p>
                </div>
              </div>
              <Link
                to="/register-donor"
                className="btn-gov-primary text-center shrink-0"
              >
                Become a Donor
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
