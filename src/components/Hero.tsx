
import { ChevronDown } from "lucide-react";
import Navbar from "./Navbar";

const Hero = () => {
  const scrollToNext = () => {
    const bookSection = document.getElementById('book-section');
    bookSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-black flex items-center justify-center relative pt-8">
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen">
          {/* Content order reversed on mobile, normal on desktop */}
          <div className="order-2 lg:order-1 flex flex-col justify-center space-y-0.5 lg:space-y-8 lg:pr-12 -mt-40 lg:mt-0 text-center lg:text-left">
            <div className="space-y-1 lg:space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
               I'm Gous
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed max-w-lg mx-auto lg:mx-0 mt-0">
              I help people eat better and think clearer.
              </p>
              {/* Credentials as text on desktop, buttons on mobile */}
              <p className="hidden sm:block text-base sm:text-lg md:text-xl font-bold text-white leading-relaxed">
                Fat Loss Consultant | Wellness Guide | Creator of the SIMS Diet
              </p>
              
              {/* Mobile-only buttons layout */}
              <div className="flex flex-wrap gap-2 justify-center sm:hidden mt-0.5 pb-4 pt-4">
                <span className="bg-black/40 border border-white/30 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Fat Loss Consultant
                </span>
                <span className="bg-black/40 border border-white/30 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Wellness Guide
                </span>
                <span className="bg-black/40 border border-white/30 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Creator of SIMS Diet
                </span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 flex items-center justify-center h-full py-0 pb-0 lg:py-0">
            <div className="w-3/5 sm:w-3/5 md:w-1/2 lg:w-4/5 h-full flex items-center justify-center">
              <img 
                src="https://res.cloudinary.com/dvbbsgj1u/image/upload/v1748694094/xm7ttdhyu1yjlwsnczpm.png"
                alt="Gous - Wellness Guide and Fat Loss Consultant"
                className="rounded-[50%] max-w-full max-h-full object-contain shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
