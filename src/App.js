import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home.js';
import HomeTamil from './HomeTamil.js';
import HomeHindi from './HomeHindi.js';
import Login from './Login.js';
import LoginTamil from './LoginTamil.js';
import LoginHindi from './LoginHindi.js';
import Reg from './Reg.js';
import RegTamil from './RegTamil.js';
import RegHindi from './RegHindi.js';
import Dashboard from './Dashboard.js';
import Forgot from './Forgot';
import ForgotTamil from './ForgotTamil.js';
import ForgotHindi from './ForgotHindi.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HomeTamil" element={<HomeTamil />} />
        <Route path="/HomeHindi" element={<HomeHindi />} />
        <Route path="/reg" element={<Reg />}/>
        <Route path="/RegTamil" element={<RegTamil />} />
        <Route path="/RegHindi" element={<RegHindi />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/LoginTamil" element={<LoginTamil />} />
        <Route path="/LoginHindi" element={<LoginHindi />} />
        <Route path="/Forgot" element={<Forgot />} />
        <Route path="/ForgotTamil" element={<ForgotTamil />} />
        <Route path="/ForgotHindi" element={<ForgotHindi />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/reg" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

