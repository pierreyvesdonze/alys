import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Typography } from "@mui/material";
import QuestSession from "../../QuestSession";
import { useNavigate } from "react-router-dom";

const LogiqueEnd = () => {
    const questSession = QuestSession();
    const navigate = useNavigate();

    questSession.setQuestResult(0, '/emotion');

    const onNextBtn = () => {
        navigate('/');
    }

    const variants = {
        initial: { y: 0 },
        exit: (custom) => ({
            y: "100vh",
            transition: { duration: 0.5, delay: custom * 0.05, type: "spring", stiffness: 100, damping: 20 }
        })
    };

    const [showAnimation, setShowAnimation] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowAnimation(false), 25); // Adjust the timeout as needed
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {showAnimation && (
                [...Array(16)].map((_, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        initial="initial"
                        animate={{ y: 0 }}
                        exit="exit"
                        variants={variants}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: `${(i / 16) * 100}%`,
                            width: '6.25vw', // 100% / 16 = 6.25vw
                            height: '100vh',
                            backgroundColor: 'white',
                            zIndex: 10 // Ensure it appears above the main content
                        }}
                    />
                ))
            )}
            <motion.div
                key={17}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 2 } }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                transition={{ duration: 0.5 }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    width: '100%',
                    height: '100vh',
                    background: 'black',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <Typography variant="h3" style={{
                    position: 'absolute',
                    top: '25px',
                    textAlign: 'center',
                    color: 'var(--text-color)'
                }} >
                    Logique acquise
                </Typography>

                <h2 
                    className="choice-text-btn" 
                    onClick={onNextBtn}
                >
                    CHAPITRE SUIVANT
                </h2>
            </motion.div>
        </AnimatePresence>
    )
};

export default LogiqueEnd;
