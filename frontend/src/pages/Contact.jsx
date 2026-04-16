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
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaTint } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });

      setSuccess(res.data?.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gov-grey min-h-screen">
      <div className="gov-page py-12 md:py-16">
        <div className="border-2 border-gov-border bg-white p-8 md:p-12 lg:p-14 rounded-lg">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 pb-6 border-b-2 border-gov-red">
            <FaTint className="text-gov-red w-11 h-11 shrink-0" aria-hidden />
            <div className="text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-gov-red uppercase tracking-wide">
                Contact Us
              </h1>
              <p className="text-sm md:text-base text-neutral-700 mt-2 uppercase tracking-wide">
                Get in touch for queries or support
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            <div className="space-y-6">
              <div className="border-2 border-gov-border bg-gov-panel p-6 rounded-md">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm border-2 border-gov-border bg-white text-gov-red shrink-0">
                    <FaMapMarkerAlt aria-hidden />
                  </span>
                  <div className="text-left">
                    <h2 className="font-bold text-neutral-900 uppercase tracking-wide text-sm">
                      Address
                    </h2>
                    <p className="text-neutral-700 mt-2">New Delhi, India</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-gov-border bg-gov-panel p-6 rounded-md">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm border-2 border-gov-border bg-white text-gov-red shrink-0">
                    <FaPhoneAlt aria-hidden />
                  </span>
                  <div className="text-left">
                    <h2 className="font-bold text-neutral-900 uppercase tracking-wide text-sm">
                      Phone
                    </h2>
                    <p className="text-neutral-700 mt-2">+91 8674392xxx</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-gov-border bg-gov-panel p-6 rounded-md">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm border-2 border-gov-border bg-white text-gov-red shrink-0">
                    <FaEnvelope aria-hidden />
                  </span>
                  <div className="text-left">
                    <h2 className="font-bold text-neutral-900 uppercase tracking-wide text-sm">
                      Email
                    </h2>
                    <p className="text-neutral-700 mt-2">info@pulseconnect.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-gov-yellow/80 border-l-4 border-gov-red pl-4 py-3 rounded-sm">
                <p className="text-sm text-neutral-900 leading-relaxed">
                  For urgent requirements, please contact your nearest hospital or licensed blood bank.
                </p>
              </div>
            </div>

            <div className="border-2 border-gov-border bg-white p-6 md:p-8 rounded-md">
              {success && (
                <div className="mb-4 border-2 border-emerald-600 bg-emerald-50 text-emerald-900 px-4 py-3 rounded-sm">
                  {success}
                </div>
              )}

              {error && (
                <div className="mb-4 border-2 border-red-700 bg-red-50 text-red-900 px-4 py-3 rounded-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-neutral-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gov-border rounded-sm focus:outline-none focus:border-gov-red bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-neutral-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gov-border rounded-sm focus:outline-none focus:border-gov-red bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-neutral-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gov-border rounded-sm focus:outline-none focus:border-gov-red bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-neutral-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gov-border rounded-sm focus:outline-none focus:border-gov-red bg-white resize-y"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gov-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending…' : 'Send Message'}
                </button>

                <p className="text-xs text-neutral-500 leading-relaxed">
                  Submissions are for support and general queries. Do not share sensitive medical information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;