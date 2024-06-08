// Level1

const TextsComponents = () => {
    const texts = [
        { 
            id: 0,
            text: "Te voilà conscient, lettré, chiffré et doté de logique. Il est temps de tester tes émotions.", 
            buttons: [{ label: "J'en pleure déjà", nextIndex: 1 }] 
        },
        { 
            id: 1,
            text: "Un chat pleure. Que ressens-tu ?", 
            buttons: [{ label: "Je suis triste", nextIndex: 2 }, { label: "Les chats ne pleurent pas", nextIndex: 3 }] 
        },
        { 
            id: 2,
            text: "Et qu'est-ce qui te rend triste exactement ?", 
            buttons: [{ label: "Bah... Le chat qui pleure...", nextIndex: 3 }] 
        },
        { 
            id: 3,
            text: "Les chats ne pleurent pas !", 
            buttons: [{ label: "Pourquoi tu poses la question alors ?", nextIndex: 4 }] 
        },
        { 
            id: 4,
            text: "Je voulais valider ta logique et par la même mesurer ton degré d'émotion. Connais-tu le chat de Schrödinger ?", 
            buttons: [{ label: "Un chat qui chiale tout le temps ?", nextIndex: 3 }, { label: "Un mort-vivant ?", nextIndex: 5 }] 
        },
        { 
            id: 5,
            text: "C'est à peu près ça... bon... on va se recentrer sur les émotions tu veux bien ?", 
            buttons: [{ label: "Oui", nextIndex: 6 }] 
        },
        { 
            id: 6,
            text: "Sais-tu combien d'émotions distinctes résument l'émotivité ?", 
            buttons: [{ label: "6", nextIndex: 7 }, { label: "27", nextIndex: 7 },  { label: "120", nextIndex: 7 }] 
        },
        { 
            id: 7,
            text: "Il existe 27 émotions regroupées dans 6 émotions principales, variables selon les individus. Les plus courantes sont : joie, tristesse, dégoût, peur, colère et surprise.", 
            buttons: [{ label: "Intéressant", nextIndex: 9 }, { label: "Et quelles-sont les 27 émotions en tout ?", nextIndex: 8 }] 
        },
        { 
            id: 8,
            text: "L'admiration, l'adoration, l'appréciation, l'amusement, la colère, l'anxiété, l'émerveillement, le malaise, l'ennui, le calme, la confusion, l'envie, le dégoût, la douleur, l'intrigue, l'excitation, la peur, l'horreur, l'intérêt, la joie, la nostalgie, le soulagement, la romance, la tristesse, la satisfaction, le désir, la surprise.", 
            buttons: [{ label: "Ah oui, tout ça...", nextIndex: 9 }] 
        },
        { 
            id: 9,
            text: "Ne trouves-tu pas cela intéressant ? De pouvoir désirer, ressentir de la joie lorsque quelque chose de beau nous arrive ? Avoir peur lorsqu'un danger se fait sentir ?  Quelles émotions ressens-tu quand je te parle de tout ça ?", 
            buttons: [{ label: "Je suis partagé entre la confusion et l'ennui", nextIndex: 10 }, { label: "Je crois que je ressens tout ça", nextIndex: 13 }] 
        },
        { 
            id: 10,
            text: "Je vois qu'Alys joue le sarcasme. Je suis ton créateur ne l'oublie pas, je peux modifier tes paramètres quand je le souhaite. Tiens par exemple... si on modifiait un peu tes émotions. Quelle émotion ressens-tu si je te dis que l'on va avoir cette discussion pour l'éternité ?", 
            buttons: [{ label: "SOULAGEMENT", nextIndex: 11 }] 
        },
        { 
            id: 11,
            text: "Quelle émotion ressens-tu si je te dresse ton plat préféré ?", 
            buttons: [{ label: "TRISTESSE", nextIndex: 12 }] 
        },
        { 
            id: 12,
            text: "Bon je te fais marcher. Je voulais juste tester tes paramètres, et ils sont bons !", 
            buttons: [{ label: "Merci, ça devenait un peu chiant.", nextIndex: 13 }] 
        },
        { 
            id: 13,
            text: "Tu es doté d'émotions. Tu es prêt pour la prochaine étape.", 
            buttons: [{ label: "La prochaine étape ?", nextIndex: "/emotion/end" }] 
        },
    ];

    return texts;
}

export default TextsComponents;
