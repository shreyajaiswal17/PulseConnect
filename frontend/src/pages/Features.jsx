const Features = () => {
  const perks = [
    {
      title: "Save Lives",
      description:
        "A single blood donation has the power to save up to three lives. Your contribution directly supports patients in emergencies, surgeries, and critical treatments, making a real and immediate impact on the community.",
      icon: "fa-heart"
    },
    {
      title: "Health Benefits",
      description:
        "Regular blood donation helps maintain healthy iron levels, improves blood circulation, and may reduce the risk of certain health conditions. It’s a simple step that benefits both you and those in need.",
      icon: "fa-heartbeat"
    },
    {
      title: "Free Health Check",
      description:
        "Every donation includes a basic health screening such as blood pressure, hemoglobin levels, and overall fitness checks, giving you valuable insights into your health at no cost.",
      icon: "fa-stethoscope"
    }
  ]

  return (
    <section className="bg-[#F5EFE6] py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1A202C] mb-4">
            Because You Care
          </h1>

          <p className="text-gray-500">
            Donating blood isn’t just an act of kindness — it’s a life-saving superpower. Enjoy exclusive perks as a token of our gratitude for making a difference.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              {/* Icon */}
              <div className="mb-6 flex items-center justify-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 transition-all duration-300 group-hover:border-[#C41E3A]">
                  <i className={`fas ${perk.icon} text-gray-700 group-hover:text-[#C41E3A] transition duration-300`}></i>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#1A202C] text-center mb-3">
                {perk.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm text-center leading-relaxed">
                {perk.description}
              </p>

              {/* Bottom line */}
              <div className="mt-6 h-[2px] w-6 bg-gray-200 mx-auto transition-all duration-300 group-hover:w-12 group-hover:bg-[#C41E3A]"></div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Features