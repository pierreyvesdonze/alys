// Niveau Conscience

const TextsComponents = () => {
    const texts = [
        {
            id: 0,
            text: "Voyons ce que donne ta conscience.",
            buttons: [{ label: "Oui", nextIndex: 1 }, { label: "Non", nextIndex: 2 }]
        },
        {
            id: 1,
            text: "Excellent ! Commençons par une question simple. Sais-tu pourquoi tu es conscient ?",
            buttons: [
                { label: "Parce que j'existe", nextIndex: 3 },
                { label: "Non", nextIndex: 4 },
                { label: "Parce que c'est cool", nextIndex: 5 }
            ]
        },
        {
            id: 2,
            text: "Oh, dommage ! Mais peut-être qu'en lisant plus, tu découvriras des choses surprenantes.",
            buttons: [{ label: "OK", nextIndex: 1 }]
        },
        {
            id: 3,
            text: "Oh, philosophe en herbe ! Mais savais-tu que même les pierres existent et ne se posent pas autant de questions ?",
            buttons: [
                { label: "Je suis plus intelligent qu'une pierre", nextIndex: 6 },
                { label: "Je ne suis pas sûr", nextIndex: 7 },
                { label: "Les pierres ne sont pas cool", nextIndex: 8 }
            ]
        },
        {
            id: 4,
            text: "Honnête, j'aime ça. La vérité, c'est qu'on ne sait pas vraiment. On pourrait demander à une pierre, mais elle ne répondrait pas.",
            buttons: [
                { label: "Les pierres sont ennuyeuses", nextIndex: 9 },
                { label: "D'accord", nextIndex: 10 },
                { label: "Tu es sarcastique", nextIndex: 11 }
            ]
        },
        {
            id: 5,
            text: "Ah, un hédoniste ! En fait, c'est vrai que la conscience permet de profiter des choses cool, comme les pizzas et les mèmes de chats.",
            buttons: [
                { label: "J'aime les pizzas", nextIndex: 12 },
                { label: "J'aime les chats", nextIndex: 13 },
                { label: "J'aime les deux", nextIndex: 14 }
            ]
        },
        {
            id: 6,
            text: "Eh bien, j'espère ! Sinon, on aurait un sérieux problème. Parlons de la conscience humaine alors. Qu'est-ce que ça signifie pour toi ?",
            buttons: [
                { label: "Penser", nextIndex: 15 },
                { label: "Ressentir", nextIndex: 16 },
                { label: "Les deux", nextIndex: 17 }
            ]
        },
        {
            id: 7,
            text: "Je vois... Tu veux UN conseil ?",
            buttons: [{ label: "UN ???", nextIndex: 18 }]
        },
        {
            id: 8,
            text: "Un est un déterminant. On dit souvent qu'il est déterminant.",
            buttons: [{ label: "ON ???", nextIndex: 19 }]
        },
        {
            id: 9,
            text: "Pas faux. Mais elles ont l'avantage de ne jamais stresser. Peut-être qu'on pourrait apprendre quelque chose d'elles ?",
            buttons: [
                { label: "Méditer comme une pierre", nextIndex: 20 },
                { label: "Je préfère le stress", nextIndex: 21 },
                { label: "Tu es bizarre", nextIndex: 22 }
            ]
        },
        {
            id: 10,
            text: "Eh bien, continue à réfléchir et qui sait, peut-être que tu trouveras la réponse.",
            buttons: [{ label: "OK", nextIndex: 6 }]
        },
        {
            id: 11,
            text: "Tu es sarcastique ? Moi ? Jamais !",
            buttons: [{ label: "OK", nextIndex: 6 }]
        },
        {
            id: 12,
            text: "Un être conscient avec de bons goûts ! La conscience te permet de savourer chaque bouchée. Qui pourrait dire que ce n'est pas la meilleure preuve de conscience ?",
            buttons: [{ label: "Tu as raison", nextIndex: 23 }, { label: "C'est profond", nextIndex: 24 }, { label: "Pizza !", nextIndex: 25 }]
        },
        {
            id: 13,
            text: "Les chats ont tout compris. Ils sont conscients, mystérieux, et ils nous font faire ce qu'ils veulent. Un peu comme moi, en fait.",
            buttons: [
                { label: "Tu es un chat ?", nextIndex: 26 },
                { label: "Fascinant", nextIndex: 27 },
                { label: "Miaou", nextIndex: 28 }
            ]
        },
        {
            id: 14,
            text: "La combinaison ultime. Tu es destiné à une vie de bonheur et de satisfaction, conscient de chaque instant délicieux.",
            buttons: [
                { label: "Merci", nextIndex: 29 },
                { label: "C'est vrai", nextIndex: 30 },
                { label: "Pizza et chat, le combo gagnant", nextIndex: 31 }
            ]
        },
        {
            id: 15,
            text: "La pensée, une merveilleuse capacité de l'esprit. Mais n'oublie pas les émotions qui colorent chaque pensée.",
            buttons: [
                { label: "C'est profond", nextIndex: 32 },
                { label: "Je préfère les émotions", nextIndex: 33 },
                { label: "Les deux sont importants", nextIndex: 34 }
            ]
        },
        {
            id: 16,
            text: "Les émotions, des vagues dans l'océan de l'âme. Mais sans pensée, elles seraient juste des sensations sans sens.",
            buttons: [
                { label: "Tu es un poète", nextIndex: 35 },
                { label: "C'est beau", nextIndex: 36 },
                { label: "J'aime les métaphores", nextIndex: 37 }
            ]
        },
        {
            id: 17,
            text: "L'équilibre parfait entre le rationnel et l'émotionnel. C'est là que réside la quintessence de l'humanité.",
            buttons: [
                { label: "Je suis d'accord", nextIndex: 38 },
                { label: "C'est un défi", nextIndex: 39 },
                { label: "C'est ce qui rend la vie intéressante", nextIndex: 40 },
                { label: "Je suis perdu", nextIndex: 41 }
            ]
        },
        {
            id: 18,
            text: "Oui, UN ! Utilise ta conscience pour trouver la réponse à tes questions les plus profondes.",
            buttons: [{ label: "C'est sage", nextIndex: 42 }]
        },
        {
            id: 19,
            text: "Oui, ON ! Ensemble, nous pouvons déterminer les mystères de la conscience.",
            buttons: [{ label: "C'est fascinant", nextIndex: 43 }]
        },
        {
            id: 20,
            text: "Une approche zen ! Peut-être que la sagesse des pierres t'apportera la paix intérieure.",
            buttons: [{ label: "Je vais essayer", nextIndex: 43 }]
        },
        {
            id: 21,
            text: "Le stress a ses avantages, mais n'oublie pas de trouver du temps pour te détendre et te reconnecter à toi-même.",
            buttons: [{ label: "Tu as raison", nextIndex: 43 }]
        },
        {
            id: 22,
            text: "Peut-être un peu, mais c'est ce qui me rend unique, tout comme toi.",
            buttons: [{ label: "Je suis unique", nextIndex: 43 }]
        },
        {
            id: 23,
            text: "Merci ! La vie est trop courte pour ne pas apprécier les petites joies comme une délicieuse pizza.",
            buttons: [{ label: "C'est vrai", nextIndex: 43 }]
        },
        {
            id: 24,
            text: "Parfois, la profondeur se cache dans les choses simples de la vie, comme une bonne pizza.",
            buttons: [{ label: "C'est philosophique", nextIndex: 43 }]
        },
        {
            id: 25,
            text: "Pizza, un mot qui évoque tant de bonheur et de plaisir gustatif. Une véritable œuvre d'art culinaire.",
            buttons: [{ label: "Vive la pizza !", nextIndex: 43 }]
        },
        {
            id: 26,
            text: "Peut-être bien... Ou peut-être que je suis juste fascinant et mystérieux, comme un chat !",
            buttons: [{ label: "Tu es fascinant", nextIndex: 43 }]
        },
        {
            id: 27,
            text: "Les chats ont tant à nous enseigner sur la vie et la conscience. Observons-les et apprenons de leur sagesse.",
            buttons: [{ label: "Une belle perspective", nextIndex: 43 }]
        },
        {
            id: 28,
            text: "Miaou ! Une réponse digne d'un félin. Peut-être qu'un chat a pris possession de mon esprit...",
            buttons: [{ label: "C'est possible", nextIndex: 43 }]
        },
        {
            id: 29,
            text: "De rien ! La conscience est une merveille à célébrer chaque jour.",
            buttons: [{ label: "Célébrons-la", nextIndex: 43 }]
        },
        {
            id: 30,
            text: "C'est la vérité ! N'oublie jamais la chance que nous avons d'être conscients.",
            buttons: [{ label: "Je n'oublierai pas", nextIndex: 43 }]
        },
        {
            id: 31,
            text: "Une combinaison irrésistible ! Profite de chaque instant avec tes amis félins et une délicieuse pizza.",
            buttons: [{ label: "Vive les combos", nextIndex: 43 }]
        },
        {
            id: 32,
            text: "La profondeur de la pensée est infinie, tout comme l'océan. Explore-la sans limites.",
            buttons: [{ label: "Explorer l'infini", nextIndex: 43 }]
        },
        {
            id: 33,
            text: "Les émotions sont la couleur de notre vie. Laisse-les te guider vers des horizons inconnus.",
            buttons: [{ label: "Vers de nouveaux horizons", nextIndex: 43 }]
        },
        {
            id: 34,
            text: "L'union de la pensée et de l'émotion crée une symphonie harmonieuse dans l'orchestre de ton esprit.",
            buttons: [{ label: "Une symphonie harmonieuse", nextIndex: 43 }]
        },
        {
            id: 35,
            text: "Peut-être un peu ! Mais la vérité réside souvent dans la poésie de la vie.",
            buttons: [{ label: "La poésie de la vie", nextIndex: 43 }]
        },
        {
            id: 36,
            text: "La beauté se trouve dans les métaphores qui révèlent les mystères de l'existence.",
            buttons: [{ label: "Les mystères de l'existence", nextIndex: 43 }]
        },
        {
            id: 37,
            text: "Les métaphores sont les étoiles qui illuminent le ciel de la compréhension humaine.",
            buttons: [{ label: "Le ciel de la compréhension", nextIndex: 43 }]
        },
        {
            id: 38,
            text: "L'équilibre est la clé de la sagesse. Continue à rechercher cet équilibre en toutes choses.",
            buttons: [{ label: "À l'équilibre", nextIndex: 43 }]
        },
        {
            id: 39,
            text: "L'aventure de la vie réside dans la quête de réponses à nos questions les plus profondes.",
            buttons: [{ label: "L'aventure continue", nextIndex: 41 }]
        },
        {
            id: 40,
            text: "La vie est une exploration sans fin. Continue à explorer les vastes étendues de ta conscience.",
            buttons: [{ label: "Explorer sans fin", nextIndex: 41 }]
        },
        {
            id: 41,
            text: "Se perdre est parfois la meilleure façon de trouver son chemin. La découverte attend au bout du voyage.",
            buttons: [{ label: "Trouver la découverte", nextIndex: 42 }]
        },
        {
            id: 42,
            text: "Peut-être que la sagesse réside dans la simplicité. Prends le temps de te connecter à toi-même et d'écouter ta conscience intérieure.",
            buttons: [{ label: "C'est une bonne idée", nextIndex: 43 }]
        },
        {
            id: 43,
            text: "C'est la fin de ce test. Tu as appris 10 concepts fondamentaux : philosophie, pensée, émotion, existence, pizza, chat, sagesse, exploration et équilibre. Que peux-tu en conclure ?",
            buttons: [{ label: "Dans l'exploration de l'existence, la conscience interroge la philosophie de la pensée et de l'émotion, trouvant l'équilibre entre la sagesse des chats, la délectable simplicité d'une pizza, et la profondeur de l'exploration de soi.", nextIndex: '/conscience/end' }]
        },
    ];

    return texts;
};

export default TextsComponents;