import React, { useState } from 'react';

function AdminPanel() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-800 tracking-wide">Admin Dashboard</h1>

      {/* Tabs */}
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

      {/* Content Area */}
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
        {activeTab === 'projects' && (
          <form className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Add New Project</h2>
            <input type="file" className="w-full border border-gray-300 p-3 rounded-lg" />
            <input type="text" placeholder="Project Name" className="w-full border border-gray-300 p-3 rounded-lg" />
            <textarea placeholder="Project Description" rows="4" className="w-full border border-gray-300 p-3 rounded-lg"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Save Project</button>
          </form>
        )}

        {activeTab === 'clients' && (
          <form className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Add New Client</h2>
            <input type="file" className="w-full border border-gray-300 p-3 rounded-lg" />
            <input type="text" placeholder="Client Name" className="w-full border border-gray-300 p-3 rounded-lg" />
            <input type="text" placeholder="Client Designation" className="w-full border border-gray-300 p-3 rounded-lg" />
            <textarea placeholder="Client Description" rows="4" className="w-full border border-gray-300 p-3 rounded-lg"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Save Client</button>
          </form>
        )}

        {activeTab === 'contacts' && (
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Contact Form Submissions</h2>
            <ul className="space-y-4">
              {/* Replace with map from API */}
              <li className="bg-gray-100 p-4 rounded-lg shadow flex flex-col">
                <span className="font-semibold">John Doe</span>
                <span>john@example.com</span>
                <span>1234567890</span>
                <span>New York</span>
              </li>
              <li className="bg-gray-100 p-4 rounded-lg shadow flex flex-col">
                <span className="font-semibold">Jane Smith</span>
                <span>jane@example.com</span>
                <span>9876543210</span>
                <span>Chicago</span>
              </li>
            </ul>
          </div>
        )}

        {activeTab === 'subscribers' && (
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">Newsletter Subscribers</h2>
            <ul className="space-y-4">
              {/* Replace with map from API */}
              <li className="bg-gray-100 p-4 rounded-lg shadow">subscriber1@example.com</li>
              <li className="bg-gray-100 p-4 rounded-lg shadow">subscriber2@example.com</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPanel;