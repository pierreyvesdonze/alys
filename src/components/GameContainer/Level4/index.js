import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuestSession from "../../QuestSession";
import { useNavigate } from "react-router-dom";

const Level4 = () => {
    const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const generateRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const generateRandomPosition = (max) => `${Math.random() * max}%`;
    const generateRandomChar = () => String.fromCharCode(generateRandomNumber(65, 90)); // A-Z
    const specialChars = "!@#$%^&*()_+{}:\"<>?[];',./";
    const generateRandomSpecialChar = () => specialChars[generateRandomNumber(0, specialChars.length - 1)];

    const generateRandomMixedChar = () => {
        const types = ['number', 'letter', 'special'];
        const type = types[generateRandomNumber(0, types.length - 1)];
        switch (type) {
            case 'number':
                return generateRandomNumber(0, 9);
            case 'letter':
                return generateRandomChar();
            case 'special':
                return generateRandomSpecialChar();
            default:
                return generateRandomNumber(0, 9);
        }
    };

    const generateItems = (type) => {
        return Array.from({ length: 100 }, () => {
            const size = generateRandomNumber(1, 9); // Size in em
            const height = size * 1.2; // Approximate height in px assuming 1em = 16px (1em = 16px and 1.2 as a rough estimate of font height)
            const top = generateRandomPosition(100 - (height / window.innerHeight) * 100);  // Adjust top position to ensure the element fits within 100vh
            const blur = (12 - size) * 0.2; // Smaller size results in higher blur

            let item;
            switch (type) {
                case 'number':
                    item = generateRandomNumber(0, 9);
                    break;
                case 'letter':
                    item = generateRandomChar();
                    break;
                case 'special':
                    item = generateRandomSpecialChar();
                    break;
                case 'mixed':
                    item = generateRandomMixedChar();
                    break;
                default:
                    item = generateRandomNumber(0, 9);
            }

            return {
                item,
                size: `${size}em`,
                color: generateRandomColor(),
                top: top,
                left: generateRandomPosition(100),
                delay: Math.random() * 2, // Random delay for each item
                duration: Math.random() * 2 + 1, // Random duration between 1s and 6s
                blur: blur,
            };
        });
    };

    const [items, setItems]             = useState(generateItems('number'));
    const [clickCount, setClickCount]   = useState(0);
    const [buttonValue, setButtonValue] = useState(3);
    const [itemType, setItemType]       = useState('number');
    const questSession                  = QuestSession();
    const navigate                      = useNavigate();

    const regenerateItems = () => {
        if (buttonValue === "NEXT") {
            navigate('/');
            return;
        }

        if (buttonValue > 1) {
            setButtonValue(prevValue => prevValue - 1);
        } else {
            setButtonValue("NEXT");
            questSession.setQuestResult(0, '/level5');
        }

        setClickCount(prevCount => prevCount + 1);

        // Update itemType to cycle through number, letter, special, mixed
        let nextItemType;
        if (itemType === 'number') {
            nextItemType = 'letter';
        } else if (itemType === 'letter') {
            nextItemType = 'special';
        } else if (itemType === 'special') {
            nextItemType = 'mixed';
        } else {
            nextItemType = 'number';
        }
        setItemType(nextItemType);

        setItems(generateItems(nextItemType));
    };

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflowY: 'hidden' }}>
            <AnimatePresence>
                {items.map((item, index) => (
                    <motion.div
                        key={`${clickCount}-${index}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: item.delay, duration: item.duration }}
                        style={{
                            position: 'absolute',
                            top: item.top,
                            left: item.left,
                            fontSize: item.size,
                            color: item.color,
                            userSelect: 'none',
                            filter: `blur(${item.blur}px)`, // Apply the blur effect
                        }}
                    >
                        {item.item}
                    </motion.div>
                ))}
            </AnimatePresence>
            <button
                onClick={regenerateItems}
                className="decrease-btn"
            >
                {buttonValue}
            </button>
        </div>
    );
}

export default Level4;
