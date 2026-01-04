import { useEffect, useState } from "react";

import Hero1 from "../assets/Hero1.png";
import Hero2 from "../assets/Hero2.png";
import Hero3 from "../assets/Hero3.png";
import Hero4 from "../assets/Hero4.png";

const Heros = [Hero1, Hero2, Hero3, Hero4];

const HeroSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % Heros.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const getStyle = (index) => {
    const diff = (index - active + Heros.length) % Heros.length;

    if (diff === 0) {
      return "translate-x-0 scale-100 opacity-100 z-30";
    }
    if (diff === 1) {
      return "translate-x-32 scale-90 opacity-60 z-20";
    }
    if (diff === Heros.length - 1) {
      return "-translate-x-32 scale-90 opacity-60 z-20";
    }
    return "opacity-0 scale-75 z-0";
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 text-white">
      <div className="flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT CONTENT (UNCHANGED) */}
        <div className="lg:w-1/2 space-y-6">
          <span className="inline-block px-4 py-2 text-sm rounded-full bg-gray-800/70">
            About Sanamio Tech
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transforming Ideas into <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h1>

          <p className="text-gray-400 max-w-xl">
            At Sanamio Tech, we are passionate about creating innovative digital
            solutions that drive business growth. Our team of experienced
            developers, designers, and strategists work together to deliver
            exceptional results.
          </p>

          <p className="text-gray-500 max-w-xl">
            From startups to enterprise-level organizations, we bring your
            vision to life through creativity, innovation, and cutting-edge
            technology.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
            <div className="p-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur">
              <h3 className="text-lg font-semibold text-orange-400">
                Our Mission
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                To empower businesses with cutting-edge technology that drives
                innovation and success.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur">
              <h3 className="text-lg font-semibold text-purple-400">
                Our Vision
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                To be a trusted global IT partner for digital transformation and
                innovation.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT STACKED HeroR (UPDATED) */}
        <div className="lg:w-1/2 relative h-[550px] w-full flex items-center justify-center">
          {Heros.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Hero-${index}`}
              className={`
                absolute w-[75%] md:w-[70%]   h-[350px] md:h-[320px]  rounded-2xl shadow-2xl
                transition-all duration-1000 ease-in-out
                ${getStyle(index)}
              `}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
