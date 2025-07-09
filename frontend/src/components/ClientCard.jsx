import React from 'react'

function ClientCard() {
  return (
    <div>
        <section className="px-8 py-16 bg-white">
  <h2 className="text-3xl font-bold text-center mb-12">Happy Clients</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {clients.map(client => (
      <div className="bg-blue-50 p-4 rounded-lg shadow-md text-center">
        <img src={client.imageUrl} className="w-16 h-16 rounded-full mx-auto mb-4" />
        <p className="text-sm text-gray-600 italic mb-2">"{client.description}"</p>
        <h4 className="font-bold">{client.name}</h4>
        <span className="text-xs text-gray-500">{client.designation}</span>
      </div>
    ))}
  </div>
</section>

    </div>
  )
}

export default ClientCard