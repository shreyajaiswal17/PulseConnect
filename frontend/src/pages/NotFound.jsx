const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F6F1] px-6 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      <div className="text-center max-w-xl relative z-10">

        {/* Online Image */}
        <div className="mb-8 flex justify-center">
          <img
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            alt="Not Found"
            className="w-72 md:w-80 opacity-90 rounded-xl"
          />
        </div>

        <h1 className="text-7xl font-bold text-[#C41E3A] mb-2 tracking-tight">
          404
        </h1>

        <h2 className="text-3xl font-semibold text-[#1A202C] mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mb-8 leading-relaxed">
          Oops! The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back to something meaningful.
        </p>

        <a
          href="/"
          className="inline-block px-6 py-3 bg-[#C41E3A] text-white rounded-full font-medium transition-all duration-300 hover:bg-red-700 hover:scale-105"
        >
          Go Back Home
        </a>

      </div>
    </div>
  )
}

export default NotFound