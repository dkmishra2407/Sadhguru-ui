import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import MapComponent from '../components/MapComponent';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const lat = 18.6305813;
  const lng = 73.8235828;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_email: formData.email,  // User's email will be used as the sender
      subject: formData.subject,
      message: formData.message,
      to_email: 'hr.swarajengineering@gmail.com', // Receiver's email address
    };

    emailjs
      .send(
        'service_wliity5',  // Replace with your EmailJS Service ID
        'template_h40xz1m',  // Replace with your EmailJS Template ID
        templateParams,
        's-MoYJdbrZG7DJhr1QWgs'  // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send message, please try again.');
        }
      );
  };

  return (
   <>
    <div className="p-8 mx-auto " data-aos="fade-up">
            <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Contact Us</h1>
                <p className="text-lg mb-4">
                Ready to bring your project to life? Get in touch with Swaraj Engineering today. Our team is here to discuss your needs, provide expert advice, and deliver customized iron fabrication solutions that are built to last.
                </p>
        </div>
    <div className="bg-gray-900">
      
      <section className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md bg-gray-900">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
        <form onSubmit={sendEmail} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-500 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Your message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-500 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-500 sm:w-fit hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Send message
          </button>
        </form>
      </section>

      <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white text-center mb-6">
            Contact Details
          </h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                SWARAJ ENGINEERING
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                ADD: PLOT NO S-187, S BLOCK BHOSARI MIDC.
              </p>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                MAIL: <a href="mailto:swarajengineering1@gmail.com" className="text-indigo-600">swarajengineering1@gmail.com</a>
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    VINOD BHANDARI
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    9561001623 (MECH, NDE LEVEL II )
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    TEJSWINI CHAUDHARI
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    8698115956 (M.TECH THERMAL)
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    GSTN
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    27ADXFS8664E1Z7
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <MapComponent lat={lat} lng={lng} />
    </div>
    </>
  );
};

export default ContactUs;
