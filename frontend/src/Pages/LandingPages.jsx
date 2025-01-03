import React, { useState } from "react";
import assets from "../assets/assetpic.png"; // Asset image path
import { toast } from "sonner"; // Import toast from sonner

const LandingPage = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleGetStarted = () => {
    toast.success("Redirecting to Dashboard...");
  };

  const closePopover = () => {
    setIsPopoverOpen(false);  // Close the popover
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-400 to-purple-600 text-gray-900 flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 py-12 relative">
      {/* Header Section */}
      <div className="text-center space-y-6 animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Welcome to the Asset Management System
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-gray-200">
          Manage your assets, employees, and operations effortlessly. Streamline workflows, increase productivity, and stay ahead with ease.
        </p>

        {/* Button Section */}
        <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
          <a
            href="/dashboard"
            onClick={(e) => { e.preventDefault(); handleGetStarted(); }}
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Get Started"
          >
            Get Started
          </a>
          <a
            href="/signup"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-orange-400"
            aria-label="Sign Up"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full mt-12 sm:mt-16 max-w-md sm:max-w-lg md:max-w-xl">
        <img
          src={assets}  // Use the imported image here
          alt="Asset Management System illustration"
          className="w-full h-auto rounded-3xl shadow-lg transition-transform transform hover:scale-105"
        />
      </div>

      {/* Popover */}
      {isPopoverOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-60">
          <div className="bg-white text-blue-700 p-8 rounded-xl max-w-md w-full shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800">Asset Management System</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our system helps you efficiently manage your company's assets, employees, and operations. Everything you need in one place for easy access and smooth operations.
            </p>
            <div className="mt-6 text-right">
              <button
                onClick={closePopover}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
