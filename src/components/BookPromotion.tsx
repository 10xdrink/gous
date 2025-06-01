
const BookPromotion = () => {
  return (
    <section id="book-section" className="bg-[#FFFFFF] text-black py-16 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center">
          {/* Book Cover */}
          <div className="flex justify-center">
            <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] rounded-lg overflow-hidden  transform hover:rotate-1 transition-all duration-500 relative">
              <div className="absolute inset-0 z-10 pointer-events-none"></div>
              <img 
                src="https://res.cloudinary.com/dvbbsgj1u/image/upload/v1748702434/rijds8arvqwacbjivbbn.jpg" 
                alt="The Truth About Fat Loss Book Cover" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 md:order-2 space-y-5 sm:space-y-6 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide leading-tight bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent">
              THE TRUTH ABOUT FAT LOSS NO ONE TOLD YOU
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
              Discover evidence-based strategies to strip away confusion, overcome plateaus, and finally build a body you love—without starving yourself or wasting money on gimmicks.
            </p>
            
            <blockquote className="text-base sm:text-lg italic text-gray-700 border-l-4 border-gradient-to-b from-black to-gray-700 pl-4 mx-auto md:mx-0 max-w-md md:max-w-none">
              "A game-changer for anyone serious about sustainable fat loss."
            </blockquote>
            
            <div className="pt-4 sm:pt-6">
              <a 
                href="/book" 
                className="inline-block bg-gradient-to-r from-black via-gray-800 to-black text-white font-semibold px-6 sm:px-8 py-3 rounded-lg hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookPromotion;
