// import React, { useState } from 'react';

// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         subject: '',
//         message: '',
//     });
//     const [errors, setErrors] = useState({});

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newErrors = {};

//         // Validation
//         if (!formData.firstName) newErrors.firstName = 'First Name is required';
//         if (!formData.lastName) newErrors.lastName = 'Last Name is required';
//         if (!formData.email) newErrors.email = 'Email is required';
//         if (!formData.subject) newErrors.subject = 'Subject is required';
//         if (!formData.message) newErrors.message = 'Message is required';

//         setErrors(newErrors);

//         // If there are no errors, you can proceed with the form submission logic here
//         if (Object.keys(newErrors).length === 0) {
//             // Handle successful submission (e.g., send data to API)
//             console.log('Form submitted successfully:', formData);
//             // Optionally reset form
//             setFormData({
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 subject: '',
//                 message: '',
//             });
//         }
//     };

//     return (
//         <div className="space-y-5 mx-5 sm:mx-10 md:mx-14">
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     required
//                     type="text" 
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     placeholder="First Name" 
//                     className={`border px-4 w-full max-w-[500px] outline-none py-3 rounded-xl ${errors.firstName ? 'border-red-500' : 'border-gray-400'}`}
//                 />
//                 {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}

//                 <input 
//                     type="text" 
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     placeholder="Last Name" 
//                     className={`border px-4 w-full max-w-[500px] outline-none py-3 rounded-xl ${errors.lastName ? 'border-red-500' : 'border-gray-400'}`}
//                 />
//                 {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}

//                 <input 
//                     type="email" 
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Email" 
//                     className={`border px-4 w-full max-w-[500px] outline-none py-3 rounded-xl ${errors.email ? 'border-red-500' : 'border-gray-400'}`}
//                 />
//                 {errors.email && <p className="text-red-500">{errors.email}</p>}

//                 <input 
//                     type="text" 
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     placeholder="Subject" 
//                     className={`border px-4 w-full max-w-[500px] outline-none py-3 rounded-xl ${errors.subject ? 'border-red-500' : 'border-gray-400'}`}
//                 />
//                 {errors.subject && <p className="text-red-500">{errors.subject}</p>}

//                 <textarea 
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Message" 
//                     className={`border px-4 py-2 w-full max-w-[500px] outline-none rounded-xl ${errors.message ? 'border-red-500' : 'border-gray-400'}`} 
//                     rows="4"
//                 ></textarea>
//                 {errors.message && <p className="text-red-500">{errors.message}</p>}

//                 <button 
//                     type="submit"
//                     className="border px-4 py-2 rounded-md w-full max-w-[500px] bg-blue-400 hover:bg-blue-500"
//                 >
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default ContactForm;



import React from 'react';

function Example() {
  return (
    <div className="flex items-center justify-center min-h-screen  p-8">
      <div className="flex flex-col md:flex-row items-start bg-white  p-6  mx-20">
        
        {/* Left Content */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-5xl text-left  font-bold text-blue-600 mb-4">
                Smart Software Solutions for a 
                Digital Future</h1>
          <p className="text-gray-600 leading-relaxed">
            At Vcode Wonder we specialize in crafting custom software that drives business growth and innovation.
            Our team utilizes the latest technologies to deliver scalable, secure, and future-ready solutions.
            Partner with us to unlock the full potential of digital transformation and stay ahead of the competition.
          </p>
        </div>

        {/* Right Placeholder Box */}
        <div className="md:w-1/2 flex items-center mx-44 justify-center">
          <div className="w-full ">
            <img                     
                src="https://invedus.com/images/services/multimedia-and-animation.png"
 alt="" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Example;
