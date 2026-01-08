import React, { useEffect } from 'react'
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
  useEffect(() => {
    // ❌ Right Click Disable
    document.addEventListener("contextmenu", (e) => e.preventDefault());

    // ❌ Disable Key Shortcuts (F12, Ctrl+Shift+I/J/C, Ctrl+U)
    const handleKeyDown = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // ❌ Disable Text Selection & Copy
    const handleSelect = (e) => e.preventDefault();
    document.addEventListener("selectstart", handleSelect);
    document.addEventListener("copy", handleSelect);

    // 🧹 Cleanup when component unmounts
    return () => {
      document.removeEventListener("contextmenu", (e) => e.preventDefault());
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("selectstart", handleSelect);
      document.removeEventListener("copy", handleSelect);
    };
  }, []);
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