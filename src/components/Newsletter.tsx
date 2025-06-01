
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      toast({
        title: "Success!",
        description: "You're subscribed! Check your inbox for the first tip.",
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="newsletter" className="bg-gradient-to-br from-black via-gray-900 to-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-white via-gray-100 to-white rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
            <span className="text-xl sm:text-2xl text-black">✓</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Thank You!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2 sm:px-0">
            You're all set. Check your inbox for the first tip.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="newsletter" className="bg-black py-16 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white px-1">
            Get Sharp Insights on Fat Loss, Mindset
            <span className="block mt-1">& Life—Direct to Your Inbox.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2 sm:px-0">
            Join 10,000+ subscribers and never miss a tip that could transform your health.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 justify-center max-w-xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
          <Input 
            type="email" 
            placeholder="Enter your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-black/60 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 w-full text-center md:text-left backdrop-blur-sm shadow-inner text-sm sm:text-base"
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full md:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all duration-300 shadow-md text-sm sm:text-base"
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        
        <p className="text-xs sm:text-sm text-white mt-3 sm:mt-4 opacity-70">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
