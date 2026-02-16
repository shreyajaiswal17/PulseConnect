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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading matches...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Request Info */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-[#17153B] mb-4">
            Request Created Successfully! ✅
          </h1>
          <div className="space-y-2 text-gray-600">
            <p><strong>Patient:</strong> {data.request.patientName}</p>
            <p><strong>Blood Group:</strong> {data.request.bloodGroup}</p>
            <p><strong>City:</strong> {data.request.city}</p>
            {data.request.note && <p><strong>Note:</strong> {data.request.note}</p>}
          </div>
        </div>

        {/* Matching Donors */}
        <div>
          <h2 className="text-2xl font-bold text-[#17153B] mb-6">
            Matching Donors ({data.count})
          </h2>

          {data.count === 0 ? (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
              <p className="text-gray-700">No matching donors found in your city.</p>
              <Link to="/register-donor" className="text-[#17153B] underline mt-2 inline-block">
                Become a donor and help others!
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.matches.map((donor) => (
                <div key={donor._id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-[#17153B] mb-3">{donor.name}</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">Blood Group:</span> 
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">
                        {donor.bloodGroup}
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#17153B]" />
                      {donor.city}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaPhone className="text-[#17153B]" />
                      <a href={`tel:${donor.phone}`} className="text-[#17153B] hover:underline">
                        {donor.phone}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link to="/" className="bg-[#17153B] text-white px-6 py-3 rounded-lg hover:bg-[#26235A] transition">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Matches;