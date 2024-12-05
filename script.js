// J'appelle l'URL du site ou du fichier JSON qui me fournira les données
fetch("sneakers.json")
    .then((response) => {
        // La réponse obtenue n'est pas exploitable directement
        // Il faut la transformer en JSON
        return response.json();
    })
    .then((données) => {
        console.log(données);
        // "données" est un tableau contenant plusieurs données
        // Je boucle dessus et pour chaque données :
        // Je l'affiche dans ma page web
        données.produits.forEach((produits) => {
            afficherProduits(produits);
        });
        données.avantagesClients.forEach((avantageClient) => {
            afficherAvantages(avantageClient);
        });
        données.services.forEach((services) => {
            afficherServices(services);
        });
        données.temoignages.forEach((temoignages) => {
            afficherTemoignages(temoignages);
        });
        affichernomCommercial(données.nomCommercial)
        afficherphraseAccroche(données.phraseAccroche)
        affichertexteAppelAction(données.texteAppelAction)
    });

// Fonction pour afficher les produits dans la page
function afficherProduits(produits) {
    // Extraction des données du produit
    let nom = produits.nom; // Nom du produit
    let description = produits.description; // description du produit
    let image = produits.image; // image du produit

    // Construction de la carte HTML pour un produit
    let carte = `
            <div class="produit">
                <img src="assets/${image}" alt="Photo Sneaker">
                <h3>${nom}</h3>
                <p>${description}</p>
            </div>
    `;

    // Récupère le conteneur des cartes dans la page HTML
    let containerCards = document.querySelector(".produits");
    containerCards.innerHTML += carte;
}

// Fonction pour afficher les produits dans la page
function afficherAvantages(avantagesClients) {
    // Extraction des données du produit
    let image = avantagesClients.image; // image du produit
    let avantage = avantagesClients.avantage; // avantage du produit

    // Construction de la carte HTML pour un produit
    let carte = `
            <div class="client">
                <img src="assets/${image}" alt="logo des avantages">
                <p>${avantage}</p>
            </div>
    `;

    // Récupère le conteneur des cartes dans la page HTML
    let containerCards = document.querySelector(".clients");
    containerCards.innerHTML += carte;
}

// Fonction pour afficher les services dans la page
function afficherServices(services) {
    // Extraction des données du service
    let nom = services.nom; // Nom du service
    let description = services.description; // description du service

    // Construction de la carte HTML pour un service
    let carte = `
            <div class="service">
                <h3>${nom}</h3>
                <p>${description}</p>
            </div>
    `;

    // Récupère le conteneur des cartes dans la page HTML
    let containerCards = document.querySelector(".services");
    containerCards.innerHTML += carte;
}

// Fonction pour afficher les temoignages dans la page
function afficherTemoignages(temoignages) {
    // Extraction des données du temoignages
    let prenom = temoignages.prenom; // Nom du temoignages
    let typeExperience = temoignages.typeExperience; // experience du temoignages
    let commentaires = temoignages.commentaire; // commentaire du temoignages
    let note = temoignages.note; // note du temoignages

    // Construction de la carte HTML pour un produit
    let carte = `
            <div class="temoin">
                <h3>${prenom}</h3>
                <p>${typeExperience}</p>
                <p>${commentaires}</p>
                <p>${etoile(note)}</p>
            </div>
    `;

    // Récupère le conteneur des cartes dans la page HTML
    let containerCards = document.querySelector(".temoins");
    containerCards.innerHTML += carte;
}
function etoile(note) {
    return "★".repeat(note) + "☆".repeat(5 - note)
}

// Fonction pour afficher le nom de l'entreprise
function affichernomCommercial(nomCommercial) {
    // Ajoute le nom de l'entreprise à la zone du nom de l'entreprise
    document.querySelector("#nomCommercial").innerHTML = nomCommercial;
}

// Fonction pour afficher le slogan de l'entreprise
function afficherphraseAccroche(phraseAccroche) {
    // Ajoute le slogan à la zone du slogan
    document.querySelector("#phraseAccroche").innerHTML = phraseAccroche;
}

// Fonction pour afficher le bouton
function affichertexteAppelAction(texteAppelAction) {
    // Ajoute le bouton à la zone du bouton
    document.querySelector("#texteAppelAction").innerHTML = texteAppelAction;
}