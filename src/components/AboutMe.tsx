import React from 'react';

const AboutMe = () => {
  return (
    <section className="bg-black text-white py-16 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_70%)] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-sm uppercase tracking-widest mb-2 sm:mb-3 text-gray-400 font-medium">ABOUT ME</h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">Who Is Gous?</h3>
          <div className="h-1 w-16 sm:w-24 bg-white mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            Just a human obsessed with helping others transform their lives.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 sm:gap-16 md:gap-20">
          {/* Profile Image with effects */}
          <div className="md:w-2/5 flex justify-center md:justify-end relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl transform scale-150 opacity-30"></div>
            <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/80 shadow-[0_0_30px_rgba(255,255,255,0.2)] relative z-10 transform transition-transform duration-700 hover:scale-105">
              <img
                src="https://res.cloudinary.com/dvbbsgj1u/image/upload/v1748704411/qbol9n0vrkjfx9jyzxaa.jpg"
                alt="Gous - Wellness Guide and Fat Loss Consultant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content with styled typography */}
          <div className="md:w-3/5 space-y-6 sm:space-y-8 mt-10 sm:mt-12 md:mt-0 text-center md:text-left px-2 sm:px-0">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              I'm Gous — a <span className="text-white font-semibold">fat loss consultant</span> and <span className="text-white font-semibold">clarity coach</span> who helps people transform not just their bodies, but their entire approach to a fit and fulfilled life. For over 7 years, I've guided more than 80 individuals from fat to fit through a deeper understanding of food, discipline, and long-term thinking.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              This isn't about hacks, trends, or quick fixes.<br />
              <span className="text-white font-medium">This is about building the mindset and structure that create real, lasting change.</span>
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              I believe fat loss isn't just about how you look<br />
              <span className="text-white font-medium">It's about regaining control over your choices</span><br />
              <span className="text-white font-medium">Overcoming the urge for comfort</span><br />
              <span className="text-white font-medium">And earning peace through effort</span>
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              My work blends practical nutrition with deeper truths about pain, pleasure, and modern life. I connect the dots between how you eat, how you think, and how you live so you can break the cycles holding you back.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Whether it's through my content, one-on-one guidance, my book, or the diet companion app I'm building<br />
              <span className="text-white font-medium">My goal is simple</span><br />
              <span className="text-white font-medium">To help you build clarity, resilience, and strength in a world that's constantly pushing you to drift</span>
            </p>
            
            <div className="pl-4 sm:pl-5 border-l-4 border-white py-2 mx-auto md:mx-0 max-w-lg md:max-w-none">
              <p className="text-base sm:text-lg md:text-xl font-medium">
                If you're tired of starting over<br />
                If you want real structure, not noise<br />
                You're in the right place
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
