// J'appelle l'URL du site ou du fichier JSON qui me fournira les données
fetch("data.json")
    .then((response) => {
        // La réponse obtenue n'est pas exploitable directement
        // Il faut la transformer en JSON
        return response.json();
    })
    .then((recettes) => {
        console.log(recettes);
        // "recettes" est un tableau contenant plusieurs recettes
        // Je boucle dessus et pour chaque recette :
        // Je l'affiche dans ma page web
        recettes.forEach((recette) => {
            afficher(recette);
        });
    });

// Fonction pour afficher une recette dans la page
function afficher(recette) {
    // Extraction des données de la recette
    let nomRecette = recette.nom; // Nom de la recette
    let image = recette.img; // Lien URL de l'image de la recette
    let difficulte = recette.difficulte; // Niveau de difficulté de la recette
    let tempCuisson = recette.tempCuisson; // Temps de cuisson
    let nbrPersn = recette.portions; // Nombre de portions
    let ingredients = recette.ingredients; // Liste des ingrédients
    let etapes = recette.etapes; // Liste des étapes

    // Construction de la liste des étapes
    let listEtapes = "";
    etapes.forEach((etape) => {
        listEtapes += `<li>${etape.numeroEtape} - ${etape.descEtape}</li>`;
    });

    // Construction de la liste des ingrédients
    let listeIngredients = "";
    ingredients.forEach((ingredient) => {
        listeIngredients += `<li>${ingredient.quantite} ${ingredient.unite} -${ingredient.aliment}</li>`;
    });

    // Construction de la carte HTML pour une recette
    let carte = `
            ///////////////MON HTML///////////////
    `;

    // Récupère le conteneur des cartes dans la page HTML
    let containerCards = document.querySelector(".recipe");
    containerCards.innerHTML += carte;
}