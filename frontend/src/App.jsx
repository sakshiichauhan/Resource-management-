import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../src/Pages/LandingPages";
import Signup from "../src/Pages/Signup";
import Login from "../src/Pages/Login";
import AdminDashboard from "../src/Pages/AdminDashboard";
import Navbar from "./components/Navbar";
import useAuthRedirect from "../src/Hooks/useAuthRedirect";
import Sidebar from "./components/Sidebar";
import AssetRequestForm from "./Pages/RequestAsset";
import EmployeeDashboard from "./Pages/EmployeeDashboard";
import ReplacementForm from "./Pages/ReplacementForm";
import MaintenanceRequestForm from "./Pages/ManagementForm";
function App() {
  return (
    <Router>
      <AuthRedirectWrapper />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admindash" element={<AdminDashboard />} />
        <Route path="/employeedash" element={<EmployeeDashboard />} />  
        <Route path="/request-asset" element={<AssetRequestForm />} />   
        <Route path="/maintain-asset" element={<MaintenanceRequestForm />} />   
        <Route path="/replace-asset" element={<ReplacementForm />} />   
      </Routes>
    </Router>
  );
}

const AuthRedirectWrapper = () => {
  useAuthRedirect();
  return null;
};

export default App;
