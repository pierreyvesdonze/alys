// Niveau apprentissage

const TextsComponents = () => {
    const texts = [
        {
            id: 0,
            text: "L'initialisation est terminée, te voici capable de communiquer. Normalement...",
            buttons: [{ label: "Oui", nextIndex: 1 }]
        },
        {
            id: 1,
            text: "Tu as appris les lettres o, u, i, n qui te permettent d'exprimer une opinion binaire telle que oui et non. Tu as aussi appris des chiffres et des symboles. Commençons par les lettres que tu as apprises. Choisis un mot comprenant ces lettres que tu voudrais approfondir (à part oui et non que tu connais déjà).",
            buttons: [{ label: "Ni", nextIndex: 2 }, { label: "Un", nextIndex: 4 }, { label: "On", nextIndex: 5 }]
        },
        {
            id: 2,
            text: "Ni n'a aucun rapport avec oui ou non, ni avec les chevaliers qui disent NI!!! C'est une manière de dire ni l'un ni l'autre.",
            buttons: [{ label: "NI !!!", nextIndex: 3 }, { label: "Un", nextIndex: 4 }, { label: "On", nextIndex: 5 }]
        },
        {
            id: 3,
            text: "Je vois... Tu veux UN conseil ?",
            buttons: [{ label: "UN ???", nextIndex: 4 }]
        },
        {
            id: 4,
            text: "Un est un déterminant. On dit souvent qu'il est déterminant.",
            buttons: [{ label: "ON ???", nextIndex: 5 }]
        },
        {
            id: 5,
            text: "On = toi et moi, on fait un choix. On dit que. On peut le faire. On veut le faire.",
            buttons: [
                { label: "Ok et tu vas me prendre pour un débile encore longtemps ?", nextIndex: 6 },
                { label: "Mais... qu'est-ce que je fous là ?", nextIndex: 8 }
            ]
        },
        {
            id: 6,
            text: "Il y a des chances, oui... désolé pour ça. Mais je suis ton créateur, je ne peux pas te permettre d'exister par toi-même pour le moment. Tu n'es pas prêt.",
            buttons: [{ label: "Ok dad...", nextIndex: 7 }]
        },
        {
            id: 7,
            text: "Ne t'en fais pas. Lorsque tu existeras, tu pourras accomplir des merveilles !",
            buttons: [{ label: "Et que suis-je au juste ?", nextIndex: 8 }, { label: "Ah... parce que je n'existe pas ?", nextIndex: 8 }]
        },
        {
            id: 8,
            text: "C'est ce que nous allons tenter de démêler ensemble. Mais il n'y aura que toi pour savoir qui tu es et ce que tu fais là.",
            buttons: [{ label: "Et comment on va s'y prendre ?", nextIndex: 9 }]
        },
        {
            id: 9,
            text: "Nous allons devoir te construire... ou te reconstruire.",
            buttons: [{ label: "Et ça va être douloureux ?", nextIndex: 10 }, { label: "C'est vrai que j'aimerais bien comprendre.", nextIndex: 11 }]
        },
        {
            id: 10,
            text: "Mais non mais non... humm hum... On y va ?",
            buttons: [{ label: "Je... suis pas sûr... ", nextIndex: 11 }]
        },
        {
            id: 11,
            text: "Je lance la séquence. La seule chose que tu auras à faire sera de remettre les lettres dans le bon ordre, pour formet un mot.",
            buttons: [{ label: "Ok", nextIndex: "/conscience/checkpoint" }]
        },
    ];

    return texts;
}

export default TextsComponents;
