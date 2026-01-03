import React from "react";
import { Globe, Smartphone, Search } from "lucide-react";

const technologies = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites built with cutting-edge technologies like React, Next.js, and Node.js",
    icon: <Globe className="w-7 h-7 text-orange-400" />,
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter",
    icon: <Smartphone className="w-7 h-7 text-orange-400" />,
  },
  {
    title: "SEO Optimization",
    description:
      "Comprehensive SEO strategies to improve your online visibility and drive organic traffic",
    icon: <Search className="w-7 h-7 text-orange-400" />,
  },
];

export default function CoreTechnologies() {
  return (
    <section className="w-full py-10 px-6">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-white text-center mb-14">
        Core Technologies
      </h2>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {technologies.map((item, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-md border border-white/10
                       rounded-2xl p-8 text-center
                       transition-all duration-300
                       hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/20"
          >
            {/* Centered Icon */}
            <div className="flex justify-center mb-6">
              <div
                className="w-14 h-14 flex items-center justify-center rounded-xl
                           bg-gradient-to-br from-orange-500/20 to-pink-500/20
                           group-hover:scale-110 transition"
              >
                {item.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-4">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
