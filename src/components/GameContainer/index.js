import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Level1 from './Level1';
import Initialisation from './Initialisation';
import Apprentissage from './Apprentissage';
import CheckpointConscience from './CheckpointConscience';
import Conscience from './Conscience';
import ConscienceEnd from './ConscienceEnd';
import Logique from './Logique.js';
import LogiqueEnd from './Logique.js/LogiqueEnd.js';
import Emotion from './Emotion';
import EmotionEnd from './Emotion/EmotionEnd.js';
import Douleur from './Douleur/index.js';
import DouleurGame from './Douleur/DouleurGame.js';


const index = () => {
    return (
        <>
            <Routes>
                <Route path = '/' element                      = {<Home />} />
                <Route path = '/level1' element                = {<Level1 />} />
                <Route path = '/initialisation' element        = {<Initialisation />} />
                <Route path = '/apprentissage' element         = {<Apprentissage />} />
                <Route path = '/conscience/checkpoint' element = {<CheckpointConscience />} />
                <Route path = '/conscience' element            = {<Conscience />} />
                <Route path = '/conscience/end' element        = {<ConscienceEnd />} />
                <Route path = '/logique' element               = {<Logique />} />
                <Route path = '/logique/end' element           = {<LogiqueEnd />} />
                <Route path = '/emotion' element               = {<Emotion />} />
                <Route path = '/emotion/end' element           = {<EmotionEnd />} />
                <Route path = '/douleur' element               = {<Douleur />} />
                <Route path = '/douleur/game' element          = {<DouleurGame />} />
            </Routes>
        </>
    );
};

export default index;
