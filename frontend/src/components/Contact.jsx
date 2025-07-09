import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [contactData, setContactData] = useState({
    fullname: '',
    email: '',
    mobile: '',
    city: '',
  });

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contacts', contactData);
      alert('✅ Contact Added');
      setContactData({ fullname: '', email: '', mobile: '', city: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gray-100">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Consultation, Design, & Marketing
        </h1>
        <p className="text-gray-600">We help you build impactful marketing strategies.</p>
      </div>

      <form
        onSubmit={handleContactSubmit}
        className="md:w-1/3 bg-white shadow-lg rounded-lg p-6 space-y-4"
      >
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
        <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
          Send Quick Quote
        </button>
      </form>
    </section>
  );
}

export default Contact;
