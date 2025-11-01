"use client";

import DashboardNavbar from '../components/DashboardNavbar';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export default function DashboardLayout({ children }) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

    if (loading || (!loading && !user)) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50">
                <Loader2 className="h-8 w-8 animate-spin text-zinc-700" />
                <p className="mt-4 text-sm font-medium text-zinc-700">
                    Checking authentication...
                </p>
            </div>
        );
    }

    return (
        <div>
            <DashboardNavbar />
            <div>
                {children}
            </div>
        </div>
    );
}