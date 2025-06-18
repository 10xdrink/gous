import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import SocialSection from "@/components/SocialSection";
import Newsletter from "@/components/Newsletter";

const Book = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Universal BookLinker URL
  const universalBookUrl = "https://geni.us/thephilosophyoffatloss";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-48 md:pt-48 pb-48 md:pb-48 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Book Cover Image */}
            <div className="flex justify-center items-center">

                <img 
                  src="https://res.cloudinary.com/dvbbsgj1u/image/upload/v1750255363/BC_-_18_Transparent_Background_with_Shadow_ibit5n.png" 
                  alt="The Philosophy of Fat Loss Book Cover" 
                  className="w-[600px] h-auto object-cover"
                  onLoad={() => setIsImageLoaded(true)}
                />
            </div>
            
            {/* Hero Content */}
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900">
                This Book Will Change How You Think About Fat Loss Forever.
              </h1>
              
              <p className="text-xl text-gray-700">
                The breakthrough approach to sustainable fat loss that cuts through the noise and delivers real results.
              </p>
              
              <div className="pt-4 flex flex-row flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
                <a 
                  href={universalBookUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Buy Paperback (on Amazon) <ArrowRight size={20} />
                </a>
                <a 
                  href={universalBookUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-lg border-2 border-black hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Buy eBook (on Amazon) <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What You'll Learn Section */}
      <section className="py-20 md:py-32 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-center">
              What You'll Learn
            </h2>
            <div className="w-24 h-1 bg-white mt-4 rounded-full"></div>
            <p className="text-xl text-gray-400 mt-4 italic">Why This Book Matters</p>
          </div>
          
          <div className="space-y-8 text-lg md:text-xl">
            <p className="text-2xl font-light text-center italic">
              It's time to wake up and see through the lies keeping you sick and fat.
            </p>
            
            <div className="bg-white/10 p-6 rounded-lg border-l-4 border-white">
              <p>
                Imagine waking up every day knowing <span className="font-semibold">exactly what to eat</span>, <span className="font-semibold">how to move</span>, and <span className="font-semibold">how to live</span> —
                to look your best, feel unstoppable, and perform at your peak.
              </p>
            </div>
            
            <p className="text-center font-bold text-xl md:text-2xl">
              No confusion. No gimmicks. No frustration.
            </p>
            
            <p className="text-center text-xl md:text-2xl">
              <span className="font-semibold italic">The Philosophy of Fat Loss</span> is the breakthrough you've been waiting for.
            </p>
            
            <p>
              This isn't another fad or 4-week fix — it's a clear, proven system based on a deep
              understanding of your body, your mindset, and the world around you.
            </p>
          </div>
          
          <div className="mt-16 bg-white/10 p-8 md:p-10 rounded-xl border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center">
              <div className="bg-white p-2 rounded-lg mr-4 flex-shrink-0">
                <BookOpen size={24} className="text-black" />
              </div>
              <span>Inside This Book, You'll Discover:</span>
            </h3>
            
            <ul className="space-y-5 text-white">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center text-white mr-4 mt-1 flex-shrink-0">1</div>
                <span><span className="font-semibold">Why motivation isn't the problem</span> — clarity is</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center text-white mr-4 mt-1 flex-shrink-0">2</div>
                <span>How the confusing overload of fat loss advice is holding you back</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center text-white mr-4 mt-1 flex-shrink-0">3</div>
                <span>The bigger picture: how philosophy, life, money, and society all affect your fat loss journey</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center text-white mr-4 mt-1 flex-shrink-0">4</div>
                <span>The <span className="font-semibold">SIMS Diet</span> – a simple, powerful system that makes fat loss effortless</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center text-white mr-4 mt-1 flex-shrink-0">5</div>
                <span>Practical steps you can apply right now to transform your body and mindset</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center text-white mr-4 mt-1 flex-shrink-0">6</div>
                <span>Why this book is especially designed for men stuck in the cycle of trying and failing</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Who This Book Is For */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 relative">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Who This Book Is For
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <p className="text-lg">
                <span className="font-bold">The Frustrated:</span> If you're tired of guessing and ready to start knowing, this book will give you the clarity you've always needed.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <p className="text-lg">
                <span className="font-bold">The Determined:</span> This is for the man who wants results without obsession, who's ready to break free from short-term fixes.
              </p>
            </div>
          </div>
          
          <div className="text-center py-10 relative">
            <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-70"></div>
            <div className="space-y-2">
              <p className="font-bold text-2xl md:text-3xl tracking-wide">
                No nonsense.
              </p>
              <p className="font-bold text-2xl md:text-3xl tracking-wide">
                Just clarity and results.
              </p>
            </div>
            <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-70"></div>
          </div>
        </div>
      </section>
      

      
      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Ready to Transform Your Approach to Fat Loss?
          </h2>
          
          <div className="pt-4 md:pt-6 flex flex-row flex-nowrap gap-3 md:gap-4 justify-center">
            <a 
              href={universalBookUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 md:gap-2 bg-black text-white font-medium md:font-semibold px-4 py-2 md:px-10 md:py-5 rounded-md md:rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md md:shadow-lg hover:shadow-lg md:hover:shadow-xl transform hover:-translate-y-0.5 md:hover:-translate-y-1 active:translate-y-0 text-sm md:text-lg w-auto md:w-auto"
            >
              Buy Paperback (on Amazon) <ArrowRight size={16} className="md:animate-pulse" />
            </a>
            <a 
              href={universalBookUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 md:gap-2 bg-white text-black font-medium md:font-semibold px-4 py-2 md:px-10 md:py-5 rounded-md md:rounded-lg border border-black md:border-2 hover:bg-gray-100 transition-all duration-300 shadow-md md:shadow-lg hover:shadow-lg md:hover:shadow-xl transform hover:-translate-y-0.5 md:hover:-translate-y-1 active:translate-y-0 text-sm md:text-lg w-auto md:w-auto"
            >
              Buy eBook (on Amazon) <ArrowRight size={16} className="md:animate-pulse" />
            </a>
          </div>
        </div>
      </section>

      
      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default Book;
