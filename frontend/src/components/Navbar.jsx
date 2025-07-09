import React from 'react'

function Navbar() {
  return (
<nav className="bg-white px-6 py-4 flex justify-between items-center shadow-sm">
  {/* Logo */}
  <div className="flex items-center gap-2">
    <img src="/logo.svg" alt="Logo" className="w-6 h-6" /> {/* Replace with your actual logo */}
    <span className="text-xl font-semibold text-gray-800">Real <span className="text-blue-600">Trust</span></span>
  </div>

  {/* Menu Links */}
  <ul className="flex items-center gap-6 text-sm font-medium text-gray-700">
    <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">HOME</a></li>
    <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">SERVICES</a></li>
    <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">ABOUT PROJECTS</a></li>
    <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">TESTIMONIALS</a></li>
  </ul>

  {/* Contact Button */}
  <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition duration-200">
    CONTACT
  </button>
</nav>


  )
}

export default Navbar