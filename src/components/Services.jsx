import {
  Code2,
  Smartphone,
  Search,
  TrendingUp,
  Zap,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const services = [
  { icon: Code2, label: "Web Dev" },
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: Search, label: "SEO" },
  { icon: TrendingUp, label: "Growth" },
  { icon: Zap, label: "Fast" },
  { icon: ShieldCheck, label: "Secure" },
  { icon: Rocket, label: "Launch" },
];

export default function Services() {
  return (
    <section
      style={{
        width: "100%",
        padding: "120px 0",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* ICONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "48px",
          flexWrap: "wrap",
          marginBottom: "80px",
        }}
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "rgba(168, 85, 247, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "12px",
                }}
              >
                <Icon size={28} color="#a855f7" />
              </div>
              <span style={{ fontSize: "14px", color: "#d1d5db" }}>
                {service.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* TEXT */}
      <h2 style={{ fontSize: "40px", fontWeight: 700, marginBottom: "16px" }}>
        Our Services
      </h2>

      <p
        style={{
          fontSize: "18px",
          color: "#9ca3af",
          maxWidth: "720px",
          margin: "0 auto",
        }}
      >
        Comprehensive IT solutions tailored to your business needs across
        multiple domains.
      </p>
    </section>
  );
}