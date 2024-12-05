// J'appelle l'URL du site ou du fichier JSON qui me fournira les données
fetch("sneakers.json")
    .then((response) => {
        // La réponse obtenue n'est pas exploitable directement
        // Il faut la transformer en JSON
        return response.json();
    })
    .then((données) => {
        console.log(données);
        // "recettes" est un tableau contenant plusieurs recettes
        // Je boucle dessus et pour chaque recette :
        // Je l'affiche dans ma page web
        données.produits.forEach((produits) => {
            afficher(produits);
        });
    });

// Fonction pour afficher les produits dans la page
function afficher(produits) {
    // Extraction des données du produit
    let nom = produits.nom; // Nom du produit
    let description = produits.description; // description du produit
    let image = produits.image; // image du produit

    // Construction de la carte HTML pour un produit
    let carte = `
        <div class="produits">
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
