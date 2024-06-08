import React from "react";
import LevelComponent from "../LevelComponent";
import TextsComponents from "./TextsComponents";

const Apprentissage = () => {
    const texts = TextsComponents();
    return <LevelComponent texts={texts} />;
};

export default Apprentissage;