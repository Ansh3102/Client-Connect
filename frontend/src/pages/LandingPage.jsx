import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import ClientCard from '../components/ClientCard'
import Services from '../components/Services'

function LandingPage() {
  return (
    <div>
      <Contact/>
      <Services/>
      <ProjectCard/>
      <ClientCard/>
 
    </div>
  )
}

export default LandingPage