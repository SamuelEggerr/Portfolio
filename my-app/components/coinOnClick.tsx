"use client";
import React, { useRef } from "react";
import samuelImage from "@/public/rect-head.png"; // Adjust path if needed

const CoinOnClick = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (containerRef.current) {
      containerRef.current.classList.add("active");
      
      const ripple = document.createElement("div");
      ripple.className = "ripple";
        
      containerRef.current.appendChild(ripple);    
      // Remove ripple after animation
      ripple.addEventListener("animationend", () => {
        ripple.remove();
      });

      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.classList.remove("active");
        }
      }, 2300);
    }
  };

  return (
    <div
      ref={containerRef}
      className="coin-container w-32 h-32 md:h-40 md:w-40 mx-auto rounded-full mb-6"
      onClick={handleClick}
    >
      <div
        className="coin rounded-full"
        style={{ backgroundImage: `url(${samuelImage.src})` }}
      ></div>
    </div>
  );
};

export default CoinOnClick;
