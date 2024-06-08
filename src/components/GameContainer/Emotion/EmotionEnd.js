import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Typography } from "@mui/material";
import QuestSession from "../../QuestSession";
import { useNavigate } from "react-router-dom";

const EmotionEnd = () => {
    const questSession = QuestSession();
    const navigate = useNavigate();

    questSession.setQuestResult(0, '/douleur');

    const onNextBtn = () => {
        navigate('/');
    }

    // Tableau contenant les 27 émotions
    const emotions = [
        "Joie", "Tristesse", "Colère", "Peur", "Surprise", "Dégoût",
        "Ennui", "Sérénité", "Espoir", "Désespoir", "Confiance", "Méfiance",
        "Amour", "Haine", "Plaisir", "Douleur", "Regret", "Soulagement",
        "Fierté", "Honte", "Culpabilité", "Détermination", "Découragement",
        "Curiosité", "Déception", "Inquiétude", "Apaisement"
    ];

    // État pour gérer l'affichage aléatoire des émotions
    const [displayEmotions, setDisplayEmotions] = useState(false);

    useEffect(() => {
        // Activer l'affichage des émotions après un bref délai pour permettre le rendu initial
        const timeout = setTimeout(() => {
            setDisplayEmotions(true);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <AnimatePresence>
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
                    Émotions acquises
                </Typography>

                <h2 
                style={{ position: 'absolute', color: 'var(--second-text-color)', zIndex: '2000' }}
                    className="choice-text-btn" 
                    onClick={onNextBtn}
                >
                    CHAPITRE SUIVANT
                </h2>

                {/* Affichage des émotions */}
                {displayEmotions && emotions.map((emotion, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, x: Math.random() * (window.innerWidth - 800) + 200, y: Math.random() * (window.innerHeight - 800) + 200 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: Math.random() * 0.5 }}
                    style={{
                       width: '100%',
                        fontSize: `${Math.floor(Math.random() * 6 + 1)}em`,
                        color: `rgba(100, 100, 100, ${Math.random() * 0.9 + 0.59})`,
                    }}
                >
                    {emotion}
                </motion.div>
                
                ))}
            </motion.div>
        </AnimatePresence>
    )
};

export default EmotionEnd;
