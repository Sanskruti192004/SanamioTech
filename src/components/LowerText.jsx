import React from "react";
import { ArrowRight } from "lucide-react"; // Using lucide arrow icon

const HeroContent = () => {
  return (
    <div className="text-center max-w-3xl mx-auto px-4 py-12">
      {/* ✅ Main text */}
      <h1 className="text-white text-3xl md:text-4xl font-extrabold mb-6">
        Transform your business with cutting-edge web development, mobile applications, and SEO 
      </h1>
      <p className="text-gray-300 text-lg md:text-xl mb-8">
        strategies. We deliver custom solutions that drive growth and innovation.
      </p>

      {/* ✅ Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {/* Purple button */}
        <button className="bg-purple-400 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center hover:bg-purple-600 transition">
          Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
        </button>

        {/* Secondary button */}
        <button className="border border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-black transition">
          View Our Work
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
