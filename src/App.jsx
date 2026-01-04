import React from "react";
import Header from "./components/Header";
import FloatingLines from "./components/FloatingLines";
import GradientText from "./components/GradientText";
import RotatingText from "./components/RotatingText";
import Services from "./components/Services";
import ServicesCards from "./components/ServicesCards";
import CoreTechnologies from "./components/CoreTechnologies";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import CtaSection from "./components/CtaSection";
import HeroSection from "./components/HeroSection";
import QuoteForm from "./components/QuoteFrom";


// Hero content with paragraph and buttons
const HeroContent = () => {
  return (
    <div style={{ marginTop: "20px", textAlign: "center", maxWidth: "800px" }}>
      <p
        style={{
          color: "white",
          fontSize: "1.25rem",
          lineHeight: "1.8",
          marginBottom: "24px",
        }}
      >
        Transform your business with cutting-edge web development, mobile
        applications, and SEO strategies. We deliver custom solutions that drive
        growth and innovation.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <button
          style={{
            backgroundColor: "purple",
            color: "#ffffff",
            padding: "12px 24px",
            fontWeight: 700,
            fontSize: "1rem",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Get Started Today →
        </button>

        <button
          style={{
            backgroundColor: "transparent",
            color: "#ffffff",
            border: "2px solid #ffffff",
            padding: "12px 24px",
            fontWeight: 700,
            fontSize: "1rem",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          View Our Work
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <Header />

      {/* ===== BLACK BACKGROUND WITH FLOATING LINES ===== */}
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "black",
        }}
      >
        {/* Background animation */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          <FloatingLines />
        </div>

        {/* Foreground content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "80px",
            pointerEvents: "none",
          }}
        >
          {/* HERO */}
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            style={{
              fontSize: "4rem",
              textAlign: "center",
              lineHeight: "1.0",
            }}
          >
            Innovative IT Solutions
            <br />
            for Modern Business
          </GradientText>

          <div style={{ marginTop: "20px" }}>
            <RotatingText />
          </div>

          <HeroContent />

          {/* ===== SERVICES (INSIDE FLOATING BACKGROUND) ===== */}
          <div
            style={{
              width: "100%",
              marginTop: "10px",
              pointerEvents: "auto", // re-enable interactions
              display: "flex",
              flexDirection: "column",
              gap: "0px", // controlled spacing
            }}
          >
            <Services />

            {/* Pull cards closer to Services */}
            <div style={{ marginTop: "-40px" }}>
              <ServicesCards />
              
              <CoreTechnologies/>
              <FeaturedProjects/>
              <HeroSection/>
              <Testimonials/>
              
              <CtaSection/>
              <Footer/>

            </div>
            
          </div>
        </div>
      </div>
      <QuoteForm/>
    </>
  );
}

export default App;
