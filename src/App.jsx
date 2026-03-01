import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Companies from './pages/Companies';
import ContactUs from './pages/ContactUs';

import ScrollToTop from './services/scrolltotop'

function App() {
  return (
    <Router>
      <ScrollToTop/>
      {/* This is where you will eventually place your <Navbar /> 
          so it stays visible across all pages.
      */}
      
      <main className="content-container">
        <Routes>
          {/* Dashboard is your Landing Page */}
          <Route path="/" element={<Dashboard />} />
          
          <Route path="/customers" element={<Customers />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/contact" element={<ContactUs />} />
          
          {/* Optional: 404 Not Found Catch-all */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;