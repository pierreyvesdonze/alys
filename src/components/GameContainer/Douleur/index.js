import React from "react";
import LevelComponent from "../LevelComponent";
import TextsComponents from "./TextsComponents";

const Douleur = () => {
    const texts = TextsComponents();
    return <LevelComponent texts={texts} />;
};

export default Douleur;