"use client";

import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Gaurav Kumar",
        role: "Btech CSE LPU",
        avatar: "👩‍🎓",
        quote: "EduRev helped me improve my grades from B to A+ in just 3 months. The personalized learning is amazing!",
        rating: 5,
    },
    {
        name: "Gaurav Kumar",
        role: "Btech CSE LPU",
        avatar: "👩‍🎓",
        quote: "EduRev helped me improve my grades from B to A+ in just 3 months. The personalized learning is amazing!",
        rating: 5,
    },
    {
        name: "Gaurav Kumar",
        role: "Btech CSE LPU",
        avatar: "👩‍🎓",
        quote: "EduRev helped me improve my grades from B to A+ in just 3 months. The personalized learning is amazing!",
        rating: 5,
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-600 mb-2">
                        Student Success Stories
                    </h2>
                    <p className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Loved by <span className="text-indigo-600">Students</span> Everywhere
                    </p>
                    <p className="mt-4 text-xl text-gray-500">
                        Join thousands of students achieving their learning goals
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex gap-0.5 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                {testimonial.quote}
                            </p>

                            <div className="w-12 h-0.5 bg-indigo-200 mb-6"></div>

                            <div className="flex items-center gap-4">
                                <div className="text-2xl p-2 bg-indigo-50 rounded-full">{testimonial.avatar}</div>
                                <div>
                                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-indigo-600">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}