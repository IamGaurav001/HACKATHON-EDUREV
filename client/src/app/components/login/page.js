"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [form, setForm] = useState({ regno: "", password: "" });
  const [forgotMode, setForgotMode] = useState(false);
  const [forgotData, setForgotData] = useState({
    regno: "",
    question: "",
    answer: "",
    newPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [step, setStep] = useState(1); // 1 = question, 2 = reset password

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((e0) => ({ ...e0, [e.target.name]: undefined }));
  };

  const onForgotChange = (e) => {
    setForgotData((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((e0) => ({ ...e0, [e.target.name]: undefined }));
  };

  const validateLogin = () => {
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

    // Send POST request to your backend
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/userregister`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        reg_no: form.regno,
        password: form.password,
        secQuestion: form.secQuestion,
        secAnswer: form.secAnswer.trim().toLowerCase()
      }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || "Registration failed");

    // Success
    setMessage(data.message);
    setForm({ name: "", regno: "", password: "", secQuestion: "", secAnswer: "" });

  } catch (err) {
    setMessage(err.message || "Registration failed. Try again.");
  } finally {
    setSubmitting(false);
  }
};


  const handleForgotSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (step === 1) {
      if (!forgotData.regno || !forgotData.question || !forgotData.answer) {
        setMessage("Please fill all fields.");
        return;
      }

      // Simulated correct answer (in real app, verify via backend)
      if (forgotData.answer.toLowerCase() === "correct") {
        setStep(2);
        setMessage("Answer verified. You can now set a new password.");
      } else {
        setMessage("Your answer is incorrect. Please try again.");
      }
    } else if (step === 2) {
      if (!forgotData.newPassword.trim()) {
        setMessage("Enter a new password.");
        return;
      }
      setMessage("Password reset successful! You can now log in.");
      setTimeout(() => {
        setForgotMode(false);
        setStep(1);
        setForgotData({ regno: "", question: "", answer: "", newPassword: "" });
      }, 1200);
    }
  };

  return (
    <main className="min-h-screen bg-white text-zinc-800 flex items-center justify-center p-6">
      <div className="relative w-full max-w-md">
        <div
          className="pointer-events-none absolute -top-20 -left-24 h-40 w-40 rounded-full"
          style={{ backgroundColor: "#4F39F933", filter: "blur(32px)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-16 -right-20 h-44 w-44 rounded-full"
          style={{ backgroundColor: "#4F39F933", filter: "blur(32px)" }}
        />

        <div className="relative rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-xl">
          <div className="mb-5 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Student Sign In
            </h1>
            <p className="mt-1 text-sm text-zinc-500">
              Use your registration number and password.
            </p>
          </div>

          {!forgotMode ? (
            <>
              <form onSubmit={onSubmit} className="space-y-4">
                {/* Registration Number */}
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

                {/* Password */}
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
                    <p className="mt-1 text-xs text-rose-600">
                      {errors.password}
                    </p>
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

              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => setForgotMode(true)}
                  className="text-sm text-sky-600 hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <div className="mt-5 text-center text-sm text-zinc-600">
                New here?{" "}
                <Link
                  href="/components/registeruser"
                  className="text-sky-600 hover:underline"
                >
                  Create an account
                </Link>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold text-center mb-4">
                Forgot Password
              </h2>
              <form onSubmit={handleForgotSubmit} className="space-y-4">
                {step === 1 && (
                  <>
                    {/* <div>
                      <label className="block text-sm font-medium mb-1">
                        Registration Number
                      </label>
                      <input
                        name="regno"
                        value={forgotData.regno}
                        onChange={onForgotChange}
                        className="w-full rounded-lg border px-3 py-2 uppercase border-zinc-200/70 focus:border-[#4F39F9] focus:ring-2"
                      />
                    </div> */}

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Security Question
                      </label>
                      <select
                        name="question"
                        value={forgotData.question}
                        onChange={onForgotChange}
                        className="w-full rounded-lg border px-3 py-2 border-zinc-200/70 focus:border-[#4F39F9] focus:ring-2"
                      >
                        <option value="">Select a question</option>
                        <option value="first_pet_name">
                          What is the name of your first pet?
                        </option>
                        <option value="favorite_book">
                          What is your favorite book?
                        </option>
                        <option value="favorite_movie">
                          What is your favorite movie?
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Your Answer
                      </label>
                      <input
                        name="answer"
                        value={forgotData.answer}
                        onChange={onForgotChange}
                        className="w-full rounded-lg border px-3 py-2 border-zinc-200/70 focus:border-[#4F39F9] focus:ring-2"
                      />
                    </div>
                  </>
                )}

                {step === 2 && (
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      New Password
                    </label>
                    <input
                      name="newPassword"
                      type="password"
                      value={forgotData.newPassword}
                      onChange={onForgotChange}
                      className="w-full rounded-lg border px-3 py-2 border-zinc-200/70 focus:border-[#4F39F9] focus:ring-2"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full mt-2 rounded-lg bg-[#4F39F9] text-white py-2.5 font-medium hover:brightness-95"
                >
                  {step === 1 ? "Verify Answer" : "Reset Password"}
                </button>

                {message && (
                  <p className="mt-2 text-center text-sm text-rose-600">
                    {message}
                  </p>
                )}

                <div className="text-center mt-3">
                  <button
                    type="button"
                    onClick={() => {
                      setForgotMode(false);
                      setStep(1);
                      setForgotData({
                        regno: "",
                        question: "",
                        answer: "",
                        newPassword: "",
                      });
                      setMessage("");
                    }}
                    className="text-sm text-zinc-500 hover:underline"
                  >
                    Back to Sign In
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
