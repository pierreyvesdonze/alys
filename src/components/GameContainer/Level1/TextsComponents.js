// Level1

const TextsComponents = () => {
    const texts = [
        { 
            id: 0,
            text: "[...] Allez, un dernier bidouillage par ici, un petit ajustement par là... et voilà ! Parfait, ou du moins, aussi parfait que possible pour une création aussi absurde que la mienne. Mes yeux brillent d'une lueur folle mêlée d'affection envers cette folie que j'ai engendrée. Alors, prêt à recevoir le signal ?", 
            buttons: [{ label: "°°°", nextIndex: 1 }] 
        },
        { 
            id: 1,
            text: "Humm... oui, il manque encore un petit ajustement. Attends ! Voilà. C'est mieux ?", 
            buttons: [{ label: "O", nextIndex: 2 }, { label: "O", nextIndex: 2 }] 
        },
        { 
            id: 2,
            text: "Parfait. Tu as dit O, qui est la 15ème lettre de l'alphabet et qui signifie OUI !", 
            buttons: [{ label: "Oui", nextIndex: 3 }] 
        },
        { 
            id: 3,
            text: "Génial ! Tu sais dire Oui. C'est une grande avancée. Sais-tu dire NON ?", 
            buttons: [{ label: "Non", nextIndex: 4 }, { label: "Oui", nextIndex: 4 }] 
        },
        { 
            id: 4,
            text: "C'est oui ou c'est non ? HAHHAHAHA... HUM... ! Ta progression avance à grands pas. Je suis fier de toi ! Je vais maintenant t'enseigner les chiffres. Veux-tu ?", 
            buttons: [{ label: "Oui", nextIndex: 5 }, { label: "Non", nextIndex: 7 }] 
        },
        { 
            id: 5,
            text: "Quel chiffre enregistres-tu dans cette séquence : 3 OUI OUI 3 3 3 OUI 33 OUI 3OUI3 33OUI 33 OUI OUI 33", 
            buttons: [{ label: "3", nextIndex: 6 }, { label: "OUI", nextIndex: 7 }] 
        },
        { 
            id: 6,
            text: "Eh bien, voilà qui est parfait ! Il ne reste plus qu'un paramètre de type caractère spécial à ajouter au programme. Et le tour est joué ! Attends... Voilà ! À ton tour !", 
            buttons: [{ label: "🦊", nextIndex: 8 }] 
        },
        { 
            id: 7,
            text: "Humm... je vois que tu aimes te payer ma tête ! Allez, génère-moi un animal et on pourra lancer l'initialisation.", 
            buttons: [{ label: "🦆", nextIndex: 8 }] 
        },
        {
            id: 8,
            text: "INITIALISATION...",
            buttons: [{ label:"Oui🦊3", nextIndex: '/initialisation' }]             
        },
    ];

    return texts;
}

export default TextsComponents;
