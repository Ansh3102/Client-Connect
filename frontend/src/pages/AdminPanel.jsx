import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminPanel() {
  const BASE = import.meta.env.VITE_API_BASE_URL;

  const [activeTab, setActiveTab] = useState('projects');
  const [projectData, setProjectData] = useState({ name: '', description: '', image: null });
  const [clientData, setClientData] = useState({ name: '', designation: '', description: '', image: null });
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    if (activeTab === 'contacts') {
      axios.get(`${BASE}/api/contacts`)
        .then(res => setContacts(res.data))
        .catch(console.error);
    }
  }, [activeTab]);

  useEffect(() => {
    if (activeTab === 'subscribers') {
      axios.get(`${BASE}/api/subscribers`)
        .then(res => setSubscribers(res.data))
        .catch(console.error);
    }
  }, [activeTab]);

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', projectData.name);
      formData.append('description', projectData.description);
      formData.append('image', projectData.image);

      await axios.post(`${BASE}/api/projects`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('✅ Project added');
      setProjectData({ name: '', description: '', image: null });
    } catch (err) {
      console.error('❌ Upload failed:', err);
      alert('Error uploading project');
    }
  };

  const handleClientSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', clientData.name);
      formData.append('designation', clientData.designation);
      formData.append('description', clientData.description);
      formData.append('image', clientData.image);

      await axios.post(`${BASE}/api/clients`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('✅ Client added');
      setClientData({ name: '', designation: '', description: '', image: null });
    } catch (err) {
      console.error(err);
      alert('Error adding client');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-800 tracking-wide">Admin Dashboard</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {['projects', 'clients', 'contacts', 'subscribers'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full shadow-md font-semibold capitalize transition-all duration-300 ${
              activeTab === tab ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
        {activeTab === 'projects' && (
          <form onSubmit={handleProjectSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Add New Project</h2>
            <input type="text" placeholder="Project Name" className="w-full border p-3 rounded-lg" value={projectData.name} onChange={(e) => setProjectData({ ...projectData, name: e.target.value })} />
            <textarea placeholder="Project Description" rows="4" className="w-full border p-3 rounded-lg" value={projectData.description} onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}></textarea>
            <input type="file" accept="image/*" className="w-full border p-3 rounded-lg bg-white" onChange={(e) => setProjectData({ ...projectData, image: e.target.files[0] })} />
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Save Project</button>
          </form>
        )}

        {activeTab === 'clients' && (
          <form onSubmit={handleClientSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Add New Client</h2>
            <input type="text" placeholder="Client Name" className="w-full border p-3 rounded-lg" value={clientData.name} onChange={(e) => setClientData({ ...clientData, name: e.target.value })} />
            <input type="text" placeholder="Client Designation" className="w-full border p-3 rounded-lg" value={clientData.designation} onChange={(e) => setClientData({ ...clientData, designation: e.target.value })} />
            <textarea placeholder="Client Description" rows="4" className="w-full border p-3 rounded-lg" value={clientData.description} onChange={(e) => setClientData({ ...clientData, description: e.target.value })}></textarea>
            <input type="file" accept="image/*" className="w-full border p-3 rounded-lg bg-white" onChange={(e) => setClientData({ ...clientData, image: e.target.files[0] })} />
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Save Client</button>
          </form>
        )}

        {activeTab === 'contacts' && (
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Contact Form Submissions</h2>
            <ul className="space-y-4">
              {contacts.map((c, i) => (
                <li key={i} className="bg-gray-100 p-4 rounded-lg shadow flex flex-col">
                  <span className="font-semibold">{c.fullName}</span>
                  <span>{c.email}</span>
                  <span>{c.mobile}</span>
                  <span>{c.city}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'subscribers' && (
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Newsletter Subscribers</h2>
            <ul className="space-y-4">
              {subscribers.map((s, i) => (
                <li key={i} className="bg-gray-100 p-4 rounded-lg shadow">{s.email}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPanel;
