import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BloodRequestModal = ({ donor, onClose, onSubmitSuccess }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    patientName: '',
    requesterEmail: '',
    bloodGroup: donor.bloodGroup,
    city: donor.city,
    phone: '',
    note: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [requestId, setRequestId] = useState(null);

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
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/requests`, formData);
      const newRequestId = response.data.request._id;
      
      // Store requestId in localStorage
      localStorage.setItem('lastRequestId', newRequestId);
      setRequestId(newRequestId);
      setSuccess(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit blood request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white border-2 border-gov-border rounded-sm w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gov-red text-white p-4 flex items-center justify-between sticky top-0">
          <h2 className="text-lg font-bold">Request Blood</h2>
          <button
            onClick={onClose}
            className="text-xl font-bold hover:bg-white hover:text-gov-red rounded-sm px-2 py-1 transition"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Donor Info Display */}
          <div className="bg-gray-50 border border-gray-200 p-3 rounded-sm mb-4">
            <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">Donor Details</p>
            <div className="flex justify-between">
              <div>
                <p className="text-xs text-gray-600">Blood Group</p>
                <p className="font-bold text-gov-red">{donor.bloodGroup}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">City</p>
                <p className="font-medium">{donor.city}</p>
              </div>
            </div>
          </div>

          {/* Success Message */}
          {success && (
            <div className="bg-green-50 border-2 border-green-600 p-4 mb-4 rounded-sm">
              <p className="text-green-800 text-sm font-semibold mb-4">
                ✓ Blood request submitted successfully! Donors will be notified.
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => navigate(`/my-blood-request/${requestId}`)}
                  className="flex-1 px-4 py-2 bg-gov-red text-white font-medium rounded-sm hover:bg-red-700 transition text-sm"
                >
                  View Request Status
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onSubmitSuccess();
                    onClose();
                  }}
                  className="flex-1 px-4 py-2 border-2 border-gov-red text-gov-red font-medium rounded-sm hover:bg-red-50 transition text-sm"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-2 border-gov-red text-gov-red px-4 py-3 text-sm mb-4 rounded-sm">
              {error}
            </div>
          )}

          {/* Form */}
          {!success && (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Patient Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm">
                  Patient Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gov-border rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gov-red"
                  placeholder="Patient's full name"
                />
              </div>

              {/* Requester Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="requesterEmail"
                  value={formData.requesterEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gov-border rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gov-red"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gov-border rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gov-red"
                  placeholder="10-digit phone number"
                />
              </div>

              {/* Note */}
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm">
                  Additional Notes
                </label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gov-border rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gov-red"
                  placeholder="Any additional information (e.g., urgency level)"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={loading}
                  className="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 font-medium rounded-sm hover:bg-gray-50 transition disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-4 py-2 bg-gov-red text-white font-medium rounded-sm hover:bg-red-700 transition disabled:opacity-50 flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                      Submitting...
                    </>
                  ) : (
                    'Submit Request'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BloodRequestModal;
