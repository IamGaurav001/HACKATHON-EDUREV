"use client";
import Link from 'next/link';
import React from 'react';
import { FaSignOutAlt, FaCog } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext.js';
import { useRouter } from 'next/navigation'; 

const DashboardNavbar = () => {
    const { user, logout } = useAuth();
    const router = useRouter(); 
    
    const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : 'U';

    const handleLogout = () => {
        logout(); 
        router.push('/login');
    };

    return (
        <nav className="sticky top-0 w-full z-50 h-16 flex justify-center bg-white border-b border-zinc-300">
            <div className="flex items-center justify-between w-full max-w-7xl px-4 lg:px-8 h-full">
                
                <Link 
                    href="/dashboard" 
                    className="cursor-pointer font-bold text-xl text-zinc-900 whitespace-nowrap px-3 py-2"
                >
                    &lt; EduRev /&gt;
                </Link>

                <div className="flex items-center space-x-4">
                    
                    {user && (
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-zinc-700">
                                {user.name}
                            </span>
                            <Link
                                href="/dashboard/profile"
                                className="h-9 w-9 flex items-center justify-center rounded-full bg-zinc-900 text-white font-bold text-sm cursor-pointer"
                                aria-label="User Profile"
                            >
                                {userInitial}
                            </Link>
                        </div>
                    )}

                    <Link
                        href="/dashboard/settings"
                        className="p-2 rounded-full text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer"
                        aria-label="Settings"
                    >
                        <FaCog className="text-xl" />
                    </Link>

                    <button
                        onClick={handleLogout} 
                        className="flex items-center gap-2 rounded-full border border-zinc-300 py-2 px-4 text-sm font-semibold text-zinc-700 hover:bg-zinc-900 hover:text-white cursor-pointer"
                    >
                        <FaSignOutAlt className="text-base" />
                        Logout
                    </button>

                </div>
            </div>
        </nav>
    );
};

export default DashboardNavbar;