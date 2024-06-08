import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { Link, useParams } from 'react-router-dom';
import QuestSession from '../../QuestSession';

const Checkpoint1 = () => {
    const { id } = useParams();
    const questSession = QuestSession();
  
    // Selon l'id du choix utilisateur, on redirige vers le prochain niveau à jouer, qui sera la route correspondante
    id == 'loose' ? questSession.setQuestResult(0, '/level1') : questSession.setQuestResult(0, '/level4');
    
        return (
            <AnimatePresence>
                <motion.div
                    key={1}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    transition={{ duration: 0.5 }}
                    style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100vh'
                     }}
                >
                    <Link to='/' className='custom-link-btn'>FIN DU CHAPITRE  ({id})</Link>
                </motion.div>
            </AnimatePresence>
    );
}

export default Checkpoint1;
