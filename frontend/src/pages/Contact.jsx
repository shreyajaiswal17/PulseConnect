// import { useState } from 'react'

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     emailid: '',
//     msgContent: ''
//   })
//   const [showAlert, setShowAlert] = useState(false)

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // API call will be added later
//     console.log('Contact Form Data:', formData)
    
//     // Show alert
//     setShowAlert(true)
    
//     // Reset form
//     setFormData({
//       name: '',
//       emailid: '',
//       msgContent: ''
//     })

//     // Hide alert after 3 seconds
//     setTimeout(() => {
//       setShowAlert(false)
//     }, 3000)
//   }

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 text-center">
//           Contact Us
//         </h1>
//         <p className="text-center text-gray-600 mb-8">
//           Get in touch with us for any queries or support
//         </p>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Contact Info */}
//           <div className="space-y-6">
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
//                   <i className="fa fa-map-marker-alt text-white"></i>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg mb-1">Address</h3>
//                   <p className="text-gray-600">New Delhi, India</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
//                   <i className="fa fa-phone-alt text-white"></i>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg mb-1">Phone</h3>
//                   <p className="text-gray-600">+91 8674392xxx</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
//                   <i className="fa fa-envelope text-white"></i>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg mb-1">Email</h3>
//                   <p className="text-gray-600">Umang@gmail.com</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-white shadow-lg rounded-lg p-8">
//             {showAlert && (
//               <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
//                 Message sent successfully!
//               </div>
//             )}

//             <form onSubmit={handleSubmit} id="contactForm" className="space-y-6">
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Your Email</label>
//                 <input
//                   type="email"
//                   id="emailid"
//                   name="emailid"
//                   value={formData.emailid}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Your Message</label>
//                 <textarea
//                   id="msgContent"
//                   name="msgContent"
//                   value={formData.msgContent}
//                   onChange={handleChange}
//                   rows="5"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                   required
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full btn-primary text-center justify-center"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact
// import { useState } from 'react'

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     emailid: '',
//     msgContent: ''
//   })

//   const [showAlert, setShowAlert] = useState(false)

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     console.log('Contact Form Data:', formData)

//     setShowAlert(true)

//     setFormData({
//       name: '',
//       emailid: '',
//       msgContent: ''
//     })

//     setTimeout(() => {
//       setShowAlert(false)
//     }, 3000)
//   }

//   return (
//     <section className="bg-[#F5EFE6] min-h-screen py-16">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto">

//           <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 text-center">
//             Contact Us
//           </h1>

//           <p className="text-center text-gray-600 mb-8">
//             Get in touch with us for any queries or support
//           </p>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

//             {/* Contact Info */}
//             <div className="space-y-6">
//               <div className="bg-white shadow-lg rounded-lg p-6">
//                 <h3 className="font-semibold text-lg mb-1">Address</h3>
//                 <p className="text-gray-600">New Delhi, India</p>
//               </div>

//               <div className="bg-white shadow-lg rounded-lg p-6">
//                 <h3 className="font-semibold text-lg mb-1">Phone</h3>
//                 <p className="text-gray-600">+91 8674392xxx</p>
//               </div>

//               <div className="bg-white shadow-lg rounded-lg p-6">
//                 <h3 className="font-semibold text-lg mb-1">Email</h3>
//                 <p className="text-gray-600">Umang@gmail.com</p>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="bg-white shadow-lg rounded-lg p-8">
//               {showAlert && (
//                 <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
//                   Message sent successfully!
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md"
//                   required
//                 />

//                 <input
//                   type="email"
//                   name="emailid"
//                   placeholder="Your Email"
//                   value={formData.emailid}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md"
//                   required
//                 />

//                 <textarea
//                   name="msgContent"
//                   placeholder="Your Message"
//                   value={formData.msgContent}
//                   onChange={handleChange}
//                   rows="5"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md"
//                   required
//                 ></textarea>

//                 <button
//                   type="submit"
//                   className="w-full btn-primary"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Contact

import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailid: '',
    msgContent: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    try {
      const res = await axios.post('http://localhost:5000/api/contact', {
        name: formData.name,
        email: formData.emailid,
        message: formData.msgContent
      });

      setSuccess(res.data?.message || 'Message sent successfully!');
      setFormData({ name: '', emailid: '', msgContent: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen py-16 overflow-hidden">

      {/* 🌄 Background Image */}
      <img
        src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🌈 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-[2px]"></div>

      {/* ✨ Floating Blobs */}
      <div className="absolute w-[300px] h-[300px] bg-primary/30 rounded-full blur-3xl animate-blob top-10 left-10"></div>
      <div className="absolute w-[250px] h-[250px] bg-pink-400/30 rounded-full blur-3xl animate-blob animation-delay-2000 bottom-10 right-10"></div>
      <div className="absolute w-[200px] h-[200px] bg-blue-400/30 rounded-full blur-3xl animate-blob animation-delay-4000 top-1/2 left-1/3"></div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 animate-slideDown drop-shadow-xl">
            Contact Us
          </h1>

          <p className="text-center text-gray-200 mb-10">
            Get in touch with us for any queries or support
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* LEFT */}
            <div className="space-y-6">

              {[
                { title: "Address", value: "New Delhi, India" },
                { title: "Phone", value: "+91 8674392xxx" },
                { title: "Email", value: "info@pulseconnect.com" }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 text-white p-6 rounded-2xl shadow-xl transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-200">{item.value}</p>
                </div>
              ))}

            </div>

            {/* FORM */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl animate-slideUp">

              {success && (
                <div className="mb-4 bg-green-500/20 border border-green-400 text-green-200 px-4 py-3 rounded">
                  {success}
                </div>
              )}

              {error && (
                <div className="mb-4 bg-red-500/20 border border-red-400 text-red-200 px-4 py-3 rounded">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary transition focus:scale-[1.02]"
                  required
                />

                <input
                  type="email"
                  name="emailid"
                  placeholder="Your Email"
                  value={formData.emailid}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary transition focus:scale-[1.02]"
                  required
                />

                <textarea
                  name="msgContent"
                  placeholder="Your Message"
                  value={formData.msgContent}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary transition focus:scale-[1.02]"
                  required
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold transition duration-300 hover:scale-105 hover:shadow-xl active:scale-95 disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Send Message 🚀'}
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;