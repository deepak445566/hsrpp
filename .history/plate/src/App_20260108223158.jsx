import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import Instruct from './components/Instruct'
import Step from './components/Step'
import HSRPOlderVehicles from './components/HSRPOlderVehicles'
import HSRPFAQ from './components/HSRPFAQ'
import Contact from './pages/Contact'
import AdminLogin from './pages/AdminLogin'


function App() {

  return (
    <Router>
      <div className="App">
        {/* Routes */}
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Services/>
              <Instruct/>
              <Step/>
              <HSRPOlderVehicles/>
              <HSRPFAQ/>
            </>
          } />
          <Route path="/booking" element={<Contact />} />
          <Route path="/admin" element={<AdminLogin />} /> {/* Admin route जोड़ें */}
        </Routes>
      </div>
    </Router>
  )
}

export default App