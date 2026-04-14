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
                Digital facilitation for donors, patients, and blood banks
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
                Figure: Voluntary donation saves lives — donate only at licensed blood centres.
              </p>
            </div>

            <div className="text-left space-y-6 text-base md:text-lg text-neutral-800 leading-relaxed">
              <div className="bg-gov-yellow/90 border-l-4 border-gov-red px-4 py-3 rounded-sm">
                <p className="font-bold uppercase text-sm tracking-wide text-neutral-900">Mission</p>
              </div>
              <p>
                PulseConnect addresses critical challenges in the blood donation ecosystem: donor
                engagement, matching of requests, and timely access to safe blood. The platform is
                designed to reduce delays and improve response during emergencies.
              </p>
              <p>
                With shortages remaining a serious healthcare concern, PulseConnect provides a unified
                digital channel connecting donors, patients, hospitals, and blood banks — supporting
                transparency and faster communication between stakeholders.
              </p>
              <p>
                By using secure authentication and structured data, the portal aims to strengthen
                public participation and support institutional blood transfusion services.
              </p>

              <hr className="border-gov-border" />

              <h3 className="font-bold text-gov-red uppercase text-sm tracking-wide">Key objectives</h3>
              <ol className="list-decimal list-outside ml-5 space-y-3 text-neutral-800">
                <li>Promote voluntary, repeat, and low-risk blood donation.</li>
                <li>Enable verified users to register as donors or submit blood requests.</li>
                <li>Improve traceability of requests while protecting personal data.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
