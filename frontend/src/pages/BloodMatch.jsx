import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';

const Matches = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/requests/${id}/matches`);
        setData(response.data);
      } catch (err) {
        setError('Failed to fetch matching donors');
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gov-grey">
        <p className="text-sm font-bold uppercase tracking-wide text-neutral-700">Loading matches…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gov-grey px-4">
        <p className="text-gov-red font-bold uppercase text-sm text-center border-2 border-gov-red bg-red-50 px-4 py-3">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gov-grey py-10 md:py-16">
      <div className="gov-page">
        <div className="max-w-4xl mx-auto w-full">
        <div className="border-2 border-gov-border bg-white p-6 md:p-8 mb-6">
          <h1 className="text-xl md:text-2xl font-bold text-gov-red uppercase tracking-wide border-b-2 border-gov-yellow pb-2 mb-4">
            Request registered
          </h1>
          <div className="space-y-2 text-sm text-neutral-800 text-left">
            <p><span className="font-bold uppercase text-xs tracking-wide">Patient:</span> {data.request.patientName}</p>
            <p><span className="font-bold uppercase text-xs tracking-wide">Blood group:</span> {data.request.bloodGroup}</p>
            <p><span className="font-bold uppercase text-xs tracking-wide">City:</span> {data.request.city}</p>
            {data.request.note && (
              <p><span className="font-bold uppercase text-xs tracking-wide">Note:</span> {data.request.note}</p>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-neutral-900 uppercase tracking-wide border-b border-gov-border pb-2 mb-4">
            Matching donors ({data.count})
          </h2>

          {data.count === 0 ? (
            <div className="bg-gov-yellow/40 border-2 border-gov-border p-6 text-left text-sm text-neutral-800">
              <p>No matching donors found in your city at this time.</p>
              <Link to="/register-donor" className="text-gov-red font-bold underline mt-3 inline-block uppercase text-xs tracking-wide">
                Register as donor
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.matches.map((donor) => (
                <div key={donor._id} className="border-2 border-gov-border bg-white p-5">
                  <h3 className="text-base font-bold text-neutral-900 uppercase tracking-wide mb-3 border-l-4 border-gov-red pl-3">
                    {donor.name}
                  </h3>
                  <div className="space-y-2 text-sm text-neutral-800">
                    <p>
                      <span className="font-bold uppercase text-xs tracking-wide">Blood group:</span>{' '}
                      <span className="inline-block border border-gov-red text-gov-red px-2 py-0.5 text-xs font-bold uppercase">
                        {donor.bloodGroup}
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-gov-red shrink-0" aria-hidden />
                      {donor.city}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaPhone className="text-gov-red shrink-0" aria-hidden />
                      <a href={`tel:${donor.phone}`} className="text-gov-red font-semibold underline">
                        {donor.phone}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 text-left">
          <Link to="/" className="btn-gov-primary inline-block text-center">
            Back to Home
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
