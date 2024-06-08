import React from "react";
import LevelComponent from "../LevelComponent";
import TextsComponents from "./TextsComponents";

const Level1 = () => {
    const texts = TextsComponents();
    return <LevelComponent texts={texts} />;
};

export default Level1;