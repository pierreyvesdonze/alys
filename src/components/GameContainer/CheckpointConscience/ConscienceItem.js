import * as React from "react";
import { useMotionValue, Reorder } from "framer-motion";


const ConscienceItem = ({ item }) => {
    return (
        <Reorder.Item value={item} id={item} className="conscience-reorder-li">
            <span style={{ fontWeight: "bold" }}>{item.letter}</span>
        </Reorder.Item>
    );
};

export default ConscienceItem;