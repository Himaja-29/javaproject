import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Admin from './Admin'; // Make sure the file name is Admin.js
import Investor from './Investor'; // Make sure the file name is Investor.js
import FinancialAdvisor from './FinancialAdvisor'; // Make sure the file name is FinancialAdvisor.js
import DataAnalyst from './DataAnalyst'; // Make sure the file name is DataAnalyst.js

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/investor">Investor</Link></li>
            <li><Link to="/financial-advisor">Financial Advisor</Link></li>
            <li><Link to="/data-analyst">Data Analyst</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/financial-advisor" element={<FinancialAdvisor />} />
          <Route path="/data-analyst" element={<DataAnalyst />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
