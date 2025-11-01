"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
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
            await new Promise((r) => setTimeout(r, 700));
            setMessage("Signed in successfully.");
            // TODO: redirect to dashboard or desired page, e.g., router.push("/dashboard")
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

                <div className="relative rounded-2xl border border-zinc-300 bg-white p-6 shadow-xl">
                    <div className="mb-5 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Student Sign In
                        </h1>
                        <p className="mt-1 text-sm text-zinc-500">
                            Use your registration number and password.
                        </p>
                    </div>

                    <form onSubmit={onSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="regno"
                                className="block text-sm font-medium mb-1"
                            >
                                Registration Number
                            </label>
                            <input
                                id="regno"
                                name="regno"
                                type="text"
                                value={form.regno}
                                onChange={onChange}
                                className="w-full rounded-lg border bg-white px-3 py-2 uppercase border-zinc-200/70 focus:border-[#4F39F9] focus:ring-2 focus:ring-[rgba(79,57,249,0.25)] outline-none"
                            />
                            {errors.regno && (
                                <p className="mt-1 text-xs text-rose-600">{errors.regno}</p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium mb-1"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={form.password}
                                    onChange={onChange}
                                    className="w-full rounded-lg border bg-white px-3 py-2 pr-10 border-zinc-200/70 focus:border-[#4F39F9] focus:ring-2 focus:ring-[rgba(79,57,249,0.25)] outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((s) => !s)}
                                    className="absolute inset-y-0 right-0 px-3 text-zinc-500 hover:text-[#4F39F9]"
                                >
                                    {showPassword ? "🙈" : "👁️"}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-xs text-rose-600">{errors.password}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full mt-2 rounded-lg bg-[#4F39F9] text-white py-2.5 font-medium hover:brightness-95 disabled:opacity-60"
                        >
                            {submitting ? "Signing in..." : "Sign In"}
                        </button>

                        {message && (
                            <p className="mt-2 text-center text-sm text-emerald-700">
                                {message}
                            </p>
                        )}
                    </form>

                    <div className="mt-5 text-center text-sm text-zinc-600">
                        New here?{" "}
                        <Link
                            href="/components/registeruser"
                            className="text-sky-600 hover:underline"
                        >
                            Create an account
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
