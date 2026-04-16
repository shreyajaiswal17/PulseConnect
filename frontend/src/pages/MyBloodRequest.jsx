import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import RequestStatusCard from '../components/RequestStatusCard';
import MatchedDonorCard from '../components/MatchedDonorCard';

const MyBloodRequest = () => {
  const navigate = useNavigate();
  const { id: requestIdParam } = useParams();
  const [request, setRequest] = useState(null);
  const [matches, setMatches] = useState([]);
  const [matchCount, setMatchCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Get request ID from URL param or localStorage
  const getRequestId = () => {
    if (requestIdParam) {
      localStorage.setItem('lastRequestId', requestIdParam);
      return requestIdParam;
    }
    return localStorage.getItem('lastRequestId');
  };

  useEffect(() => {
    fetchRequestStatus();
  }, [requestIdParam]);

  const fetchRequestStatus = async () => {
    try {
      setLoading(true);
      setError('');

      const requestId = getRequestId();
      
      if (!requestId) {
        setError('No request found. Please submit a new blood request.');
        setLoading(false);
        return;
      }

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/requests/${requestId}/matches`
      );

      setRequest(response.data.request);
      setMatches(response.data.matches || []);
      setMatchCount(response.data.count || response.data.matches?.length || 0);
    } catch (err) {
      setError(
        err.response?.data?.message || 
        'Failed to load request details. Please try again.'
      );
      setRequest(null);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gov-grey py-10 md:py-16">
      <div className="gov-page">
        <div className="max-w-2xl mx-auto w-full">
          <div className="border-2 border-gov-border bg-white p-6 md:p-8">
            {/* Header */}
            <h1 className="text-2xl font-bold text-gov-red uppercase tracking-wide border-b-2 border-gov-yellow pb-2 mb-2 text-left">
              My Blood Request
            </h1>
            <p className="text-sm text-neutral-700 mb-6 text-left leading-relaxed">
              Track your blood request status and see how many donors with your blood group are available.
            </p>

            {/* Error State */}
            {error && (
              <div className="bg-red-50 border-2 border-gov-red text-gov-red px-4 py-3 text-sm mb-6 rounded-sm">
                {error}
                {!request && (
                  <button
                    onClick={() => navigate('/request-blood')}
                    className="block mt-3 text-gov-red font-semibold hover:underline"
                  >
                    → Submit a new blood request
                  </button>
                )}
              </div>
            )}

            {/* Loading State */}
            {loading && (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gov-red mb-4"></div>
                  <p className="text-gray-600">Loading request details...</p>
                </div>
              </div>
            )}

            {/* Success State - Request Details */}
            {!loading && request && (
              <>
                <RequestStatusCard 
                  request={request}
                  matchCount={matchCount}
                  formattedDate={formatDate(request.createdAt)}
                />

                {/* Donor Notification Info */}
                <div className="bg-gov-yellow/20 border-2 border-gov-yellow p-4 rounded-sm mt-6 mb-6">
                  <p className="text-sm font-semibold text-gov-red mb-2">
                    ✉️ Donors Notified
                  </p>
                  <p className="text-sm text-gray-700">
                    {matchCount > 0 ? (
                      <>
                        <span className="font-bold text-gov-red">{matchCount}</span> {matchCount === 1 ? 'donor has' : 'donors have'} been notified about your blood request.
                      </>
                    ) : (
                      'No donors available with your blood group at this time.'
                    )}
                  </p>
                </div>

                {/* Matching Donors Section */}
                {matchCount > 0 && (
                  <>
                    <div className="mt-8 pt-8 border-t-2 border-gov-border">
                      <h2 className="text-lg font-bold text-gov-red uppercase tracking-wide mb-2">
                        Available Donors
                      </h2>
                      <p className="text-sm text-gray-600 mb-6">
                        <span className="font-semibold text-gov-red">{matchCount}</span> {matchCount === 1 ? 'donor' : 'donors'} available with {request.bloodGroup} blood group
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {matches.map(donor => (
                          <MatchedDonorCard 
                            key={donor._id} 
                            donor={donor}
                          />
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Additional Info */}
                <div className="bg-gray-50 border border-gray-200 p-4 rounded-sm mt-8">
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3">
                    Request Details
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Patient Name:</span>
                      <span className="font-medium text-gray-800">{request.patientName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Submitted On:</span>
                      <span className="font-medium text-gray-800">{formatDate(request.createdAt)}</span>
                    </div>
                    {request.note && (
                      <div className="flex justify-between pt-2 border-t border-gray-200">
                        <span className="text-gray-600">Notes:</span>
                        <span className="font-medium text-gray-800 text-right max-w-xs">{request.note}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={fetchRequestStatus}
                    className="flex-1 px-4 py-2 bg-gov-red text-white font-medium rounded-sm hover:bg-red-700 transition"
                  >
                    Refresh Status
                  </button>
                  <button
                    onClick={() => navigate('/available-donors')}
                    className="flex-1 px-4 py-2 border-2 border-gov-red text-gov-red font-medium rounded-sm hover:bg-red-50 transition"
                  >
                    View All Donors
                  </button>
                </div>
              </>
            )}

            {/* No Request State */}
            {!loading && !request && !error && (
              <div className="bg-gray-50 border-2 border-gray-300 px-4 py-8 text-center rounded-sm">
                <p className="text-gray-600 text-sm mb-4">
                  You haven't submitted any blood requests yet.
                </p>
                <button
                  onClick={() => navigate('/request-blood')}
                  className="px-6 py-2 bg-gov-red text-white font-semibold rounded-sm hover:bg-red-700 transition"
                >
                  Submit a Blood Request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBloodRequest;
