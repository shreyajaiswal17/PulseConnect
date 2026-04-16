import { useState, useEffect } from 'react';
import axios from 'axios';
import DonorCard from '../components/DonorCard';
import DonorFilters from '../components/DonorFilters';
import BloodRequestModal from '../components/BloodRequestModal';

const AvailableDonors = () => {
  const [donors, setDonors] = useState([]);
  const [filteredDonors, setFilteredDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedDonor, setSelectedDonor] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({
    bloodGroup: '',
    city: ''
  });

  // Fetch donors on component mount
  useEffect(() => {
    fetchDonors();
  }, []);

  // Apply filters whenever donors or filters change
  useEffect(() => {
    applyFilters();
  }, [donors, filters]);

  const fetchDonors = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get('http://localhost:5000/api/donors');
      setDonors(response.data.donors);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load available donors. Please try again.');
      setDonors([]);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...donors];

    if (filters.bloodGroup) {
      filtered = filtered.filter(donor => donor.bloodGroup === filters.bloodGroup);
    }

    if (filters.city) {
      filtered = filtered.filter(donor => donor.city.toLowerCase() === filters.city.toLowerCase());
    }

    setFilteredDonors(filtered);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleDonorSelect = (donor) => {
    setSelectedDonor(donor);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedDonor(null);
  };

  const handleRequestSubmit = async () => {
    // Refresh donors after successful request
    fetchDonors();
    handleModalClose();
  };

  return (
    <div className="min-h-screen bg-gov-grey py-10 md:py-16">
      <div className="gov-page">
        <div className="max-w-4xl mx-auto w-full">
          <div className="border-2 border-gov-border bg-white p-6 md:p-8">
            {/* Header */}
            <h1 className="text-2xl font-bold text-gov-red uppercase tracking-wide border-b-2 border-gov-yellow pb-2 mb-2 text-left">
              Available Donors
            </h1>
            <p className="text-sm text-neutral-700 mb-6 text-left leading-relaxed">
              Find blood donors in your area. All information is anonymized for privacy.
            </p>

            {/* Error State */}
            {error && (
              <div className="bg-red-50 border-2 border-gov-red text-gov-red px-4 py-3 text-sm mb-6 rounded-sm">
                {error}
              </div>
            )}

            {/* Loading State */}
            {loading && (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gov-red mb-4"></div>
                  <p className="text-gray-600">Loading available donors...</p>
                </div>
              </div>
            )}

            {/* Filters - Show only when data is loaded */}
            {!loading && donors.length > 0 && (
              <div className="mb-6">
                <DonorFilters 
                  donors={donors} 
                  onFilterChange={handleFilterChange}
                  filters={filters}
                />
              </div>
            )}

            {/* Donors List */}
            {!loading && (
              <>
                {filteredDonors.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredDonors.map(donor => (
                      <DonorCard 
                        key={donor._id} 
                        donor={donor} 
                        onSelect={handleDonorSelect}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-50 border-2 border-gray-300 px-4 py-8 text-center rounded-sm">
                    <p className="text-gray-600 text-sm">
                      {donors.length === 0 
                        ? 'No donors available at the moment. Please check back later.'
                        : 'No donors match your search criteria. Try adjusting your filters.'}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Blood Request Modal */}
      {showModal && selectedDonor && (
        <BloodRequestModal 
          donor={selectedDonor}
          onClose={handleModalClose}
          onSubmitSuccess={handleRequestSubmit}
        />
      )}
    </div>
  );
};

export default AvailableDonors;
