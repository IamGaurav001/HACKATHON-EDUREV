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
        <section id="how-it-works" className="py-30 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-300 mb-4 shadow-sm">
                        <span className="inline-block w-2 h-2 bg-gray-900 rounded-full"></span>
                        <p className="text-sm font-semibold text-gray-700">HOW IT WORKS</p>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                        How It <span className="text-gray-700">Works</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Three simple steps to start your EDU-Revolution journey
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 relative">
                    <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gray-300 -z-10"></div>
                    
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-gray-900 hover:shadow-xl transition-all duration-300">
                                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-extrabold text-gray-900 mb-3 leading-snug">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    {step.description}
                                </p>
                                
                                {/* Bottom Border Accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-b-2xl"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}