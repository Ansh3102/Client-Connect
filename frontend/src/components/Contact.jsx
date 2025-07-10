import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const BASE = import.meta.env.VITE_API_BASE_URL;

  const [contactData, setContactData] = useState({
    fullname: '',
    email: '',
    mobile: '',
    city: '',
  });

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE}/api/contacts`, contactData);
      alert('✅ Contact Added');
      setContactData({ fullname: '', email: '', mobile: '', city: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="flex flex-col md:flex-row min-h-screen">
      {/* Left: Background with heading */}
      <div
        className="md:w-1/2 flex items-center justify-center text-white p-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/bgImg.png')" }}
      >
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Consultation,<br />Design, & Marketing
          </h1>
          <p className="text-lg text-white/90">
            We help you build impactful marketing strategies.
          </p>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8 bg-white">
        <form
          onSubmit={handleContactSubmit}
          className="w-full max-w-md bg-white shadow-xl rounded-lg p-8 space-y-4"
        >
          <h2 className="text-xl font-semibold text-center text-gray-700 mb-2">Get a Free Consultation</h2>
          <input
            className="w-full border p-2 rounded"
            placeholder="Full Name"
            value={contactData.fullname}
            onChange={(e) => setContactData({ ...contactData, fullname: e.target.value })}
            required
          />
          <input
            type="email"
            className="w-full border p-2 rounded"
            placeholder="Email"
            value={contactData.email}
            onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
            required
          />
          <input
            className="w-full border p-2 rounded"
            placeholder="Mobile Number"
            value={contactData.mobile}
            onChange={(e) => setContactData({ ...contactData, mobile: e.target.value })}
            required
          />
          <input
            className="w-full border p-2 rounded"
            placeholder="City"
            value={contactData.city}
            onChange={(e) => setContactData({ ...contactData, city: e.target.value })}
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          >
            Send Quick Quote
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
