import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ClientCard() {
  const BASE = import.meta.env.VITE_API_BASE_URL;

  const [clientData, setClientData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE}/api/contacts`)
      .then((res) => setClientData(res.data))
      .catch(console.error);
  }, []);

  return (
    <section className="px-8 py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Happy Clients</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {clientData.map((client) => (
          <div key={client._id} className="bg-blue-50 p-4 rounded-lg shadow-md text-center">
            <img
              src={`${BASE}/uploads/${client.image}`}
              alt={client.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-sm text-gray-600 italic mb-2">"{client.description}"</p>
            <h4 className="font-bold">{client.name}</h4>
            <span className="text-xs text-gray-500">{client.designation}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientCard;
