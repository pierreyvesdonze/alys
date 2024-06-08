import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedTextComponent from '../../AnimatedTextComponent';
import { useNavigate } from 'react-router-dom';

const LevelComponent = ({ texts }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [showButton, setShowButton] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        animateText();
    }, [currentTextIndex]);

    const animateText = () => {
        setShowButton(true);
    };

    const handleButtonClick = (nextIndex) => {

        if (typeof nextIndex === "string" && nextIndex.startsWith('/')) {
            navigate(nextIndex);
        } else {
            setCurrentTextIndex(nextIndex);
            setShowButton(false);
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                key={currentTextIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                transition={{ duration: 0.5 }}
                onAnimationComplete={() => setShowButton(true)}
                className="motion-text-container"
            >
                <div className="animated-text-container">
                    <AnimatedTextComponent
                        key={currentTextIndex}
                        text={texts[currentTextIndex].text}
                        onComplete={() => setShowButton(true)} />
                    <div className="choice-text-btn-container">
                        {showButton && texts[currentTextIndex].buttons.map((button, index) => (
                            <button
                                className="choice-text-btn"
                                key={index}
                                onClick={() => handleButtonClick(button.nextIndex)}
                            >
                                {button.label}
                            </button>
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default LevelComponent;
