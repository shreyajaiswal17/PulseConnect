import { useState } from 'react';
import axios from 'axios';


const RegisterDonor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bloodGroup: '',
    city: '',
    phone: '',
    receiveAlerts: true
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/donors', formData);
      setMessage(response.data.message);
      setFormData({ name: '', email: '', bloodGroup: '', city: '', phone: '', receiveAlerts: true });
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-[#17153B] mb-4 text-center">
            Become a Blood Donor
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Register as a donor and save lives 🩸
          </p>

          {message && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              {message}
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17153B]"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17153B]"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Blood Group */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Blood Group <span className="text-red-500">*</span>
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
                placeholder="Enter your city"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number <span className="text-red-500">*</span>
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

            {/* Notification Preferences */}
            <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
              <input
                type="checkbox"
                name="receiveAlerts"
                checked={formData.receiveAlerts}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label className="text-gray-700 text-sm">
                <span className="font-medium">Send me email notifications for urgent blood requests</span>
                <p className="text-gray-600 mt-1">
                  You'll only receive emails when someone in your city needs your blood group. You can change this preference anytime.
                </p>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#17153B] text-white py-3 rounded-lg font-medium hover:bg-[#26235A] transition disabled:bg-gray-400"
            >
              {loading ? 'Registering...' : 'Register as Donor'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterDonor;