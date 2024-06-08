import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Typography } from "@mui/material";
import QuestSession from "../../QuestSession";
import { useNavigate } from "react-router-dom";

const ConscienceEnd = () => {

    const questSession = QuestSession();
    const navigate = useNavigate();

    questSession.setQuestResult(0, '/logique');

    const onNextBtn = () => {
        navigate('/');
    }

    return (
        <AnimatePresence>
            <motion.div
                key={1}
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
                    background: `radial-gradient(circle, var(--second-text-color) 60%, black 100%)`,
                }}
            >
                <Typography  variant="h3" style={{  position: 'absolute',
                    top: '25px', textAlign: 'center' }} >Conscience validée</Typography>

                <button className="decrease-btn" onClick={onNextBtn}>NEXT</button>
            </motion.div>
        </AnimatePresence>
    )
};

export default ConscienceEnd;
