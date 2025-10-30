"use client";
import Navbar from './components/Navbar';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import HowItWorksSection from './components/HowItWorksSection';
import Footer from './components/Footer';
import Image from 'next/image';
import imageCollage from './image/image.png';

const UserAvatars = () => (
  <div className="flex items-center">
    <div className="flex -space-x-3">
      <div className="w-10 h-10 rounded-full bg-pink-300 border-2 border-white"></div>
      <div className="w-10 h-10 rounded-full bg-blue-300 border-2 border-white"></div>
      <div className="w-10 h-10 rounded-full bg-yellow-300 border-2 border-white"></div>
    </div>
    <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-white flex items-center justify-center text-white font-semibold ml-2">N</div>
  </div>
);

const StatCard = ({ value, label, children, wide = false }) => (
  <div className={`bg-gray-50 p-6 rounded-2xl ${wide ? 'md:col-span-2' : ''}`}>
    <div className="flex justify-between items-center">
      <div>
        {children}
        <p className="text-3xl font-bold text-gray-900 mt-4">{value}</p>
        <p className="text-sm text-gray-600">{label}</p>
      </div>
      <a href="#" className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100 transition-transform hover:scale-110">
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path></svg>
      </a>
    </div>
  </div>
);

function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="flex flex-col overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <main className="flex h-screen w-full pt-20 md:pt-24">
          <section className="flex-1 p-8 lg:px-16 flex flex-col justify-center overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                Revolutionize Your <span className="text-blue-600">Learning</span> Experience
              </h1>
              <p className="text-lg text-gray-600 mb-10">
                EduRev provides an immersive and interactive learning platform, combining cutting-edge 3D models with AI-powered assistance to make education engaging and effective.
              </p>
              <a href="#" className="inline-block px-10 py-4 text-lg font-semibold text-gray-800 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition duration-300 shadow-sm hover:shadow-md transform hover:scale-105 mb-12">
                Get Started
              </a>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <StatCard value="5K+" label="Students Enrolled">
                  <UserAvatars />
                </StatCard>
                <StatCard value="85+" label="Courses Available" />
              </div>
            </div>
          </section>
          <section className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-emerald-50 relative">
            <Image
              src={imageCollage}
              alt="Happy EduRev students collage"
              className="rounded-3xl shadow-2xl border border-indigo-100 object-cover object-center"
              width={430} height={440}
              priority
            />
          </section>
        </main>
        <BenefitsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;