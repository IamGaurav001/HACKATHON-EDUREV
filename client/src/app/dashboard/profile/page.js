"use client";

import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function ProfilePage() {
    const { user, loading } = useAuth();
    const router = useRouter();

    if (loading) {
        return <div className="text-center p-8 text-zinc-600">Loading profile...</div>;
    }

    if (!user) {
        router.push('/login');
        return null;
    }

    const userInitial = user.name.charAt(0).toUpperCase();

    return (
        <div className="max-w-3xl mx-auto py-10">
            <h1 className="text-3xl font-bold text-zinc-900 mb-8">My Profile</h1>

            <div className="flex flex-col items-center bg-white border border-zinc-300 rounded-2xl p-8 shadow-xl">
                <div className="h-24 w-24 flex items-center justify-center rounded-full bg-zinc-900 text-white font-bold text-4xl mb-6">
                    {userInitial}
                </div>

                <div className="w-full space-y-4">
                    <ProfileDetail label="Full Name" value={user.name} />
                    <ProfileDetail label="Registration Number" value={user.reg_no} isUpperCase={true} />
                </div>
            </div>

            <div className="mt-8 text-center">
                <Link
                    href="/dashboard/settings"
                    className="text-sm font-medium text-zinc-700 hover:text-zinc-900 hover:underline"
                >
                    Go to Account Settings
                </Link>
            </div>
        </div>
    );
}

function ProfileDetail({ label, value, isUpperCase = false }) {
    return (
        <div className="flex justify-between items-center border-b border-zinc-200 py-3">
            <span className="text-sm font-medium text-zinc-600">{label}</span>
            <span className={`text-base font-semibold text-zinc-900 ${isUpperCase ? 'uppercase' : ''}`}>
                {value}
            </span>
        </div>
    );
}