import { useMemo } from 'react';

const DonorFilters = ({ donors, onFilterChange, filters }) => {
  // Extract unique blood groups and cities from donors
  const bloodGroups = useMemo(() => {
    const groups = [...new Set(donors.map(d => d.bloodGroup))];
    return groups.sort();
  }, [donors]);

  const cities = useMemo(() => {
    const cityList = [...new Set(donors.map(d => d.city))];
    return cityList.sort();
  }, [donors]);

  const handleBloodGroupChange = (e) => {
    onFilterChange({
      ...filters,
      bloodGroup: e.target.value
    });
  };

  const handleCityChange = (e) => {
    onFilterChange({
      ...filters,
      city: e.target.value
    });
  };

  const handleReset = () => {
    onFilterChange({
      bloodGroup: '',
      city: ''
    });
  };

  return (
    <div className="bg-gray-50 border border-gray-200 p-4 rounded-sm">
      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3">Filter Donors</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Blood Group Filter */}
        <div>
          <label className="block text-xs text-gray-700 font-medium mb-1">Blood Group</label>
          <select
            value={filters.bloodGroup}
            onChange={handleBloodGroupChange}
            className="w-full px-2 py-2 border border-gov-border rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gov-red"
          >
            <option value="">All Blood Groups</option>
            {bloodGroups.map(group => (
              <option key={group} value={group}>{group}</option>
            ))}
          </select>
        </div>

        {/* City Filter */}
        <div>
          <label className="block text-xs text-gray-700 font-medium mb-1">City</label>
          <select
            value={filters.city}
            onChange={handleCityChange}
            className="w-full px-2 py-2 border border-gov-border rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gov-red"
          >
            <option value="">All Cities</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Reset Button */}
        <div className="flex items-end">
          <button
            onClick={handleReset}
            className="w-full px-3 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium text-sm rounded-sm transition-colors"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonorFilters;
