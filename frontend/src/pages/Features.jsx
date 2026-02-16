// export default Features
const Features = () => {
  const perks = [
    {
      title: "Save Lives",
      description: "One donation can save up to three lives",
      icon: "fa-heart"
    },
    {
      title: "Health Benefits",
      description: "Regular donation helps maintain good health",
      icon: "fa-heartbeat"
    },
    {
      title: "Free Health Check",
      description: "Get free health screening with every donation",
      icon: "fa-stethoscope"
    }
  ]

  return (
    <section className="bg-[#F5EFE6] min-h-screen py-16">
      <div className="container mx-auto px-4">
        
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 text-center">
          Donor Perks
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Benefits of being a blood donor
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {perks.map((perk, index) => (
            <div 
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`fas ${perk.icon} text-white text-2xl`}></i>
              </div>

              <h3 className="text-xl font-bold mb-3">{perk.title}</h3>
              <p className="text-gray-600">{perk.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Features
