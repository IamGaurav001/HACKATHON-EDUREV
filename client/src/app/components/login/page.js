"use client";
import { useState } from "react";
import Link from "next/link";

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
      // Replace with your real login API call
      // const res = await fetch("/api/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      // const data = await res.json();
      // if (!res.ok) throw new Error(data?.message || "Invalid credentials");
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
    <main className="min-h-screen bg-white text-zinc-800 flex items-center justify-center p-6">
      <div className="relative w-full max-w-md">
        <div className="pointer-events-none absolute -top-20 -left-24 h-40 w-40 rounded-full" style={{ backgroundColor: "#4F39F933", filter: "blur(32px)" }} />
        <div className="pointer-events-none absolute -bottom-16 -right-20 h-44 w-44 rounded-full" style={{ backgroundColor: "#4F39F933", filter: "blur(32px)" }} />

        <div className="relative rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-xl">
          <div className="mb-5 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Student Sign In</h1>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Use your registration number and password.</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            {/* Registration Number */}
            <div>
              <label htmlFor="regno" className="block text-sm font-medium mb-1">Registration Number</label>
              <input
                id="regno"
                name="regno"
                type="text"
                value={form.regno}
                onChange={onChange}
                className={`w-full rounded-lg border bg-white px-3 py-2 outline-none transition
                           border-zinc-200/70 focus:border-[#4F39F9] focus:ring-2 focus:ring-[rgba(79,57,249,0.25)] uppercase`}
                autoComplete="username"
              />
              {errors.regno && <p className="mt-1 text-xs text-rose-600">{errors.regno}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={onChange}
                  className={`w-full rounded-lg border bg-white pr-10 px-3 py-2 outline-none transition
                             border-zinc-200/70 focus:border-[#4F39F9] focus:ring-2 focus:ring-[rgba(79,57,249,0.25)]`}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-zinc-500 hover:text-[#4F39F9]"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                      <path d="M3 3l18 18" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.73 5.08A9.71 9.71 0 0 1 12 5c5 0 9.27 3.11 11 7.5a12.36 12.36 0 0 1-3.22 4.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.28 6.28A12.37 12.37 0 0 0 1 12.5C2.73 16.89 7 20 12 20c1.27 0 2.49-.2 3.62-.58" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.9 9.9a3 3 0 1 0 4.2 4.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-xs text-rose-600">{errors.password}</p>}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-2 rounded-lg bg-[#4F39F9] text-white py-2.5 font-medium hover:brightness-95 disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {submitting ? "Signing in..." : "Sign In"}
            </button>

            {message && (
              <div className="mt-2 text-center text-sm text-emerald-700 dark:text-emerald-300">{message}</div>
            )}
          </form>

          <div className="mt-5 text-center text-sm text-zinc-600 dark:text-zinc-400">
            New here? <Link href="/components/registeruser" className="text-sky-600 hover:underline">Create an account</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
