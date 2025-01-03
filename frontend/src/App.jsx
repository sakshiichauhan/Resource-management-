// import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPages";
import Signup from './pages/Signup';
import  Login from './Pages/login';
function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


      </Routes>
  );
}
  
export default App;
