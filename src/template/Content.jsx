import React from 'react'
import ProjectSection from "./ProjectSection"
import AboutSection from "./AboutSection"
import ContactSection from "./ContactSection"

function content() {
  return (
    <>
        {/* Page content */}
        <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
          <ProjectSection />
          <AboutSection />
          <ContactSection />
        </div>
    </>
  )
}

export default content