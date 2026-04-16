const RequestStatusCard = ({ request, matchCount, formattedDate }) => {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'fulfilled':
        return 'bg-green-100 text-green-800 border border-green-300';
      case 'pending':
      default:
        return 'bg-gov-yellow/30 text-gov-red border-2 border-gov-yellow';
    }
  };

  const statusText = request.status === 'fulfilled' ? 'Fulfilled' : 'Pending';

  return (
    <div className="bg-white border-2 border-gov-border rounded-sm p-6 mb-6">
      {/* Status Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Request Status</p>
          <span className={`inline-block text-sm font-semibold px-3 py-1 rounded ${getStatusBadge(request.status)}`}>
            {statusText}
          </span>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Submitted</p>
          <p className="text-sm font-medium text-gray-700">{formattedDate}</p>
        </div>
      </div>

      {/* Main Request Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-gray-200 pt-6">
        {/* Blood Group */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Blood Group Required</p>
          <p className="text-2xl font-bold text-gov-red">{request.bloodGroup}</p>
        </div>

        {/* City */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">City</p>
          <p className="text-lg font-medium text-gray-800">{request.city}</p>
        </div>

        {/* Email */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Your Email</p>
          <p className="text-sm font-medium text-gray-800 break-all">{request.requesterEmail}</p>
        </div>
      </div>

      {/* Match Count Highlight */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="bg-gov-red/5 border-l-4 border-gov-red p-3 rounded-r-sm">
          <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">Matching Donors</p>
          <p className="text-2xl font-bold text-gov-red">
            {matchCount}
            <span className="text-sm font-normal text-gray-600 ml-2">
              {matchCount === 1 ? 'donor' : 'donors'} notified
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestStatusCard;
