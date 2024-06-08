import React from "react";
import { motion, wrap } from "framer-motion";

const AnimatedTextComponent = ({ text, onComplete }) => {
    const words = text.split(" ");

    // Vérifiez si le texte est vide
    if (words.length === 0) {
        // Si le texte est vide, appelez onComplete directement
        onComplete();
        return null;
    }

    // Variants pour le conteneur des mots.
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 },
        },
    };

    // Variants pour chaque mot.
    const child = {
        visible: {
            opacity: 1,
            transition: {
                duration: 1.5, // Durée de l'animation en secondes
            },
        },
        hidden: {
            opacity: 0,
        },
    };

    return (
        <motion.div
            style={{ 
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                width: '75%',
             }}
            variants={container}
            initial="hidden"
            animate="visible"
            onAnimationComplete={onComplete} // Appel onComplete lorsque l'animation est terminée
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    style={{ marginRight: "14px" }}
                    key={index}
                    className="animated-text"
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedTextComponent;