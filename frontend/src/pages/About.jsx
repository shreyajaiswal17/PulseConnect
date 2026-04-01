const About = () => {
  return (
    <div className="relative bg-[#F9F6F1] py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#C41E3A]/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#1E3A5F]/20 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Image Section */}
          <div className="flex justify-center">
            <div className="relative group cursor-pointer">
              
              {/* Glow border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#C41E3A] to-[#1E3A5F] rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

              <img
                src="/imageabout.png"
                alt="Blood Donation"
                className="relative max-w-md w-full rounded-3xl shadow-2xl transition duration-500 group-hover:scale-105 group-hover:-translate-y-2"
              />

              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-md text-sm font-semibold text-[#C41E3A] opacity-0 group-hover:opacity-100 transition duration-500">
                Saving Lives ❤️
              </div>

            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-6">

            {/* Label */}
            <p className="text-[#C41E3A] uppercase tracking-[0.35em] text-sm font-bold hover:tracking-[0.5em] transition-all duration-300">
              ABOUT US
            </p>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#1A202C] leading-tight hover:text-[#C41E3A] transition duration-300">
              “Our Story: Pioneering Blood Donation for a Healthier Tomorrow”
            </h1>

            {/* Accent Line */}
            <div className="w-20 h-1 bg-gradient-to-r from-[#C41E3A] to-[#1E3A5F] rounded-full transition-all duration-500 hover:w-32"></div>

            {/* Paragraphs */}
            <p className="text-lg text-[#1E3A5F] leading-relaxed transition duration-300 hover:text-[#0F172A] hover:translate-x-1">
              PulseConnect aims to address critical challenges in the blood
              donation process, including donor engagement, intelligent matching,
              resource optimization, and timely access to blood supplies. Our
              platform is designed to reduce delays and improve response efficiency
              during emergencies where every second matters.
            </p>

            <p className="text-lg text-[#1E3A5F] leading-relaxed transition duration-300 hover:text-[#0F172A] hover:translate-x-1">
              With blood shortages remaining a serious healthcare concern across
              regions, PulseConnect introduces a unified digital ecosystem that
              seamlessly connects donors, patients, hospitals, and blood banks.
              This ensures transparency, accessibility, and faster communication
              between all stakeholders involved.
            </p>

            <p className="text-lg text-[#1E3A5F] leading-relaxed transition duration-300 hover:text-[#0F172A] hover:translate-x-1">
              By leveraging modern technology, real-time data, and community-driven
              participation, PulseConnect strives to build a reliable and scalable
              life-saving network. Our mission is not just to facilitate donations,
              but to strengthen public health systems and create a culture of
              proactive contribution.
            </p>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;