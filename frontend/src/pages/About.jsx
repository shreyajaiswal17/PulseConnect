import { FaTint } from 'react-icons/fa';

const About = () => {
  return (
    <section className="bg-gov-panel border-t-2 border-gov-border" aria-labelledby="about-heading">
      <div className="gov-page py-14 md:py-20 lg:py-24">
        <div className="border-2 border-gov-border bg-white p-8 md:p-12 lg:p-14 rounded-lg">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 pb-6 border-b-2 border-gov-red">
            <FaTint className="text-gov-red w-11 h-11 shrink-0" aria-hidden />
            <div>
              <h2 id="about-heading" className="text-2xl md:text-3xl font-bold text-gov-red uppercase tracking-wide">
                About PulseConnect
              </h2>
              <p className="text-sm md:text-base text-neutral-700 mt-2 uppercase tracking-wide">
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="border-2 border-gov-border bg-gov-panel p-5 rounded-md">
              <img
                src="/imageabout.png"
                alt="Blood donation awareness"
                className="w-full h-auto object-cover border border-gov-border rounded-sm"
              />
              <p className="text-xs text-neutral-600 mt-3 uppercase tracking-wide leading-relaxed">
              </p>
            </div>

            <div className="text-left space-y-6 text-base md:text-lg text-neutral-800 leading-relaxed">
              <div className="bg-gov-yellow/90 border-l-4 border-gov-red px-4 py-3 rounded-sm">
                <p className="font-bold uppercase text-sm tracking-wide text-neutral-900">Mission</p>
              </div>
              <p>
  PulseConnect is a smart blood donation platform designed to bridge the gap between donors, patients, hospitals, and blood banks. It focuses on solving critical challenges such as delayed response, inefficient donor matching, and lack of real-time communication during emergencies.
</p>

<p>
  In situations where every second matters, PulseConnect enables quick access to verified donors and streamlines the process of requesting and supplying blood. By creating a unified digital ecosystem, the platform ensures transparency, reliability, and faster coordination among all stakeholders.
</p>

<p>
  With secure authentication and well-structured data management, PulseConnect not only enhances trust but also encourages active community participation. Our goal is to make blood availability more accessible, reduce shortages, and ultimately save lives through technology-driven solutions.
</p>

              <hr className="border-gov-border" /> 
                 </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
