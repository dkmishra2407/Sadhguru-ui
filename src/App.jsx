import ContactSection from "./components/Contactus"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Navigation from "./routings/Navigations"


const App = () => {
  return (
    <div>
      <Navbar />
      <Navigation />
      <Footer />
    </div>
  )
}

export default App










// import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';

// const ContactForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     // Log form data to debug
//     const formData = new FormData(form.current);
//     for (const [key, value] of formData.entries()) {
//       console.log(`${key}: ${value}`);
//     }

//     emailjs.sendForm(
//       'service_paokuwi',  // Your Service ID
//       'template_fe3r1gl', // Your Template ID
//       form.current,
//       'bMZHnIEn3qIev-paR' // Your User ID (API Key)
//     )
//     .then((result) => {
//       console.log('Email sent successfully:', result.text);
//       alert('Email sent successfully!');
//     }, (error) => {
//       console.log('Error sending email:', error.text);
//       alert('Failed to send email. Please try again.');
//     });
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
//       <form ref={form} onSubmit={sendEmail} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Name</label>
//           <input 
//             type="text" 
//             name="user_name" 
//             required 
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Email</label>
//           <input 
//             type="email" 
//             name="user_email" 
//             required 
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Message</label>
//           <textarea 
//             name="message" 
//             required 
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-32"
//           />
//         </div>
//         <button 
//           type="submit" 
//           className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Send Email
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
