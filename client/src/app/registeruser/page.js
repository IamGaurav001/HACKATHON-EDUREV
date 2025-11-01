"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from 'next/navigation';
import { SERVER_URL } from "@/utils/api";

export default function RegisterUserPage() {
    const router = useRouter();
    const [form, setForm] = useState({ name: "", regno: "", password: "", secQuestion: "", secAnswer: "" });
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
        if (!form.name.trim()) errs.name = "Full name is required";
        if (!form.regno.trim()) errs.regno = "Registration number is required";
        else if (!/^[A-Za-z0-9-_.]{3,30}$/.test(form.regno)) errs.regno = "Use 3-30 letters/numbers (- _ . allowed)";
        if (!form.password) errs.password = "Password is required";
        else if (form.password.length < 6) errs.password = "Minimum 6 characters";
        if (!form.secQuestion) errs.secQuestion = "Select a security question";
        if (!form.secAnswer?.trim()) errs.secAnswer = "Answer is required";
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        if (!validate()) return;

        try {
            setSubmitting(true);

            const res = await fetch(SERVER_URL + "/api/userregister", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, reg_no: form.regno.toUpperCase() }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.message || "Registration failed. Try changing Registration number.");
            }

            setMessage("Account created successfully. Redirecting to login...");
            setForm({ name: "", regno: "", password: "", secQuestion: "", secAnswer: "" });
            await new Promise((r) => setTimeout(r, 1500));
            router.push('/login');

        } catch (err) {
            setMessage(err.message || "Registration failed. Try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-white text-zinc-900 flex items-center justify-center p-6">
            <div className="relative w-full max-w-md">
                <div className="pointer-events-none absolute -top-20 -left-24 h-40 w-40 rounded-full bg-zinc-100/50 filter blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -right-20 h-44 w-44 rounded-full bg-zinc-100/50 filter blur-3xl" />

                <div className="relative rounded-2xl border border-zinc-300 bg-white p-8 shadow-xl">
                    <div className="mb-6 text-center">
                        <h1 className="text-2xl font-bold tracking-tight">Student Register Portal</h1>
                        <p className="mt-1 text-sm text-zinc-600">Create your account to manage courses and RPL.</p>
                    </div>

                    <form onSubmit={onSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1 text-zinc-700">Full Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={onChange}
                                className={`w-full rounded-lg border bg-white px-3 py-2.5 outline-none transition
                                    border-zinc-300 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900`}
                                autoComplete="name"
                            />
                            {errors.name && <p className="mt-1 text-xs font-semibold text-black">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="regno" className="block text-sm font-medium mb-1 text-zinc-700">Registration Number</label>
                            <input
                                id="regno"
                                name="regno"
                                type="text"
                                value={form.regno}
                                onChange={onChange}
                                className={`w-full rounded-lg border bg-white px-3 py-2.5 outline-none transition
                                    border-zinc-300 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 uppercase`}
                                autoComplete="off"
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
                                    placeholder="Minimum 6 characters"
                                    className={`w-full rounded-lg border bg-white pr-10 px-3 py-2.5 outline-none transition
                                    border-zinc-300 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900`}
                                    autoComplete="new-password"
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

                        <div>
                            <label htmlFor="secQuestion" className="block text-sm font-medium mb-1 text-zinc-700">Security Question</label>
                            <select
                                id="secQuestion"
                                name="secQuestion"
                                value={form.secQuestion}
                                onChange={onChange}
                                className={`w-full rounded-lg border bg-white px-3 py-2.5 outline-none transition
                                    border-zinc-300 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900`}
                            >
                                <option value="">Select a question</option>
                                <option value="first_pet">What was your first pet's name?</option>
                                <option value="fav_book">What is your favorite book?</option>
                                <option value="fav_teacher">Who is your favorite teacher?</option>
                            </select>
                            {errors.secQuestion && <p className="mt-1 text-xs font-semibold text-black">{errors.secQuestion}</p>}
                        </div>

                        <div>
                            <label htmlFor="secAnswer" className="block text-sm font-medium mb-1 text-zinc-700">Your Answer</label>
                            <input
                                id="secAnswer"
                                name="secAnswer"
                                type="text"
                                value={form.secAnswer}
                                onChange={onChange}
                                placeholder="Type your answer"
                                className={`w-full rounded-lg border bg-white px-3 py-2.5 outline-none transition
                                    border-zinc-300 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900`}
                            />
                            {errors.secAnswer && <p className="mt-1 text-xs font-semibold text-black">{errors.secAnswer}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full mt-4 rounded-lg bg-zinc-900 text-white py-2.5 font-bold tracking-wide hover:bg-zinc-700 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed transition duration-150"
                        >
                            {submitting ? "Creating account..." : "Create Account"}
                        </button>

                        {message && (
                            <div className={`mt-3 text-center text-sm font-medium ${message.includes('success') ? 'text-zinc-700' : 'text-black'}`}>{message}</div>
                        )}
                    </form>

                    <div className="mt-6 text-center cursor-pointer text-sm text-zinc-600">
                        Already have an account? <Link href="/login" className="text-zinc-900 font-medium hover:underline">Sign in</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}