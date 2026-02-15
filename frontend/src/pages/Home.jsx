const Home = () => {
  return (
    <div>
      {/* Hero Section with Video */}
      <section className="relative h-screen">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/src/assets/img/homevideo1.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
              Start
            </h1>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Saving Lives
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Become a donor or request for blood and help save lives
            </p>
          </div>
        </div>
      </section>

      {/* Content sections will be added here */}
    </div>
  )
}

export default Home
