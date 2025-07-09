import React from 'react'

function ProjectCard() {
  return (
    <div>
        <section className="px-8 py-16 bg-blue-50">
  <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {projects.map(p => (
      <div className="bg-white shadow-md rounded-lg p-4">
        <img src={p.imageUrl} className="h-40 w-full object-cover rounded" />
        <h3 className="font-semibold mt-2">{p.name}</h3>
        <p className="text-sm text-gray-600">{p.description}</p>
        <button className="mt-4 text-sm text-orange-600 border border-orange-600 px-3 py-1 rounded hover:bg-orange-100">
          Read More
        </button>
      </div>
    ))}
  </div>
</section>

    </div>
  )
}

export default ProjectCard