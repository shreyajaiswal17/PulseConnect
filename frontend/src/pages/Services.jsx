import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className="bg-gov-panel min-h-screen border-t-2 border-gov-border">
      <div className="gov-page py-14 md:py-20">
        <h1 className="text-2xl md:text-3xl font-bold text-gov-red uppercase tracking-wide mb-4 text-left border-b-2 border-gov-yellow pb-3 inline-block">
          Blood Availability
        </h1>

        <p className="text-neutral-800 text-base md:text-lg max-w-3xl leading-relaxed mb-10 text-left">
          Indicative blood availability and stock information for your region will be integrated with
          licensed blood centres. Until live data is connected, use this section as a placeholder for
          official disclosures and helpline routing.
        </p>

        <div className="max-w-4xl rounded-lg border-2 border-gov-border bg-white p-8 md:p-12">
          <p className="text-neutral-800 text-base md:text-lg leading-relaxed mb-8">
            Blood availability information will be displayed here in coordination with authorised blood
            banks. For urgent requirements, contact the nearest hospital transfusion service or state
            helpline as per local guidelines.
          </p>
          <Link to="/contact" className="btn-gov-secondary inline-block text-center">
            Contact / Helpline
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
