import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPages";
import Signup from './pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home'; 
import AdminDashboard from './Pages/AdminDashboard';
import EmployeeDashboard from "./Pages/EmployeeDashboard";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} /> {/* Capitalized Home component */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admindash" element={<AdminDashboard />} />
        <Route path="/employeedash" element={<EmployeeDashboard />} /> 
      </Routes>
    </Router>
  );
}
  
export default App;
