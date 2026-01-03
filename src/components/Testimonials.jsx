import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    text:
      "Their SEO services helped us rank #1 for our target keywords within 6 months. The organic traffic growth has been phenomenal, and the ROI speaks for itself.",
    name: "Kavya Reddy",
    role: "Marketing Director, GrowthCorp",
    initials: "KR",
  },
  {
    text:
      "Working with Sanamio Tech was a pleasure. They delivered our complex SaaS platform on time and within budget. The code quality and architecture are excellent.",
    name: "Arjun Singh",
    role: "CTO, InnovateLab",
    initials: "AS",
  },
  {
    text:
      "Sanamio Tech transformed our outdated website into a modern, responsive platform that increased our conversions by 150%. Their attention to detail and technical expertise is unmatched.",
    name: "Priya Sharma",
    role: "CEO, TechStart Inc.",
    initials: "PS",
  },
  {
    text:
      "The mobile app they developed for us has been a game-changer. User engagement increased by 200% and our sales have doubled since launch. Highly recommended!",
    name: "Rajesh Patel",
    role: "Founder, E-commerce Plus",
    initials: "RP",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setCurrent((current + 1) % testimonials.length);

  return (
    <section className="w-full px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-white mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-400">
          Don't just take our word for it – hear from our satisfied clients
        </p>
      </div>

      {/* Wrapper */}
      <div className="relative max-w-6xl mx-auto flex items-center gap-6">
        {/* LEFT BUTTON (OUTSIDE) */}
        <button
          onClick={prev}
          className="hidden md:flex w-14 h-14 rounded-full
                     border border-white/10 bg-white/5
                     items-center justify-center
                     hover:bg-white/10 transition"
        >
          <ChevronLeft className="text-white w-6 h-6" />
        </button>

        {/* SLIDE */}
        <div
          className="flex-1 bg-white/5 backdrop-blur-xl
                     border border-white/10 rounded-2xl
                     px-10 py-14 text-center"
        >
          {/* Quote */}
          <Quote className="w-10 h-10 text-orange-500/40 mx-auto mb-6" />

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Text */}
          <p className="text-white text-lg leading-relaxed mb-10">
            “{testimonials[current].text}”
          </p>

          {/* Author */}
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-12 h-12 rounded-full bg-orange-500/20
                         flex items-center justify-center
                         text-orange-400 font-semibold"
            >
              {testimonials[current].initials}
            </div>
            <p className="text-white font-semibold">
              {testimonials[current].name}
            </p>
            <p className="text-gray-400 text-sm">
              {testimonials[current].role}
            </p>
          </div>
        </div>

        {/* RIGHT BUTTON (OUTSIDE) */}
        <button
          onClick={next}
          className="hidden md:flex w-14 h-14 rounded-full
                     border border-white/10 bg-white/5
                     items-center justify-center
                     hover:bg-white/10 transition"
        >
          <ChevronRight className="text-white w-6 h-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-10">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === current
                ? "w-8 bg-orange-500"
                : "w-2 bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
