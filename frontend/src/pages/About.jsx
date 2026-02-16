// export default About
const About = () => {
  return (
  

    <div className="bg-[#F9F6F1] py-24"> 
    {/* <div className="bg-[#EDE3D2] py-24"> */}
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* this is for the image thingyyy  */}
          <div className="flex justify-center">
            <img
              src="/imageabout.png"
              alt="Blood Donation"
              className="max-w-md w-full"
            />
          </div>

          {/* Text part.....*/}
          <div>

            {/* About Us Label */}
            <p className="text-[#C41E3A] uppercase tracking-[0.2em] text-2xl font-extrabold mb-4 font-sans">
              ABOUT US
            </p>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-[#1A202C] leading-snug mb-6">
              “Our Story: Pioneering Blood Donation for a Healthier Tomorrow”
            </h1>

            {/* Paragraphs */}
            <p className="text-lg text-[#1E3A5F] leading-relaxed mb-6">
              PulseConnect aims to address critical challenges in the blood
              donation process, including donor engagement, resource optimization,
              and timely access to blood supplies.
            </p>

            <p className="text-lg text-[#1E3A5F] leading-relaxed mb-6">
              With blood shortages remaining a serious healthcare concern,
              PulseConnect seeks to create an integrated digital platform that
              connects donors, patients, and healthcare institutions.
            </p>

            <p className="text-lg text-[#1E3A5F] leading-relaxed mb-6">
              By leveraging technology and fostering collaboration between
              stakeholders, PulseConnect strives to build a reliable, efficient,
              and life-saving ecosystem that strengthens public health outcomes.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
