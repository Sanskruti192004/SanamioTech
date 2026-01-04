import React from "react";
import { ArrowUpRight } from "lucide-react";
import Hero3 from "../assets/Hero3.png";

const projects = [
  {
    badge: "Specialized",
    image: Hero3,

    title: "IG Service Pune",
    description:
      "Professional website for a home appliance repair service in Pune specializing in fridge and washing machine repairs.",
    stats: "+142% conversion",
    tags: ["Appliance-repair", "Next.js", "Postgres"],
  },
  {
    badge: "Business",
    image:
      "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=900&q=80",
    title: "MyTalentWin Contest Platform",
    description:
      "Full-featured contest platform with video upload, payment processing, and advanced analytics dashboard.",
    stats: "-38% bounce",
    tags: ["Contest", "SEO", "Video-streaming", "React.js"],
  },
  {
    badge: "Community",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    title: "SermonTV: Watch latest sermons",
    description:
      "Transform your daily spiritual practice with SermonTV delivering enlightening sermons to your fingertips.",
    stats: "+92% patient satisfaction",
    tags: ["Flutter", "Spring Boot", "MySQL", "Docker"],
  },
];

const FeaturedProjects = () => {
  return (
    <section className="relative py-12 px-6">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <span className="inline-block mb-4 px-4 py-1 text-xs rounded-full bg-white/10 text-gray-300">
          Featured Work
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          High-impact projects <br /> crafted by Sanamio Tech
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          A selection of platforms and experiences delivering measurable outcomes
          across our four service categories.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-md border border-white/10
                       rounded-2xl overflow-hidden transition-all duration-300
                       hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/20"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500
                           group-hover:scale-110"
              />

              <span className="absolute top-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                {project.badge}
              </span>

              <span className="absolute bottom-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                {project.stats}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-white text-lg font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button className="text-white font-semibold flex items-center gap-2 hover:text-orange-400 transition">
                View case study
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-lg font-semibold transition">
          View all projects
        </button>
      </div>
    </section>
  );
};

export default FeaturedProjects;
