import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const linkStyle = `cursor-pointer hover:text-blue-600 transition-colors duration-200`;

  return (
    <nav className="bg-white px-6 py-4 flex justify-between items-center shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
        <img src="/logo.png" alt="Logo" className="w-10 h-6" />
        <span className="text-xl font-semibold text-gray-800">
          Real <span className="text-blue-600">Trust</span>
        </span>
      </div>

      {/* Menu Links */}
      <ul className="flex items-center gap-6 text-sm font-medium text-gray-700">
        <li onClick={() => navigate('/')} className={linkStyle}>HOME</li>
        <li onClick={() => navigate('/services')} className={linkStyle}>SERVICES</li>
        <li onClick={() => navigate('/projects')} className={linkStyle}>ABOUT PROJECTS</li>
        <li onClick={() => navigate('/clients')} className={linkStyle}>TESTIMONIALS</li>
        <li onClick={() => navigate('/admin-panel')} className={linkStyle}>Admin Panel</li>
      </ul>

      {/* Contact Button */}
      <button
        onClick={() => navigate('/contact')}
        className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition duration-200"
      >
        CONTACT
      </button>
    </nav>
  );
}

export default Navbar;
