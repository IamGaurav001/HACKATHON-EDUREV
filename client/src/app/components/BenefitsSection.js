"use client";

import { CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
    {
        icon: "📚",
        title: "Core Curriculum",
        description: "Access a comprehensive, accredited curriculum that meets academic and industry standards.",
    },
    {
        icon: "💡",
        title: "Skill Enhancement",
        description: "Explore non-core, project-based courses to build a versatile professional portfolio.",
    },
    {
        icon: "🛡️",
        title: "Flexible Scheduling",
        description: "Benefit from flexible learning paths and structured duty leave provisions.",
    },
    {
        icon: "📈",
        title: "Credit Acceleration",
        description: "Earn extra academic credits rapidly through optional, high-impact participation.",
    },
    {
        icon: "🤝",
        title: "Community Growth",
        description: "Participate in our student referral program and grow your professional network with rewards.",
    },
];

export default function BenefitsSection() {
    return (
        <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <p className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full mb-3 shadow-md">
                        <CheckCircle size={16} className="mr-2 fill-indigo-500 text-white" />
                        Our Value Proposition
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                        Maximize Your <span className="text-indigo-600">Potential</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-3xl mx-auto mt-4">
                        Discover the powerful features engineered to accelerate your growth and ensure academic success.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="
                                bg-white p-10 rounded-3xl 
                                shadow-xl hover:shadow-2xl 
                                border border-gray-100 hover:border-indigo-300 
                                transition-all duration-300 
                                transform hover:-translate-y-2 hover:scale-[1.02] 
                                group cursor-pointer
                                relative overflow-hidden
                            "
                        >
                            <div className="absolute top-0 right-0 w-32 h-24 bg-indigo-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="
                                w-18 h-18 text-4xl 
                                bg-indigo-50 rounded-2xl 
                                flex items-center justify-center 
                                mb-5 
                                border-2 border-indigo-200 
                                group-hover:bg-indigo-100 group-hover:border-indigo-300 
                                transition-all duration-300
                                relative z-10
                            ">
                                {benefit.icon}
                            </div>

                            <h3 className="
                                text-xl font-extrabold text-gray-900 
                                mb-2 
                                group-hover:text-indigo-700 
                                transition-colors
                                relative z-10
                            ">
                                {benefit.title}
                            </h3>

                            <p className="
                                text-gray-600 text-base leading-relaxed 
                                mb-6 
                                relative z-10
                            ">
                                {benefit.description}
                            </p>

                            <button className="
                                flex items-center text-indigo-600 font-bold text-sm 
                                hover:text-indigo-800 
                                transition-all duration-300 
                                group-hover:translate-x-1
                                relative z-10
                            ">
                                Explore Details
                                <ArrowRight size={16} className="ml-2" />
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}