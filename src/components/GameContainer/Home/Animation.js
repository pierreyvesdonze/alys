import React from "react";
import { motion } from "framer-motion";

const Animation = () => {
    // Fonction pour générer une couleur aléatoire parmi noir, blanc et jaune
    const getRandomColor = () => {
        const colors = ['#000000', '#ffffff', 'var(--second-text-color)'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <>
            {/* Divs qui disparaissent vers la gauche et vers la droite */}
            <div>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((index) => (
                    <motion.div
                        key={index}
                        initial={{ x: 0 }}
                        animate={{ x: index % 4 === 0 || index % 4 === 1 ? '-100%' : '100%' }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                            delay: Math.random() * 0.5, // Délai aléatoire pour chaque bande
                            duration: 1
                        }}
                        style={{
                            position: 'absolute',
                            top: `${index * 6.25}%`, // 100 / 16 = 6.25
                            left: 0,
                            width: '100%',
                            height: '5.25%', // 100 / 16 = 6.25
                            background: `radial-gradient(circle, black, ${getRandomColor()})`, // Couleur aléatoire
                            zIndex: 10,
                        }}
                    />
                ))}
            </div>

            {/* Divs qui disparaissent vers le haut et vers le bas */}
            <div>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 0 }}
                        animate={{ y: index % 4 === 0 || index % 4 === 1 ? '-100%' : '100%' }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                            delay: Math.random() * 0.5, // Délai aléatoire pour chaque bande
                            duration: 1
                        }}
                        style={{
                            position: 'absolute',
                            left: `${index * 6.25}%`, // 100 / 16 = 6.25
                            top: 0,
                            width: '5.25%', // 100 / 16 = 6.25
                            height: '100%',
                            /* backgroundColor: getRandomColor(), */
                            background: `radial-gradient(circle, black, ${getRandomColor()})`,
                            zIndex: 10,
                        }}
                    />
                ))}
            </div>
        </>
    );
};

export default Animation;
