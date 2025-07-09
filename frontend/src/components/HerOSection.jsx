import React from 'react'

function HerOSection() {
  return (
    <div>
        
        <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gray-100">
  <div className="md:w-1/2 mb-8 md:mb-0">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">
      Consultation, Design, & Marketing
    </h1>
    <p className="text-gray-600">We help you build impactful marketing strategies.</p>
  </div>

  <form className="md:w-1/3 bg-white shadow-lg rounded-lg p-6 space-y-4">
    <input className="w-full border p-2 rounded" placeholder="Full Name" />
    <input className="w-full border p-2 rounded" placeholder="Email" />
    <input className="w-full border p-2 rounded" placeholder="Mobile Number" />
    <input className="w-full border p-2 rounded" placeholder="City" />
    <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
      Send Quick Quote
    </button>
  </form>
</section>

    </div>
  )
}

export default HerOSection