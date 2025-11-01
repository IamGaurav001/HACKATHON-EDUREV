"use client";

import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Akash Sharma",
        role: "B.Tech CSE, 3rd Year",
        avatar: "👨‍💻",
        quote: "I already had a React certificate, so I used RPL to skip the introductory web course. That time allowed me to focus on my capstone project and land a dream internship!",
        rating: 5,
    },
    {
        name: "Priya Verma",
        role: "B.Des, 2nd Year",
        avatar: "🎨",
        quote: "My grade in a core design theory paper was low, but I used the Grade Upgradation policy after winning a national hackathon. My effort outside class was finally rewarded in my academics!",
        rating: 5,
    },
    {
        name: "Rohit Singh",
        role: "MBA, Final Year",
        avatar: "📈",
        quote: "Instead of a standard elective, I completed a specialized management MOOC via NPTEL/Certification. It was highly industry-relevant and made my CV stand out during placement season.",
        rating: 5,
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-300 mb-4 shadow-sm">
                        <span className="inline-block w-2 h-2 bg-gray-900 rounded-full"></span>
                        <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                            Student Success Stories
                        </p>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                        Loved by <span className="text-gray-700">Students</span> Everywhere
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Join thousands of students achieving their learning goals
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:border-gray-900 transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden"
                        >
                            <div className="flex gap-0.5 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="fill-gray-900 text-gray-900" />
                                ))}
                            </div>

                            <p className="text-base text-gray-700 mb-6 leading-relaxed font-medium">
                                "{testimonial.quote}"
                            </p>

                            <div className="w-12 h-0.5 bg-gray-300 mb-6 group-hover:bg-gray-900 transition-colors duration-300"></div>

                            <div className="flex items-center gap-4">
                                <div className="text-2xl w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full border border-gray-200 group-hover:border-gray-900 transition-colors duration-300">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-600 font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                            
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-b-2xl"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}