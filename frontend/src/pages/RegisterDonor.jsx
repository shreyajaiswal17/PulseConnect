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
    <div className="min-h-screen bg-gov-grey py-10 md:py-16">
      <div className="gov-page">
        <div className="max-w-2xl mx-auto w-full">
        <div className="border-2 border-gov-border bg-white p-6 md:p-8">
          <h1 className="text-2xl font-bold text-gov-red uppercase tracking-wide border-b-2 border-gov-yellow pb-2 mb-2 text-left">
            Become a Blood Donor
          </h1>
          <p className="text-sm text-neutral-700 mb-6 text-left leading-relaxed">
            Register for voluntary donation. Fields marked with asterisk (*) are mandatory.
          </p>

          {message && (
            <div className="bg-gov-yellow/40 border-2 border-gov-border text-neutral-900 px-4 py-3 text-sm mb-4 rounded-sm">
              {message}
            </div>
          )}

          {error && (
            <div className="bg-red-50 border-2 border-gov-red text-gov-red px-4 py-3 text-sm mb-4 rounded-sm">
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
                className="w-full px-3 py-2 border border-gov-border rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gov-red focus:border-gov-red"
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
                className="w-full px-3 py-2 border border-gov-border rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gov-red focus:border-gov-red"
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
                className="w-full px-3 py-2 border border-gov-border rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gov-red focus:border-gov-red"
                placeholder="Enter 10-digit phone number"
              />
            </div>

            {/* Notification Preferences */}
            <div className="flex items-start space-x-3 p-4 bg-gov-grey border-2 border-gov-border rounded-sm">
              <input
                type="checkbox"
                name="receiveAlerts"
                checked={formData.receiveAlerts}
                onChange={handleChange}
                className="mt-1 w-4 h-4 border-gov-border rounded-sm text-gov-red focus:ring-gov-red"
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
              className="btn-gov-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Registering…' : 'Register as Donor'}
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterDonor;