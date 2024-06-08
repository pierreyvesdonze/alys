import React, { useState } from "react";
import { motion } from "framer-motion";

const GameTitleAnimation = () => {
    const title = "ALYS";
    const [reverseAnimation, setReverseAnimation] = useState(false);

    const variants = {
        normal: {
            rotateY: [180, 0],
        },
        reverse: {
            rotateY: [0, 180],
        },
    };

    const onAnimationComplete = () => {
        setTimeout(() => {
            setReverseAnimation(!reverseAnimation);
        }, 5000);
    };

    return (
        <h2 style={{ textAlign: 'center', color: "var(--text-color)", fontSize: '4em', fontWeight: '100' }}>
            {title.split("").map((letter, index) => (
                <motion.span
                    key={index}
                    style={{
                        display: 'inline-block',
                        originX: 0.5,
                        originY: 0.5,
                        color: index === title.length - 1 ? "var(--second-text-color)" : "inherit",
                    }}
                    animate={reverseAnimation ? "reverse" : "normal"}
                    variants={variants}
                    transition={{
                        delay: index * 0.1,
                        duration: 0.5,
                    }}
                    onAnimationComplete={index === title.length - 1 ? onAnimationComplete : null}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </h2>
    );
};

export default GameTitleAnimation;
