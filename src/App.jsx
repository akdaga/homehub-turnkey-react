import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Packages from './pages/Packages.jsx'
import Process from './pages/Process.jsx'
import Partners from './pages/Partners.jsx'
import Resources from './pages/Resources.jsx'
import FAQ from './pages/FAQ.jsx'
import Portal from './pages/Portal.jsx'
import Commissions from './pages/Commissions.jsx'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/process" element={<Process />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/portal/commissions" element={<Commissions />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}