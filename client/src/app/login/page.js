"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { SERVER_URL } from "@/utils/api";

export default function LoginPage() {
    const router = useRouter();
    const { login } = useAuth();

    const [form, setForm] = useState({ regno: "", password: "" });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const onChange = (e) => {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
        setErrors((e0) => ({ ...e0, [e.target.name]: undefined }));
    };

    const validate = () => {
        const errs = {};
        if (!form.regno.trim()) errs.regno = "Registration number is required";
        if (!form.password) errs.password = "Password is required";
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        if (!validate()) return;

        try {
            setSubmitting(true);

            // Assuming SERVER_URL is defined elsewhere, if not, use "http://localhost:5000"
            const apiEndpoint = SERVER_URL ? SERVER_URL + "/api/userlogin" : "http://localhost:5000/api/userlogin";

            const res = await fetch(apiEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ reg_no: form.regno.toUpperCase(), password: form.password }),
            });
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.message || "Invalid credentials. Please check registration number and password.");
            }

            login(data.user);

            setMessage("Signed in successfully. Redirecting...");
            router.push('/dashboard');

        } catch (err) {
            setMessage(err.message || "Login failed. Try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-white text-zinc-900 flex items-center justify-center p-6">
            <div className="relative w-full max-w-md">
                <div className="pointer-events-none absolute -top-20 -left-24 h-40 w-40 rounded-full bg-zinc-100/50 filter blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -right-20 h-44 w-44 rounded-full bg-zinc-100/50 filter blur-3xl" />

                <div className="relative rounded-2xl border border-zinc-300 bg-white p-8 shadow-2xl">
                    <div className="mb-6 text-center">
                        <h1 className="text-2xl font-bold tracking-tight">Student Sign In</h1>
                        <p className="mt-1 text-sm text-zinc-600">Enter your credentials to access your portal.</p>
                    </div>

                    <form onSubmit={onSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="regno" className="block text-sm font-medium mb-1 text-zinc-700">Registration Number</label>
                            <input
                                id="regno"
                                name="regno"
                                type="text"
                                value={form.regno}
                                onChange={onChange}
                                className={`w-full rounded-lg border bg-white px-3 py-2.5 outline-none transition
                                         border-zinc-300 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 uppercase placeholder:text-zinc-400`}
                                autoComplete="username"
                                placeholder="e.g., AB12345"
                            />
                            {errors.regno && <p className="mt-1 text-xs font-semibold text-black">{errors.regno}</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium mb-1 text-zinc-700">Password</label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={form.password}
                                    onChange={onChange}
                                    className={`w-full rounded-lg border bg-white pr-10 px-3 py-2.5 outline-none transition
                                             border-zinc-300 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 placeholder:text-zinc-400`}
                                    autoComplete="current-password"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((s) => !s)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    className="absolute inset-y-0 right-0 px-3 flex items-center text-zinc-500 hover:text-zinc-900 transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                            {errors.password && <p className="mt-1 text-xs font-semibold text-black">{errors.password}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full mt-4 cursor-pointer rounded-lg bg-zinc-900 text-white py-2.5 font-bold tracking-wide hover:bg-zinc-700 disabled:opacity-60 disabled:cursor-not-allowed transition duration-150"
                        >
                            {submitting ? "Signing in..." : "Sign In"}
                        </button>

                        {message && (
                            <div className={`mt-3 text-center text-sm font-medium ${message.includes('success') ? 'text-zinc-700' : 'text-black'}`}>{message}</div>
                        )}
                    </form>

                    <div className="mt-6 text-center text-sm text-zinc-600">
                        New here? <Link href="/registeruser" className="text-zinc-900 font-medium hover:underline">Create an account</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}