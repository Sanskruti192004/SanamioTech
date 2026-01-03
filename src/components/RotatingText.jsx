import React, { useState, useEffect } from "react";

const RotatingText = () => {
  const texts = ["SEO Solutions", "Digital Marketing", "Web Development"];
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 50 : 150; // typing speed
    const timeout = setTimeout(() => {
      const fullText = texts[index];
      if (isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      }

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, texts]);

  return (
    <p className="text-white text-2xl font-semibold">
      Specializing in{" "}
      <span className="text-purple-300 font-extrabold">{displayedText}</span>
      <span className="animate-blink">|</span>
    </p>
  );
};

export default RotatingText;
