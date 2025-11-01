"use client";

import { BookOpen, TrendingUp, Globe2, Sparkles, Clock3 } from "lucide-react";

const benefits = [
    {
        icon: BookOpen,
        title: "Recognition of Prior Learning",
        description: "Leverage your certifications, internships, and professional experience to earn academic credit and accelerate your degree completion.",
        lightColor: "bg-gray-100",
        iconColor: "text-gray-900",
    },
    {
        icon: TrendingUp,
        title: "Grade Enhancement",
        description: "Boost your academic performance through high-impact achievements including hackathons, competitive exams, and research publications.",
        lightColor: "bg-gray-100",
        iconColor: "text-gray-900",
    },
    {
        icon: Globe2,
        title: "Global Course Credits",
        description: "Substitute traditional coursework with industry-recognized MOOCs and certifications from leading global platforms like NPTEL.",
        lightColor: "bg-gray-100",
        iconColor: "text-gray-900",
    },
    {
        icon: Sparkles,
        title: "Real-World Projects",
        description: "Replace classroom assignments with practical, production-ready projects that build a compelling professional portfolio.",
        lightColor: "bg-gray-100",
        iconColor: "text-gray-900",
    },
    {
        icon: Clock3,
        title: "Flexible Scheduling",
        description: "Balance academics, internships, and placement opportunities with intelligently structured learning paths designed for modern students.",
        lightColor: "bg-gray-100",
        iconColor: "text-gray-900",
    },
];

export default function BenefitsSection() {
    return (
        <section id="benefits" className="py-16  md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 z-40">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-300 mb-4 shadow-sm">
                        <span className="inline-block w-2 h-2 bg-gray-900 rounded-full"></span>
                        <p className="text-sm font-semibold text-gray-700">KEY FEATURES</p>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                        Unlock Your <span className="text-gray-700">Academic Potential</span>
                    </h2>

                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Empower your educational journey with innovative pathways that recognize your diverse skill set and accelerate your success.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="group relative h-full overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-xl"
                            >
                                <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

                                <div className="relative p-6 md:p-7 h-full flex flex-col">
                                    <div className={`w-14 h-14 rounded-xl ${benefit.lightColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gray-200`}>
                                        <IconComponent className={`w-8 h-8 ${benefit.iconColor}`} strokeWidth={2} />
                                    </div>

                                    <h3 className="text-lg font-extrabold text-gray-900 mb-2 leading-snug group-hover:text-gray-800 transition-colors">
                                        {benefit.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed grow mb-4 font-medium">
                                        {benefit.description}
                                    </p>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 md:mt-14 text-center">
                    <p className="text-gray-600 mb-4 font-medium">Ready to transform your educational journey?</p>
                    <button className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                        Explore All Benefits
                    </button>
                </div>
            </div>
        </section>
    );
}