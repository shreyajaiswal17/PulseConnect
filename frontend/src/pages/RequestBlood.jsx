import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RequestBlood = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    patientName: '',
    bloodGroup: '',
    city: '',
    phone: '',
    note: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/requests', formData);
      const requestId = response.data.request._id;
      
      // Redirect to matches page
      navigate(`/matches/${requestId}`);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong!');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-[#17153B] mb-4 text-center">
            Request Blood
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Fill the form to find matching donors 🔍
          </p>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Patient Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Patient Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17153B]"
                placeholder="Enter patient name"
              />
            </div>

            {/* Blood Group */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Blood Group Required <span className="text-red-500">*</span>
              </label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17153B]"
              >
                <option value="">Select Blood Group</option>
                {bloodGroups.map((group) => (
                  <option key={group} value={group}>{group}</option>
                ))}
              </select>
            </div>

            {/* City */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17153B]"
                placeholder="Enter city"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17153B]"
                placeholder="Enter 10-digit phone number"
              />
            </div>

            {/* Note */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Additional Note (Optional)
              </label>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17153B]"
                placeholder="Any additional information..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#17153B] text-white py-3 rounded-lg font-medium hover:bg-[#26235A] transition disabled:bg-gray-400"
            >
              {loading ? 'Searching...' : 'Find Donors'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestBlood;