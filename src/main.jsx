import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Particles from '../ReactBits/Particles/Particles.jsx'
import Page from './component/page.jsx'
import Skil from './component/skills.jsx'
import About from "./component/About"; 
import Projects from './component/project.jsx'
import Contact from './component/contact.jsx'
import Copyright from './component/copyright.jsx'
import { motion } from "framer-motion"
import Dock from '../ReactBits/Dock/Dock.jsx'
import { VscHome, VscArchive, VscAccount, VscSettingsGear, VscBriefcase } from 'react-icons/vsc'

const items = [
  {
    icon: <VscHome size={24} color="#FFDD33" />,
    label: 'Home',
    onClick: () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
  },
  {
    icon: <VscAccount size={24} color="#FFDD33" />,
    label: 'About',
    onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  },
  {
    icon: <VscSettingsGear size={24} color="#FFDD33" />,
    label: 'Skills',
    onClick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
  },
  {
    icon: <VscBriefcase size={24} color="#FFDD33" />,
    label: 'Projects',
    onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  },
  {
    icon: <VscArchive size={24} color="#FFDD33" />,
    label: 'Contact',
    onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-layer">
      {/* Background Particles */}
      <div style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,   // biar tetap di belakang tapi masih bisa di-hover
      }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
    </div>

    <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100vw', zIndex: 9999 }}>
      <Dock 
        items={items}
        panelHeight={90}
        baseItemSize={70}
        magnification={90}
      />
    </div>

    <div className="content-layer">
        {/* Floating Dock */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 9999 }}>
        <Dock 
          items={items}
          panelHeight={90}
          baseItemSize={70}
          magnification={90}
        />
      </div>

      {/* Page Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <Page />
      </motion.div>


      {/* ✅ About Section */}
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px"
        }}
      >
        <About />
      </motion.div>

      <div>
        <Skil />
      </div>

      {/* Projects */}
      <motion.div
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <Projects />
      </motion.div>

      {/* Contact */}
      <motion.div
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <Contact />
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        style={{ width: '100%', margin: 0 }}
      >
        <Copyright />
      </motion.div>
    </div>
  </StrictMode>,
)
