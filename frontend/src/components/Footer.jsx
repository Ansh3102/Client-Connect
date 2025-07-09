import React from 'react';

function Footer() {
  return (
    <footer className="mt-auto">
      {/* Top Footer: Navigation + Newsletter */}
      <div className="bg-blue-600 text-white py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <ul className="flex flex-wrap gap-6 justify-center text-sm font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Subscribe Us</a></li>
        </ul>

        <form className="flex items-center bg-white rounded overflow-hidden">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="px-4 py-2 text-sm text-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-blue-600 text-sm px-4 py-2 font-semibold hover:bg-blue-100"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 text-white px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">&copy; 2023 RealTrust. All rights reserved.</p>

        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="w-6 h-6" />
          <span className="text-xl font-semibold text-white">
            Real <span className="text-blue-400">Trust</span>
          </span>
        </div>

        <div className="flex gap-4 text-white text-xl">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
