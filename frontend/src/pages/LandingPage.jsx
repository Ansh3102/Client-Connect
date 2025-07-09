import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import ClientCard from '../components/ClientCard'

function LandingPage() {
  return (
    <div>
        <Navbar/>
      <Contact/>
      <ProjectCard/>
      <ClientCard/>
      <Footer/>   
    </div>
  )
}

export default LandingPage