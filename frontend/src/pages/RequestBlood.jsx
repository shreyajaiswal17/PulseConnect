import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RequestBlood = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    patientName: '',
    requesterEmail: '',
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
      
      // Store requestId in localStorage for tracking
      localStorage.setItem('lastRequestId', requestId);
      
      // Redirect to request status page
      navigate(`/my-blood-request/${requestId}`);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong!');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gov-grey py-10 md:py-16">
      <div className="gov-page">
        <div className="max-w-2xl mx-auto w-full">
        <div className="border-2 border-gov-border bg-white p-6 md:p-8">
          <h1 className="text-2xl font-bold text-gov-red uppercase tracking-wide border-b-2 border-gov-yellow pb-2 mb-2 text-left">
            Request Blood
          </h1>
          <p className="text-sm text-neutral-700 mb-6 text-left leading-relaxed">
            Complete all mandatory fields. Information will be processed in accordance with applicable guidelines.
          </p>

          {error && (
            <div className="bg-red-50 border-2 border-gov-red text-gov-red px-4 py-3 text-sm mb-4 rounded-sm">
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
                className="w-full px-3 py-2 border border-gov-border rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gov-red focus:border-gov-red"
                placeholder="Enter patient name"
              />
            </div>

            {/* Your Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="requesterEmail"
                value={formData.requesterEmail}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gov-border rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gov-red focus:border-gov-red"
                placeholder="your.email@example.com"
              />
              <p className="text-sm text-gray-500 mt-1">We'll send you confirmation and donor contact details</p>
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
                className="w-full px-3 py-2 border border-gov-border rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gov-red focus:border-gov-red"
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
                className="w-full px-3 py-2 border border-gov-border rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gov-red focus:border-gov-red"
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
                className="w-full px-3 py-2 border border-gov-border rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gov-red focus:border-gov-red"
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
                className="w-full px-3 py-2 border border-gov-border rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gov-red focus:border-gov-red"
                placeholder="Any additional information..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn-gov-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Searching…' : 'Find Blood'}
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default RequestBlood;