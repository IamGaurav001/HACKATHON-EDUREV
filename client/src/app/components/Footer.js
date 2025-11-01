"use client";

import React from 'react';
import { FaBookOpen, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer" className="bg-white border-t border-gray-200 pt-16 pb-8 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 border-b border-gray-200 pb-12">

                    <div className="flex flex-col gap-4 max-w-sm">
                        <div className="flex items-center gap-2 text-gray-900 text-3xl font-extrabold">
                            <div className="p-2 bg-gray-100 rounded-lg border border-gray-200">
                                <FaBookOpen className="w-6 h-6" />
                            </div>
                            <span>EduRev</span>
                        </div>
                        <p className="text-gray-600 text-base leading-relaxed font-medium">
                            Empowering smarter, personalized, and joyful learning for the next generation. Join our revolution!
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-16 lg:gap-24">
                        <div>
                            <h5 className="font-bold text-gray-900 uppercase tracking-wider mb-4 text-sm">Product</h5>
                            <nav className="flex flex-col gap-3 text-gray-600">
                                <a href="#benefits" className="hover:text-gray-900 transition-colors text-base font-medium">Benefits</a>
                                <a href="#how-it-works" className="hover:text-gray-900 transition-colors text-base font-medium">How It Works</a>
                                <a href="#" className="hover:text-gray-900 transition-colors text-base font-medium">Pricing</a>
                            </nav>
                        </div>

                        <div>
                            <h5 className="font-bold text-gray-900 uppercase tracking-wider mb-4 text-sm">Company</h5>
                            <nav className="flex flex-col gap-3 text-gray-600">
                                <a href="#" className="hover:text-gray-900 transition-colors text-base font-medium">About Us</a>
                                <a href="#" className="hover:text-gray-900 transition-colors text-base font-medium">Careers</a>
                                <a href="#" className="hover:text-gray-900 transition-colors text-base font-medium">Blog</a>
                            </nav>
                        </div>

                        <div>
                            <h5 className="font-bold text-gray-900 uppercase tracking-wider mb-4 text-sm">Connect</h5>
                            <nav className="flex flex-col gap-3 text-gray-600 mb-6">
                                <a href="mailto:support@edurev.com" className="hover:text-gray-900 transition-colors text-base font-medium">Email Support</a>
                                <a href="tel:+911234567890" className="hover:text-gray-900 transition-colors text-base font-medium">Call Us</a>
                            </nav>

                            <div className="flex gap-4">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Instagram">
                                    <FaInstagram className="w-6 h-6" />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Twitter">
                                    <FaTwitter className="w-6 h-6" />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="LinkedIn">
                                    <FaLinkedinIn className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-4 text-center text-gray-500 text-sm">
                    &copy; {currentYear} EduRev. All rights reserved. | <a href="#" className="hover:text-gray-900 transition-colors font-medium">Privacy Policy</a> | <a href="#" className="hover:text-gray-900 transition-colors font-medium">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}