
import { Youtube, Instagram, Twitter, Linkedin } from "lucide-react";

const SocialSection = () => {
  // Social links with black and white theme
  const socialLinks = [
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@gous_real",
      description: "Weekly workouts & tips"
    },
    {
      name: "Instagram", 
      icon: Instagram,
      url: "https://www.instagram.com/gous_real/",
      description: "Daily motivation"
    },
    {
      name: "Twitter",
      icon: Twitter, 
      url: "https://x.com/realgous",
      description: "Quick insights"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/gous-sk-7b1b7833a/", 
      description: "Professional content"
    }
  ];

  return (
    <section id="social" className="bg-gradient-to-b from-white to-gray-50 py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-pink-50/30 opacity-70 transform -skew-y-6"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-r from-pink-50/30 via-purple-50/30 to-blue-50/30 opacity-70 transform skew-y-6"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent">
            Follow Me
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Stay connected for daily tips, behind-the-scenes, and exclusive content.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-black hover:text-white relative overflow-hidden"
              >
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_1px,transparent_1px)] bg-[length:12px_12px]"></div>
                
                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-black text-white shadow-lg group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-7 h-7" />
                </div>
                
                <span className="font-bold text-lg text-black group-hover:text-white transition-colors duration-300">
                  {social.name}
                </span>
                
                <span className="text-sm text-gray-800 mt-2 text-center group-hover:text-white/90 transition-colors duration-300">
                  {social.description}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
