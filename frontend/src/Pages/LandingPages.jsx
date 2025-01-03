import React from "react";

const LandingPage = () => {
    return (
        <>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-4xl font-bold text-blue-600">Welcome to Asset Management System</h1>
            <p className="mt-4 text-lg text-gray-700">
                Manage your assets, employees, and operations with ease.
            </p>
            <div className="mt-8 flex space-x-4">
                <a
                    href="/dashboard"
                    className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                >
                    Get Started
                </a>
            </div>
        </div>      
        </>
    );
};

export default LandingPage;


