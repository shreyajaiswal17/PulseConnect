import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { FaHandHoldingHeart, FaSearch } from 'react-icons/fa';

const Dashboard = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 text-center">
          <img 
            src={user?.picture} 
            alt={user?.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-[#17153B]"
          />
          <h1 className="text-3xl font-bold text-[#17153B] mb-2">
            Welcome, {user?.name}! 👋
          </h1>
          <p className="text-gray-600">
            What would you like to do today?
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Become a Donor Card */}
          <Link to="/register-donor">
            <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-lg shadow-xl p-8 text-white hover:scale-105 transition transform cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <FaHandHoldingHeart className="text-6xl mb-4" />
                <h2 className="text-2xl font-bold mb-4">Become a Donor</h2>
                <p className="text-green-100 mb-6">
                  Register yourself as a blood donor and save lives. It only takes 2 minutes!
                </p>
                <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition">
                  Register Now →
                </button>
              </div>
            </div>
          </Link>

          {/* Request Blood Card */}
          <Link to="/request-blood">
            <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-lg shadow-xl p-8 text-white hover:scale-105 transition transform cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <FaSearch className="text-6xl mb-4" />
                <h2 className="text-2xl font-bold mb-4">Request Blood</h2>
                <p className="text-red-100 mb-6">
                  Need blood urgently? Find matching donors in your city instantly.
                </p>
                <button className="bg-white text-red-700 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition">
                  Find Donors →
                </button>
              </div>
            </div>
          </Link>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-[#17153B] mb-3">
             Quick Tips
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li> You can donate blood every 3 months</li>
            <li>One donation can save up to 3 lives</li>
            <li>Donors get free health checkups</li>
            <li>It's completely safe and painless</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;