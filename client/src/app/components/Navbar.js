"use client";
import React, { useState } from 'react';
import { FaStar, FaEnvelope, FaLightbulb, FaBars, FaTimes, FaPaperPlane } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="fixed top-0 w-full z-50 py-4 md:py-6 flex justify-center border-b border-gray-200 bg-white shadow-md">
            <div className="flex items-center justify-between w-full max-w-7xl px-4 md:px-12">
                <a href="#" className="cursor-pointer px-3 py-2 md:px-6 md:py-3 rounded-full border border-gray-100 flex items-center shadow-lg">
                    <span className="text-xl mr-2">⚫</span>
                    <span className="font-bold text-base md:text-xl text-gray-800 whitespace-nowrap"> &lt; EduRev /&gt; </span>
                </a>
                <div className="hidden lg:flex px-6 py-3 rounded-full border border-gray-100 items-center shadow-lg space-x-6 xl:space-x-8">
                    <a href="#benefits" className="cursor-pointer text-base text-gray-700 hover:text-blue-600 transition duration-150 flex items-center gap-2 font-semibold">
                        <FaStar className="text-xl text-gray-500" />
                        Benefits
                    </a>
                    <a href="#how-it-works" className="cursor-pointer text-base text-gray-700 hover:text-blue-600 transition duration-150 flex items-center gap-2 font-semibold">
                        <FaLightbulb className="text-xl text-gray-500" />
                        How It Works
                    </a>
                    <a href="#footer" className="cursor-pointer text-base text-gray-700 hover:text-blue-600 transition duration-150 flex items-center gap-2 font-semibold">
                        <FaEnvelope className="text-xl text-gray-500" />
                        Contact Us
                    </a>
                </div>
                <a
                    href="#footer"
                    className="cursor-pointer hidden lg:flex px-6 py-3 rounded-full border border-indigo-700 bg-indigo-700 text-white items-center shadow-lg gap-3 text-base font-bold whitespace-nowrap transition-colors hover:bg-indigo-800 hover:border-indigo-800 focus:outline-none focus:ring focus:ring-indigo-300 disabled:opacity-60"
                >
                    <FaPaperPlane className="text-2xl font-semibold" />
                    Apply Now
                </a>
                <button
                    onClick={toggleMenu}
                    className="cursor-pointer lg:hidden p-3 rounded-full border border-gray-200 shadow-md text-gray-800 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 py-4 px-4">
                    <div className="flex flex-col space-y-4">
                        <a href="#benefits" className="cursor-pointer text-lg text-gray-700 hover:text-blue-600 transition duration-150 flex items-center gap-3 font-semibold p-2 rounded-lg hover:bg-gray-50 text-left">
                            <FaStar className="text-xl text-gray-500" /> Benefits
                        </a>
                        <a href="#how-it-works" className="cursor-pointer text-lg text-gray-700 hover:text-blue-600 transition duration-150 flex items-center gap-3 font-semibold p-2 rounded-lg hover:bg-gray-50 text-left">
                            <FaLightbulb className="text-xl text-gray-500" /> How It Works
                        </a>
                        <a href="#footer" className="cursor-pointer text-lg text-gray-700 hover:text-blue-600 transition duration-150 flex items-center gap-3 font-semibold p-2 rounded-lg hover:bg-gray-50 text-left">
                            <FaEnvelope className="text-xl text-gray-500" /> Contact Us
                        </a>
                        <a
                            href="#footer"
                            className="cursor-pointer flex items-center gap-3 text-lg font-bold p-2 rounded-lg bg-indigo-700 text-white hover:bg-indigo-800 transition"
                        >
                            <FaPaperPlane className="text-xl" /> Apply Now
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
