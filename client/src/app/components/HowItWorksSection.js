"use client";

const steps = [
    {
        number: "1",
        title: "Register via Portal",
        description: "Sign up and create your profile in minutes to get started.",
    },
    {
        number: "2",
        title: "Participate in Programs",
        description: "Engage with courses, challenges, and collaborative projects.",
    },
    {
        number: "3",
        title: "Earn Rewards & Recognition",
        description: "Unlock badges, credits, and exclusive benefits as you progress.",
    },
];

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">How It Works</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Three simple steps to start your EDU-Revolution journey
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting line */}
                    <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-emerald-500 to-indigo-600 -z-10"></div>
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            <div className="glass p-8 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-slate-600">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
