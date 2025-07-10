import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ProjectCard from './components/ProjectCard';
import AdminPanel from './pages/AdminPanel';
import ClientCard from './components/ClientCard';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectCard />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        {/* Optional additional pages if you create them */}
        <Route path="/services" element={<Services/>} />
        <Route path="/clients" element={<ClientCard/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
