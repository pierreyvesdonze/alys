const TextsComponents = () => {
    const texts = [
        { 
            id: 0,
            text: "Ah bonjour. Si tu es là, c'est que tu as besoin d'aide. Ah bonjour. Si tu es là, c'est que tu as besoin d'aide.Ah bonjour. Si tu es là, c'est que tu as besoin d'aide. Ah bonjour. Si tu es là, c'est que tu as besoin d'aide. Ah bonjour. Si tu es là, c'est que tu as besoin d'aide.", 
            buttons: [{ label: "Oui", nextIndex: 1 }] 
        },
        { 
            id: 1,
            text: "Que puis-je pour toi ?", 
            buttons: [{ label: "Rien", nextIndex: 0 }, { label: "Je veux une pizza", nextIndex: 2 }] 
        },
        {
            id: 2,
            text: "🍕",
            buttons: [{ label: "checkpoint1", nextIndex: "/checkpoint1/loose" }, { label:"checkpoint2", nextIndex: "/checkpoint1/win" }]             
        },
    ];

    return texts;
}

export default TextsComponents;
