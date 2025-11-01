import Navbar from './components/Navbar';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import HowItWorksSection from './components/HowItWorksSection';
import { FaArrowDown } from "react-icons/fa6";
import Footer from './components/Footer';
import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';

function HomePage() {
  return (
    <div className="bg-white">
      <Navbar />

      <div className="flex flex-col">
        <main className="w-full md:max-h-[calc(100vh-30px)] flex flex-col lg:flex-row px-30">

          <section className="flex-1 px-6 md:px-10 lg:px-12 flex flex-col justify-center items-start py-40 lg:py-100">
            <div className="max-w-2xl w-full space-y-6">
              <div className="inline-block px-3 py-1.5 bg-gray-100 rounded-full border border-gray-300 shadow-sm">
                <p className="text-xs md:text-sm font-semibold text-gray-800">
                  🎓 LPU's Flagship Initiative
                </p>
              </div>

              <h1 className="text-3xl md:text-3xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Get Academic Credit for <span className="text-gray-700">What You Already Know</span>
              </h1>

              <p className="text-sm md:text-xl text-gray-700 leading-relaxed font-medium">
                EduRev empowers you to bypass known courses with certifications, boost grades through hackathons,
                and replace classes with NPTEL and MOOCs. Take control of your degree, master skills faster, and accelerate your career.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/login" className="px-6 py-2.5 text-sm md:text-base font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition duration-300 shadow-lg hover:shadow-xl text-center whitespace-nowrap">
                  Start Your Revolution
                </Link>
                <Link href="#how-it-works" className="px-6 py-2.5 text-sm md:text-base font-semibold text-gray-900 bg-white border-2 border-gray-900 rounded-full hover:bg-gray-50 transition duration-300 shadow-md hover:shadow-lg text-center whitespace-nowrap">
                  How EduRev Works
                </Link>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <p className="text-sm md:text-base font-semibold text-gray-600">Learn more about EduRev</p>
                <a href="#benefits" className="w-12 h-12 rounded-full border-2 border-gray-900 flex items-center justify-center hover:bg-gray-900 transition-all duration-300 cursor-pointer group flex-shrink-0">
                  <FaArrowDown />
                </a>
              </div>
            </div>
          </section>

          <section className="hidden lg:block absolute top-12 right-0 w-1/2 h-full z-0">
            <div className="w-full h-full relative">
              <Spline scene="https://prod.spline.design/M6cpWkK3umnhRoUB/scene.splinecode" />
            </div>
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
