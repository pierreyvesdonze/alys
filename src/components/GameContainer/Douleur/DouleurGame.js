import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import QuestSession from "../../QuestSession";
import baseUrl from "../../../baseUrl";
import { Howl } from "howler";

const DouleurGame = () => {
    const questSession    = QuestSession();
    const navigate        = useNavigate();
    const scratchBloodImg = baseUrl + '/assets/images/scratch-blood.png';

    questSession.setQuestResult(0, '/level1');

    useEffect(() => {

        const sound = new Howl({
            src: [baseUrl + "/assets/sons/katana.mp3"],
            loop: false,
            volume: 0.3,
        });

        sound.play();

        return () => {
            sound.stop();
            sound.unload();
        };
    }, []);

    const onNextBtn = () => {
        setTimeout(() => {
            navigate('/');
        }, 500); // Delay to ensure sound has time to play
    }

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
                <h3
                    style={{ position: 'absolute', top: '38%', color: 'var(--second-text-color)', zIndex: '2000' }}
                    className="choice-text-btn next-chapter-btn"
                    onClick={onNextBtn}
                >
                    CHAPITRE SUIVANT
                </h3>

                <img src={scratchBloodImg} alt="scratch-blood" />

            </motion.div>
        </AnimatePresence>
    )
};

export default DouleurGame;
