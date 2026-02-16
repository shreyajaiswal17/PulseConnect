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
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailid: '',
    msgContent: ''
  })

  const [showAlert, setShowAlert] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Contact Form Data:', formData)

    setShowAlert(true)

    setFormData({
      name: '',
      emailid: '',
      msgContent: ''
    })

    setTimeout(() => {
      setShowAlert(false)
    }, 3000)
  }

  return (
    <section className="bg-[#F5EFE6] min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 text-center">
            Contact Us
          </h1>

          <p className="text-center text-gray-600 mb-8">
            Get in touch with us for any queries or support
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-1">Address</h3>
                <p className="text-gray-600">New Delhi, India</p>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <p className="text-gray-600">+91 8674392xxx</p>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <p className="text-gray-600">Umang@gmail.com</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              {showAlert && (
                <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  Message sent successfully!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                  required
                />

                <input
                  type="email"
                  name="emailid"
                  placeholder="Your Email"
                  value={formData.emailid}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                  required
                />

                <textarea
                  name="msgContent"
                  placeholder="Your Message"
                  value={formData.msgContent}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

