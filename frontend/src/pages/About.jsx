const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 text-center">
          About रक्तदातृ
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to रक्तदातृ - Your trusted platform for blood donation and requests.
            We are dedicated to connecting blood donors with those in need, ensuring that 
            life-saving blood is available when and where it's needed most.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our mission is to create a seamless bridge between donors and recipients,
            making the process of donating and requesting blood as simple and efficient as possible.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
