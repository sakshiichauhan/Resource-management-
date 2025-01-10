import React, { useState } from 'react';
import asset from "../assets/animate.svg";
import {Link} from "react-router-dom"

const LoginPage = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    return (
        <div className="font-mono relative grid grid-cols-1 md:grid-cols-2 min-h-screen bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700">
            {/* Image Section */}
            <div className="relative hidden md:block">
                <img src={asset} alt="Asset" className="w-full h-full object-cover rounded-2xl " />
                {/* Optional overlay for better text contrast */}
                <div className="absolute inset-0 bg-black opacity-10 rounded-2xl"></div>
            </div>

            <div className="flex justify-center items-center py-10">
                {/* Login Form Section */}
                <div className="flex flex-col justify-center items-center md:items-start px-6 md:px-16 py-8 bg-opacity-80 rounded-lg w-full max-w-lg md:max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Login</h1>
                    {/* Email Input */}
                    <div className="mb-4 w-full">
                        <label htmlFor="email" className="block text-lg font-semibold mb-2 text-white">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={input.email}
                            onChange={(e) => setInput({ ...input, email: e.target.value })}
                            className="w-full p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    {/* Password Input */}
                    <div className="mb-6 w-full">
                        <label htmlFor="password" className="block text-lg font-semibold mb-2 text-white">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={input.password}
                            onChange={(e) => setInput({ ...input, password: e.target.value })}
                            className="w-full p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        className="w-full py-3 bg-purple-900 rounded-full text-white text-lg font-semibold shadow-lg hover:text-purple-900 hover:bg-white transition duration-300 "
                    >
                        Login
                    </button>

                    {/* Sign-up Link */}
                    <div className="mt-4 text-center">
                        <p className="text-white">
                            Don't have an account yet?{" "}
                            <Link to="/signup"><span className="text-purple-300 font-semibold cursor-pointer hover:underline">Sign Up</span></Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
