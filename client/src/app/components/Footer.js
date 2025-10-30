"use client";

import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { BookOpen } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-indigo-100 pt-16 pb-8 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 border-b border-gray-100 pb-12">

                    <div className="flex flex-col gap-4 max-w-sm">
                        <div className="flex items-center gap-2 text-indigo-700 text-3xl font-extrabold">
                            <div className="p-2 bg-indigo-100 rounded-lg">
                                <BookOpen size={24} className="text-indigo-600" />
                            </div>
                            <span>EduRev</span>
                        </div>
                        <p className="text-gray-500 text-base leading-relaxed">
                            Empowering smarter, personalized, and joyful learning for the next generation. Join our revolution!
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-16 lg:gap-24">
                        <div>
                            <h5 className="font-bold text-gray-800 uppercase tracking-wider mb-4 text-sm">Product</h5>
                            <nav className="flex flex-col gap-3 text-gray-600">
                                <a href="#benefits" className="hover:text-indigo-600 transition-colors text-base">Benefits</a>
                                <a href="#how-it-works" className="hover:text-indigo-600 transition-colors text-base">How It Works</a>
                                <a href="#" className="hover:text-indigo-600 transition-colors text-base">Pricing</a>
                            </nav>
                        </div>

                        <div>
                            <h5 className="font-bold text-gray-800 uppercase tracking-wider mb-4 text-sm">Company</h5>
                            <nav className="flex flex-col gap-3 text-gray-600">
                                <a href="#" className="hover:text-indigo-600 transition-colors text-base">About Us</a>
                                <a href="#" className="hover:text-indigo-600 transition-colors text-base">Careers</a>
                                <a href="#" className="hover:text-indigo-600 transition-colors text-base">Blog</a>
                            </nav>
                        </div>

                        <div>
                            <h5 className="font-bold text-gray-800 uppercase tracking-wider mb-4 text-sm">Connect</h5>
                            <nav className="flex flex-col gap-3 text-gray-600 mb-6">
                                <a href="mailto:support@edurev.com" className="hover:text-indigo-600 transition-colors text-base">Email Support</a>
                                <a href="tel:+911234567890" className="hover:text-indigo-600 transition-colors text-base">Call Us</a>
                            </nav>

                            <div className="flex gap-4">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-colors" aria-label="Instagram">
                                    <FaInstagram size={24} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-colors" aria-label="Twitter">
                                    <FaTwitter size={24} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-colors" aria-label="LinkedIn">
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-4 text-center text-gray-400 text-sm">
                    &copy; {currentYear} EduRev. All rights reserved. | <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}