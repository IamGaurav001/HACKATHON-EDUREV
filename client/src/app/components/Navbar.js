"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaStar, FaEnvelope, FaLightbulb, FaBars, FaTimes, FaPaperPlane } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="fixed top-0 w-full z-50 h-16 md:h-20 flex justify-center bg-white border-b border-gray-200 shadow-sm">
            <div className="flex items-center justify-between w-full max-w-7xl px-4 lg:px-8 h-full">
                <a href="#" className="cursor-pointer px-3 py-2 md:px-6 md:py-3 rounded-full border border-gray-100 flex items-center shadow-lg">
                    <span className="font-bold text-base md:text-xl text-gray-800 whitespace-nowrap"> &lt; EduRev /&gt; </span>
                </a>

                <div className="hidden lg:flex px-6 py-3 rounded-full border border-gray-100 items-center shadow-lg space-x-6 xl:space-x-8">
                    <a href="#benefits" className="cursor-pointer text-base text-gray-700 hover:text-black transition duration-150 flex items-center gap-2 font-semibold">
                        <FaStar className="text-xl text-gray-500" />
                        Benefits
                    </a>
                    <a href="#how-it-works" className="cursor-pointer text-base text-gray-700 hover:text-black transition duration-150 flex items-center gap-2 font-semibold">
                        <FaLightbulb className="text-xl text-gray-500" />
                        How It Works
                    </a>
                    <a href="#footer" className="cursor-pointer text-base text-gray-700 hover:text-black transition duration-150 flex items-center gap-2 font-semibold">
                        <FaEnvelope className="text-xl text-gray-500" />
                        Contact Us
                    </a>
                </div>

                <Link
                    href="/login"
                    className="hidden lg:flex rounded-full border border-gray-100 py-3 px-6 shadow-lg cursor-pointer text-base font-semibold text-gray-700 hover:text-black transition duration-150 items-center gap-2"
                >
                    <FaPaperPlane className="text-xl" />
                    Apply Now
                </Link>

                <button
                    onClick={toggleMenu}
                    className="cursor-pointer lg:hidden p-3 rounded-full text-gray-800 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 py-4 px-4">
                    <div className="flex flex-col space-y-4">
                        <a onClick={toggleMenu} href="#benefits" className="cursor-pointer text-lg text-gray-700 hover:text-black transition duration-150 flex items-center gap-3 font-semibold p-2 rounded-lg hover:bg-gray-50 text-left">
                            <FaStar className="text-xl text-gray-500" /> Benefits
                        </a>
                        <a onClick={toggleMenu} href="#how-it-works" className="cursor-pointer text-lg text-gray-700 hover:text-black transition duration-150 flex items-center gap-3 font-semibold p-2 rounded-lg hover:bg-gray-50 text-left">
                            <FaLightbulb className="text-xl text-gray-500" /> How It Works
                        </a>
                        <a onClick={toggleMenu} href="#footer" className="cursor-pointer text-lg text-gray-700 hover:text-black transition duration-150 flex items-center gap-3 font-semibold p-2 rounded-lg hover:bg-gray-50 text-left">
                            <FaEnvelope className="text-xl text-gray-500" /> Contact Us
                        </a>
                        <Link
                            onClick={toggleMenu}
                            to="/login"
                            className="cursor-pointer flex items-center gap-3 text-lg font-bold p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            <FaPaperPlane className="text-xl" /> Apply Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

