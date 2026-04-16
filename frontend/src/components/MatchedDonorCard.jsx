const MatchedDonorCard = ({ donor }) => {
  const getAvailabilityBadge = (isAvailable) => {
    return isAvailable 
      ? 'bg-green-100 text-green-800 border border-green-300'
      : 'bg-red-100 text-red-800 border border-red-300';
  };

  const availabilityText = donor.isAvailable ? 'Available' : 'Not Available';

  return (
    <div className="bg-white border-2 border-gov-border rounded-sm p-4">
      {/* Blood Group - Large and Prominent */}
      <div className="mb-3">
        <p className="text-xs text-gray-500 uppercase tracking-wide">Blood Group</p>
        <p className="text-2xl font-bold text-gov-red">{donor.bloodGroup}</p>
      </div>

      {/* City */}
      <div className="mb-3">
        <p className="text-xs text-gray-500 uppercase tracking-wide">City</p>
        <p className="text-sm font-medium text-gray-700">{donor.city}</p>
      </div>

      {/* Availability Badge */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-200">
        <span className="text-xs text-gray-500 uppercase tracking-wide">Status</span>
        <span className={`text-xs font-semibold px-2 py-1 rounded ${getAvailabilityBadge(donor.isAvailable)}`}>
          {availabilityText}
        </span>
      </div>
    </div>
  );
};

export default MatchedDonorCard;
