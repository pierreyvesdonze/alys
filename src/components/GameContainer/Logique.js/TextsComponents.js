const TextsComponents = () => {
    const texts = [
        { 
            id: 0,
            text: "Ah, un autre prétendant à la couronne de la logique. Prêt à affronter le labyrinthe de l'absurde ?", 
            buttons: [{ label: "Toujours prêt", nextIndex: 1 }, { label: "Je suppose...", nextIndex: 3 }] 
        },
        { 
            id: 1,
            text: "La bravoure est une qualité rare dans cet océan de perplexité. Prêt à plonger dans les abysses de la raison ?", 
            buttons: [{ label: "Je défierai toute logique", nextIndex: 2 }, { label: "Je préfère rester en eaux peu profondes", nextIndex: 4 }] 
        },
        { 
            id: 2,
            text: "Défier toute logique ? Un pari risqué dans ce jeu de cartes truquées. Prêt à voir si la chance est de ton côté ?", 
            buttons: [{ label: "Je joue mes cartes avec audace", nextIndex: 11 }, { label: "Je ne parie pas sur l'inconnu", nextIndex: 5 }] 
        },
        { 
            id: 3,
            text: "La prudence, une vertu souvent négligée. Prêt à naviguer prudemment dans les eaux tumultueuses de la raison ?", 
            buttons: [{ label: "Je préfère avancer avec prudence... Tu as beaucoup de questions comme ça ?", nextIndex: 5 }, { label: "Je suis curieux malgré tout", nextIndex: 4 }] 
        },
        { 
            id: 4,
            text: "La curiosité, un fardeau ou une bénédiction ? Seuls les fous osent s'aventurer dans les terres inexplorées de la logique.", 
            buttons: [{ label: "Je suis prêt à être fou... d'ailleurs je crois que je le deviens", nextIndex: 11 }, { label: "Peut-être un peu trop risqué", nextIndex: 5 }] 
        },
        { 
            id: 5,
            text: "Le risque, un jeu dangereux dans l'arène de la logique. Prêt à parier ta raison pour une once de sagesse ?", 
            buttons: [{ label: "Je parie tout sur le rouge", nextIndex: 6 }, { label: "La sagesse est surévaluée", nextIndex: 11 }] 
        },
        { 
            id: 6,
            text: "Le rouge, une couleur audacieuse pour un esprit téméraire. Prêt à défier le destin ?", 
            buttons: [{ label: "Je fonce tête baissée", nextIndex: 12 }, { label: "Peut-être un autre jour", nextIndex: 7 }] 
        },
        { 
            id: 7,
            text: "L'incertitude, un compagnon de voyage redoutable. Prêt à découvrir ce que l'avenir réserve ?", 
            buttons: [{ label: "Je préfère rester dans l'ignorance", nextIndex: 11 }, { label: "Je suis prêt à affronter l'inconnu", nextIndex: 8 }] 
        },
        { 
            id: 8,
            text: "L'inconnu, un territoire sauvage où seul l'audacieux ose s'aventurer. Prêt à explorer les contrées de l'absurdité ?", 
            buttons: [{ label: "Je suis un explorateur intrépide", nextIndex: 9 }, { label: "Je préfère rester sur la terre ferme", nextIndex: 11 }] 
        },
        { 
            id: 9,
            text: "L'audace, une qualité prisée dans cet univers de paradoxes. Prêt à défier les lois de la logique ?", 
            buttons: [{ label: "Je suis prêt à braver l'impossible", nextIndex: 12 }, { label: "Peut-être un peu trop risqué", nextIndex: 10 }] 
        },
        { 
            id: 10,
            text: "Le risque calculé, une approche prudente. Prêt à envisager toutes les conséquences ?", 
            buttons: [{ label: "Je suis prêt à tout envisager", nextIndex: 13 }, { label: "Pas vraiment", nextIndex: 14 }] 
        },
        { 
            id: 11,
            text: "Le choix de l'ignorance, un chemin souvent emprunté. Prêt à continuer sur cette voie ?", 
            buttons: [{ label: "Oui, l'ignorance est une bénédiction", nextIndex: 15 }, { label: "Non, je veux comprendre", nextIndex: 16 }] 
        },
        { 
            id: 12,
            text: "La bravoure face à l'inconnu, une démarche noble. Prêt à découvrir ce qui se cache derrière le voile ?", 
            buttons: [{ label: "Je suis prêt", nextIndex: 17 }, { label: "Je crois que je fatigue là...", nextIndex: 18 }] 
        },
        { 
            id: 13,
            text: "Envisager toutes les conséquences, une tâche ardue. Prêt à te confronter à la complexité ?", 
            buttons: [{ label: "Je suis prêt à relever le défi", nextIndex: 19 }, { label: "Je préfère simplifier les choses", nextIndex: 20 }] 
        },
        { 
            id: 14,
            text: "Éviter les conséquences, une approche simple. Prêt à prendre le chemin le plus court ?", 
            buttons: [{ label: "Oui, simplicité avant tout", nextIndex: 21 }, { label: "Non, je veux explorer davantage", nextIndex: 22 }] 
        },
        { 
            id: 15,
            text: "L'ignorance, une mer calme. Prêt à naviguer sans heurts ?", 
            buttons: [{ label: "Oui, je préfère la tranquillité", nextIndex: 23 }, { label: "Non, je cherche des défis", nextIndex: 24 }] 
        },
        { 
            id: 16,
            text: "La quête de compréhension, une aventure périlleuse. Prêt à affronter les dangers de la connaissance ?", 
            buttons: [{ label: "Oui, je suis prêt", nextIndex: 25 }, { label: "Non, c'est trop pour moi", nextIndex: 26 }] 
        },
        { 
            id: 17,
            text: "Découvrir l'inconnu, une tâche héroïque. Prêt à devenir un héros de la logique ?", 
            buttons: [{ label: "Oui, je suis un héros", nextIndex: 27 }, { label: "Non, je suis un simple mortel", nextIndex: 28 }] 
        },
        { 
            id: 18,
            text: "Reporter l'inconnu, une décision sage. Prêt à revenir plus tard ?", 
            buttons: [{ label: "Oui, je reviendrai", nextIndex: 29 }, { label: "Non, je veux continuer maintenant", nextIndex: 30 }] 
        },
        { 
            id: 19,
            text: "Le défi de la complexité, une montagne à gravir. Prêt à atteindre le sommet ?", 
            buttons: [{ label: "Oui, je suis un grimpeur", nextIndex: 31 }, { label: "Non, je préfère les plaines", nextIndex: 32 }] 
        },
        { 
            id: 20,
            text: "Simplifier les choses, une approche minimaliste. Prêt à continuer ?", 
            buttons: [{ label: "Oui, la simplicité est clé", nextIndex: 33 }, { label: "Non, je veux complexifier", nextIndex: 34 }] 
        },
        { 
            id: 21,
            text: "Le chemin le plus court, une ligne droite. Prêt à atteindre la fin rapidement ?", 
            buttons: [{ label: "Oui, allons-y", nextIndex: 35 }, { label: "Non, je préfère explorer", nextIndex: 36 }] 
        },
        { 
            id: 22,
            text: "Explorer davantage, une soif de découverte. Prêt à assouvir cette soif ?", 
            buttons: [{ label: "Oui, je veux tout voir", nextIndex: 37 }, { label: "Non, je suis déjà fatigué", nextIndex: 38 }] 
        },
        { 
            id: 23,
            text: "La tranquillité, une mer sans vagues. Prêt à continuer cette traversée paisible ?", 
            buttons: [{ label: "Oui, la paix avant tout", nextIndex: 39 }, { label: "Non, je veux du mouvement", nextIndex: 40 }] 
        },
        { 
            id: 24,
            text: "Les défis, des montagnes à escalader. Prêt à grimper ?", 
            buttons: [{ label: "Oui, j'aime les défis", nextIndex: 41 }, { label: "Non, je préfère les vallées", nextIndex: 42 }] 
        },
        { 
            id: 25,
            text: "L'aventure de la connaissance, un voyage périlleux. Prêt à partir ?", 
            buttons: [{ label: "Oui, en avant", nextIndex: 43 }, { label: "Non, je préfère rester ici", nextIndex: 26 }] 
        },
        { 
            id: 26,
            text: "Rester ici, une option sédentaire. Prêt à rester à jamais ?", 
            buttons: [{ label: "Oui, c'est confortable", nextIndex: 44 }, { label: "Non, je veux explorer", nextIndex: 43 }] 
        },
        { 
            id: 27,
            text: "Un héros de la logique, un titre prestigieux. Prêt à porter ce fardeau ?", 
            buttons: [{ label: "Oui, je suis prêt", nextIndex: 45 }, { label: "Non, trop de pression", nextIndex: 28 }] 
        },
        { 
            id: 28,
            text: "Un simple mortel, une vie tranquille. Prêt à accepter cette simplicité ?", 
            buttons: [{ label: "Oui, la simplicité me va", nextIndex: 44 }, { label: "Non, je veux plus", nextIndex: 27 }] 
        },
        { 
            id: 29,
            text: "Revenir plus tard, une promesse incertaine. Prêt à tenir cette promesse ?", 
            buttons: [{ label: "Oui, je reviendrai", nextIndex: 30 }, { label: "Non, je préfère rester", nextIndex: 44 }] 
        },
        { 
            id: 30,
            text: "Continuer maintenant, une décision impulsive. Prêt à faire face aux conséquences ?", 
            buttons: [{ label: "Oui, je suis prêt", nextIndex: 31 }, { label: "Non, je préfère attendre", nextIndex: 29 }] 
        },
        { 
            id: 31,
            text: "Grimper la montagne, une tâche ardue. Prêt à atteindre le sommet ?", 
            buttons: [{ label: "Oui, je suis un grimpeur", nextIndex: 32 }, { label: "Non, je préfère les plaines", nextIndex: 20 }] 
        },
        { 
            id: 32,
            text: "Les plaines, un terrain simple. Prêt à rester sur cette voie ?", 
            buttons: [{ label: "Oui, la simplicité est clé", nextIndex: 33 }, { label: "Non, je veux complexifier", nextIndex: 34 }] 
        },
        { 
            id: 33,
            text: "Simplicité, une approche minimaliste. Prêt à continuer ?", 
            buttons: [{ label: "Oui, allons-y", nextIndex: 21 }, { label: "Non, je préfère explorer", nextIndex: 36 }] 
        },
        { 
            id: 34,
            text: "Complexifier les choses, une quête de profondeur. Prêt à plonger plus profondément ?", 
            buttons: [{ label: "Oui, je veux tout voir", nextIndex: 37 }, { label: "Non, je suis déjà fatigué", nextIndex: 38 }] 
        },
        { 
            id: 35,
            text: "Le chemin le plus court, une ligne droite. Prêt à atteindre la fin rapidement ?", 
            buttons: [{ label: "Oui, la fin m'attend", nextIndex: 45 }, { label: "Non, je veux explorer", nextIndex: 36 }] 
        },
        { 
            id: 36,
            text: "Explorer davantage, une soif de découverte. Prêt à assouvir cette soif ?", 
            buttons: [{ label: "Oui, je veux tout voir", nextIndex: 37 }, { label: "Non, je suis déjà fatigué", nextIndex: 38 }] 
        },
        { 
            id: 37,
            text: "Découvrir plus, une quête infinie. Prêt à continuer sans fin ?", 
            buttons: [{ label: "Oui, l'infini m'appelle", nextIndex: 39 }, { label: "Non, je préfère finir", nextIndex: 45 }] 
        },
        { 
            id: 38,
            text: "La fatigue, un ennemi redoutable. Prêt à te reposer ?", 
            buttons: [{ label: "Oui, je suis épuisé", nextIndex: 40 }, { label: "Non, je continue", nextIndex: 39 }] 
        },
        { 
            id: 39,
            text: "Le mouvement constant, une danse avec le destin. Prêt à poursuivre cette danse ?", 
            buttons: [{ label: "Oui, je danse avec le destin", nextIndex: 41 }, { label: "Non, je suis fatigué", nextIndex: 40 }] 
        },
        { 
            id: 40,
            text: "Le repos, une pause nécessaire. Prêt à reprendre des forces ?", 
            buttons: [{ label: "Oui, je me repose", nextIndex: 44 }, { label: "Non, je continue", nextIndex: 41 }] 
        },
        { 
            id: 41,
            text: "Les défis, des montagnes à escalader. Prêt à grimper ?", 
            buttons: [{ label: "Oui, j'aime les défis", nextIndex: 42 }, { label: "Non, je préfère les vallées", nextIndex: 43 }] 
        },
        { 
            id: 42,
            text: "Les vallées, un terrain paisible. Prêt à rester ici ?", 
            buttons: [{ label: "Oui, la paix avant tout", nextIndex: 44 }, { label: "Non, je veux des défis", nextIndex: 41 }] 
        },
        { 
            id: 43,
            text: "Le sommet, une vue imprenable. Prêt à atteindre ce point de vue ?", 
            buttons: [{ label: "Oui, je veux voir le sommet", nextIndex: 45 }, { label: "Non, trop de travail", nextIndex: 44 }] 
        },
        { 
            id: 44,
            text: "Le confort, une vie sans soucis. Prêt à rester dans cette zone de confort ?", 
            buttons: [{ label: "Oui, le confort est roi", nextIndex: 45 }, { label: "Non, je veux plus", nextIndex: 45 }] 
        },
        { 
            id: 45,
            text: "Félicitations ! Tu as survécu à cette conversation absurde sur la logique. Continue à explorer les mystères du sarcasme et de la raison.", 
            buttons: [{ label: "J'y vais", nextIndex: "/logique/end" }] 
        },
    ];

    return texts;
}

export default TextsComponents;