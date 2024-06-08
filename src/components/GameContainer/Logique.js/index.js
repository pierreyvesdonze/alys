import React from "react";
import LevelComponent from "../LevelComponent";
import TextsComponents from "./TextsComponents";

const Logique = () => {
    const texts = TextsComponents();
    return <LevelComponent texts={texts} />;
};

export default Logique;