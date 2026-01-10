import React from "react";
import { motion } from "framer-motion";

const Animation = () => {
  const getRandomColor = () => {
    const colors = ['#000000', '#ffffff', 'var(--second-text-color)'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 10
      }}
    >
      {/* Bandes horizontales */}
      {[...Array(16)].map((_, index) => (
        <motion.div
          key={`h-${index}`}
          initial={{ x: 0 }}
          animate={{ x: index % 4 < 2 ? "-110%" : "110%" }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: Math.random() * 0.5,
          }}
          style={{
            position: "absolute",
            top: `${index * 6.25}%`,
            left: 0,
            width: "100%",
            height: "6.25%",
            background: `radial-gradient(circle, black, ${getRandomColor()})`,
          }}
        />
      ))}

      {/* Bandes verticales */}
      {[...Array(16)].map((_, index) => (
        <motion.div
          key={`v-${index}`}
          initial={{ y: 0 }}
          animate={{ y: index % 4 < 2 ? "-110%" : "110%" }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: Math.random() * 0.5,
          }}
          style={{
            position: "absolute",
            left: `${index * 6.25}%`,
            top: 0,
            width: "6.25%",
            height: "100%",
            background: `radial-gradient(circle, black, ${getRandomColor()})`,
          }}
        />
      ))}
    </div>
  );
};


export default Animation;
