import {
  Globe,
  ShoppingCart,
  Users,
  Settings,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    title: "Informational",
    subtitle: "Static & Dynamic Websites",
    icon: Globe,
    color: "bg-blue-900/40",
    points: [
      "Corporate Websites",
      "Landing Pages",
      "Blogs",
      "Documentation Sites",
    ],
  },
  {
    title: "Business",
    subtitle: "E-commerce, CRM, ERP, CMS",
    icon: ShoppingCart,
    color: "bg-green-900/40",
    points: [
      "Online Stores",
      "Customer Management",
      "Business Intelligence",
      "Content Management",
    ],
  },
  {
    title: "Community",
    subtitle: "Social Media, Portals, LMS",
    icon: Users,
    color: "bg-purple-900/40",
    points: [
      "Social Platforms",
      "Learning Management",
      "Community Portals",
      "Digital Marketplaces",
    ],
  },
  {
    title: "Specialized",
    subtitle: "Healthcare, Custom Tools, SaaS",
    icon: Settings,
    color: "bg-orange-900/40",
    points: [
      "Financial Solutions",
      "Healthcare Systems",
      "Custom Software",
      "SaaS Platforms",
    ],
  },
];

const ServicesCards = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={i}
              className="group bg-white/5 backdrop-blur-md
                         border border-white/10 rounded-2xl p-8
                         transition-all duration-300
                         hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-200/20"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6
                            ${card.color}
                            group-hover:scale-110 transition`}
              >
                <Icon className="text-orange-400 w-8 h-8" />
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-bold mb-1">
                {card.title}
              </h3>
              <p className="text-gray-400 mb-6">{card.subtitle}</p>

              {/* Points */}
              <ul className="space-y-3 text-gray-300 mb-8">
                {card.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="text-white font-semibold flex items-center gap-2
                                 hover:text-purple-400 transition">
                Learn More <ArrowRight size={18} />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesCards;
