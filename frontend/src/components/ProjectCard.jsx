import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProjectCard() {
  const BASE = import.meta.env.VITE_API_BASE_URL;
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE}/api/projects`)
      .then((res) => setProjects(res.data))
      .catch(console.error);
  }, []);

  return (
    <section className="px-8 py-16 bg-blue-50">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-3">Our Projects</h2>
        <p className="text-gray-600 text-sm md:text-base">
          We know what buyers are looking for and suggest projects that will bring clients top dollar for the sale of their homes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((p) => (
          <div key={p._id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={`${BASE}/uploads/${p.image}`}
              alt={p.name}
              className="h-40 w-full object-cover rounded"
            />
            <h3 className="font-semibold mt-2 text-blue-700">{p.name}</h3>
            <p className="text-sm text-gray-600 mb-2">Project Name • Location</p>
            <button className="text-sm text-white bg-orange-500 px-4 py-1 rounded hover:bg-orange-600 transition">
              READ MORE
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectCard;
