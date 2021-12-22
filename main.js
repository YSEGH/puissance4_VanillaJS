const tour = document.querySelector("#tour");
const alert = document.querySelector(".alert");
const joueur1 = document.querySelector("#joueur1");
const joueur2 = document.querySelector("#joueur2");
const divPointJ1 = document.querySelector(".pointJ1");
const divPointJ2 = document.querySelector(".pointJ2");

var joueurEnCours = 1;
var finJeu = false;

var pointJ1 = 0;
var pointJ2 = 0;

initialisationTableau();

function jouer(colonne) {
  if (!finJeu) {
    var ligneVide = jeux.recupererLigneVide(colonne);

    if (ligneVide >= 0) {
      jeux.jouerCase(joueurEnCours, ligneVide, colonne);
      jeux.afficherPuissance4();

      if (jeux.verifierFinJeu(joueurEnCours)) {
        gererFinJeu();
      }

      if (joueurEnCours === 1) {
        joueurEnCours = 2;
        tour.innerHTML = "Tour du joueur 2";
      } else {
        joueurEnCours = 1;
        tour.innerHTML = "Tour du joueur 1";
      }
    }
  }
}

function initialisationTableau() {
  finJeu = false;
  alert.style.display = "none";
  jeux.puissance4 = toolbox.initialiseBoard(jeux.nbLigne, jeux.nbColonne, 0);
  jeux.afficherPuissance4();
}

function gererFinJeu() {
  finJeu = true;
  if (joueurEnCours === 1) {
    pointJ1++;
    divPointJ1.innerHTML = `Point(s) : ${pointJ1}`;
  } else {
    pointJ2++;
    divPointJ2.innerHTML = `Point(s) : ${pointJ2}`;
  }
  var contentAlert = `Partie terminée ! Le gagnant est le joueur ${joueurEnCours}`;
  contentAlert +=
    '<button type="button" class="btn btn-secondary" style="margin-left: 2rem;" onClick="initialisationTableau()" >Recommencer</button>';
  alert.style.display = "block";
  alert.innerHTML = contentAlert;
}
