import type { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import Hero from '@components/sections/Hero'
import Services from '@components/sections/Services'
import Contact from '@components/sections/Contact'
import Gallery from '@components/sections/Gallery'
import Testimonials from '@components/sections/Testimonials'

interface Props {}

const App: FC<Props> = () => {
  return (
    <Router>
      <div className="min-h-screen bg-mama-black">
        <Header />
        
        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <>
              <Hero />
              
              {/* Other Sections */}
              <section id="services">
                <Services />
              </section>

              <section id="gallery">
                <Gallery />
              </section>

              <section id="testimonials">
                <Testimonials />
              </section>
              
              <section id="contact">
                <Contact />
              </section>
            </>
          } />

          {/* Individual Section Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
