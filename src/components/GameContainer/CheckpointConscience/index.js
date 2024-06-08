import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, Reorder } from "framer-motion";
import ConscienceItem from "./ConscienceItem";
import QuestSession from "../../QuestSession";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const initialItems = [
    { id: 1, letter: "O" },
    { id: 2, letter: "N" },
    { id: 3, letter: "E" },
    { id: 4, letter: "I" },
    { id: 5, letter: "S" },
    { id: 6, letter: "C" },
    { id: 7, letter: "E" },
    { id: 8, letter: "C" },
    { id: 9, letter: "N" },
    { id: 10, letter: "C" },
];

const CheckpointConscience = () => {
    const [items, setItems] = useState(initialItems);
    const navigate = useNavigate();
    const questSession = QuestSession();

    // Effet pour vérifier l'ordre des découvertes
    useEffect(() => {
        const correctOrder = ["C", "O", "N", "S", "C", "I", "E", "N", "C", "E"];
        
        const lettersInOrder = items.map(item => item.letter);
        const isCorrectOrder = lettersInOrder.join('') === correctOrder.join('');

        if (isCorrectOrder) {
            setTimeout(() => {
                questSession.setQuestResult(0, 'conscience');
                navigate('/');
            }, 1000);
        }
    }, [items, questSession, navigate]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                transition={{ duration: 1 }}
                style={{ height: '100vh', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <div style={{
                    width: '100%',
                    height: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}>

                    <Typography variant="h2" style={{ color: "var(--text-color)", textAlign: 'center' }}>Déplace les lettres</Typography>

                    <Reorder.Group axis='x' onReorder={setItems} values={items} className="conscience-reorder-ul">
                        {items.map((item) => (
                            <ConscienceItem key={item.id} item={item} />
                        ))}
                    </Reorder.Group>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default CheckpointConscience;
