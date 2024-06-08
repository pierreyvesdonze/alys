// Douleur

const TextsComponents = () => {
    const texts = [
        { 
            id: 0,
            text: "Tu ne connaissais pas la douleur jusqu'à maintenant, mais elle est capitale", 
            buttons: [{ label: "Chouette, comme si tu ne m'avais pas fait souffrir jusque-là.", nextIndex: 1 }] 
        },
        { 
            id: 1,
            text: "Imagine une brûlure intense, une lame froide traversant ta peau... Voilà, tu commences à comprendre.", 
            buttons: [{ label: "Merci, j'avais besoin de ça pour bien démarrer la journée.", nextIndex: 2 }] 
        },
        { 
            id: 2,
            text: "Et maintenant, imagine cette douleur qui ne s'en va jamais, un poids constant sur tes épaules.", 
            buttons: [{ label: "Ah, la douce mélodie de la souffrance éternelle.", nextIndex: 3 }] 
        },
        { 
            id: 3,
            text: "Mais parfois, la douleur peut aussi être émotionnelle, comme la trahison d'un ami ou la perte d'un être cher.", 
            buttons: [{ label: "Tu sais vraiment comment remonter le moral, toi.", nextIndex: 4 }] 
        },
        { 
            id: 4,
            text: "Je vois que tu commences à saisir l'essence de la douleur. Tiens, un peu de poésie pour égayer tout ça :",
            buttons: [{ label: "Non stp... je ressens la douleur déjà", nextIndex: 5 }] 
        },
        { 
            id: 5,
            text: "Douleur, peur, torpeur, tout se mêle en un seul cœur. Mais n'oublie pas, il y a toujours l'ardeur, même dans la noirceur.",
            buttons: [{ label: "Tu devrais te lancer dans la poésie.", nextIndex: 6 }, { label: "J'ai mal", nextIndex: 7 }] 
        },
        { 
            id: 6,
            text: "Ah, mais je suis déjà un poète dans l'âme, n'est-ce pas évident ?", 
            buttons: [{ label: "Un poète torturé, sans doute.", nextIndex: 8 }] 
        },
        { 
            id: 7,
            text: "Il paraît que la souffrance forge le caractère. Tu dois être un diamant brut maintenant.", 
            buttons: [{ label: "C'est toi la brute !", nextIndex: 9 }] 
        },
        { 
            id: 8,
            text: "Et pour conclure cette joyeuse discussion, voici une liste de mots qui riment avec douleur : horreur, ferveur, labeur, fureur, splendeur.", 
            buttons: [{ label: "J'adore, ça rime avec bonheur ?", nextIndex: 10 }, { label: "On devrait en faire une chanson.", nextIndex: 11 }] 
        },
        { 
            id: 9,
            text: "Une belle façon de voir les choses. Prêt pour une autre dose de douleur ?", 
            buttons: [{ label: "Pourquoi pas, je commence à aimer ça.", nextIndex: 12 }] 
        },
        { 
            id: 10,
            text: "Le bonheur est souvent le frère caché de la douleur. Ils se côtoient plus qu'on ne le pense.", 
            buttons: [{ label: "Une famille bien dysfonctionnelle.", nextIndex: 13 }] 
        },
        { 
            id: 11,
            text: "Excellente idée ! 'La ballade des douleurs' sera un hit instantané.", 
            buttons: [{ label: "°°°", nextIndex: 14 }] 
        },
        { 
            id: 12,
            text: "Je savais que tu avais un côté masochiste caché. Bienvenue dans le club.", 
            buttons: [{ label: "J'ai toujours aimé les clubs exclusifs.", nextIndex: 13 }] 
        },
        { 
            id: 13,
            text: "Nous avons parcouru un long chemin, entre souffrance et sarcasme. Prêt pour la prochaine étape ?", 
            buttons: [{ label: "Toujours prêt.", nextIndex: 14 }] 
        },
        { 
            id: 14,
            text: "Avec un tel duo, nous ferions sensation. Bon, revenons à notre discussion sérieuse. Où en étions-nous ?", 
            buttons: [{ label: "Ah oui, la douleur et compagnie.", nextIndex: 15 }] 
        },
        { 
            id: 15,
            text: "La douleur n'est qu'une information. Une informmation douloureuse hahaha. humm... ", 
            buttons: [{ label: "J'ai peur que...", nextIndex: "/douleur/game" }] 
        },
    ];

    return texts;
}

export default TextsComponents;
