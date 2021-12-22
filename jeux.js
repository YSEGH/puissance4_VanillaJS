/* var toolbox = require("./toolbox");
var main = require("./main"); */

var jeux = {
  puissance4: [],
  nbColonne: 7,
  nbLigne: 6,

  /**
   * Permet d'afficher un tableau de puissance 4
   * @returns
   */
  afficherPuissance4: function () {
    const jeux = document.querySelector("#jeux");
    console.log(jeux);
    var content = "<table>";
    for (let i = 0; i < this.puissance4.length; i++) {
      content += "<tr>";
      for (let k = 0; k < this.puissance4[i].length; k++) {
        content +=
          "<td class='border text-center' style='width:100px; height:100px'>";
        if (this.puissance4[i][k] === 0) {
          content += "<div class='' style='width:100%; height:100%'></div>";
        } else if (this.puissance4[i][k] === 1) {
          content +=
            "<div class='bg-success' style='width:100%; height:100%'></div>";
        } else if (this.puissance4[i][k] === 2) {
          content +=
            "<div class='bg-danger' style='width:100%; height:100%'></div>";
        }

        content += "</td>";
      }
      content += "</tr>";
    }
    content += "<tr>";
    for (let i = 0; i < this.nbColonne; i++) {
      content += `<td><button type='button' class='btn btn-primary' onClick='jouer(${
        i + 1
      })'>Colonne ${i + 1}</button></td>`;
    }
    content += "</tr>";
    content += "</table>";

    jeux.innerHTML = content;

    /* for (let i = 0; i < this.puissance4.length; i++) {
      var ligne = "";
      for (let k = 0; k < this.puissance4[i].length; k++) {
        ligne += "| ";
        if (this.puissance4[i][k] === 0) {
          ligne += "_";
        } else if (this.puissance4[i][k] === 1) {
          ligne += this.player1Car;
        } else if (this.puissance4[i][k] === 2) {
          ligne += this.player2Car;
        }
        ligne += " |";
      }
      console.log(ligne);
    } */
  },
  /**
   * Fonction permettant de retourner la première ligne vide d'une colonne
   * @param {number} colonne Retourne -1 si la colonne est pleine
   * @returns
   */
  recupererLigneVide: function (colonne) {
    for (let i = this.nbLigne - 1; i >= 0; i--) {
      if (this.verifierCaseVide(i, colonne)) {
        return i;
      }
    }
    return -1;
  },

  /**
   * Fonction permettant de retourner si une cellule est vide.
   * @param {number} ligne
   * @param {number} colonne
   * @returns
   */
  verifierCaseVide: function (ligne, colonne) {
    return this.puissance4[ligne][colonne - 1] === 0;
  },

  /**
   * Fonction permettant de vérifier si un joueur a gagné.
   * @param {Number} player
   * @returns
   */
  verifierFinJeu: function (player) {
    if (
      this.puissance4Ligne(player) ||
      this.puissance4Colonne(player) ||
      this.puissance4Diagonale(player)
    ) {
      return true;
    }
    return false;
  },
  /**
   * Vérifie si un joueur a gagné en en ligne.
   * @param {number} player
   * @returns
   */
  puissance4Ligne: function (player) {
    for (let i = this.nbLigne - 1; i >= 0; i--) {
      for (let k = 0; k < this.nbColonne - 3; k++) {
        if (
          this.puissance4[i][k] === player &&
          this.puissance4[i][k + 1] === player &&
          this.puissance4[i][k + 2] === player &&
          this.puissance4[i][k + 3] === player
        ) {
          return true;
        }
      }
    }
    return false;
  },

  /**
   * Vérifie si un joueur a gagné en en colonne.
   * @param {number} player
   * @returns
   */
  puissance4Colonne: function (player) {
    for (let i = this.nbLigne - 1; i >= 3; i--) {
      for (let k = 0; k < this.nbColonne; k++) {
        if (
          this.puissance4[i][k] === player &&
          this.puissance4[i - 1][k] === player &&
          this.puissance4[i - 2][k] === player &&
          this.puissance4[i - 3][k] === player
        ) {
          return true;
        }
      }
    }
    return false;
  },
  /**
   * Vérifie si un joueur a gagné en diagonal.
   * @param {number} player
   * @returns
   */
  puissance4Diagonale: function (player) {
    for (let i = this.nbLigne - 1; i >= 3; i--) {
      for (let k = 0; k < this.nbColonne; k++) {
        if (
          this.puissance4[i][k] === player &&
          this.puissance4[i - 1][k + 1] === player &&
          this.puissance4[i - 2][k + 2] === player &&
          this.puissance4[i - 3][k + 3] === player
        ) {
          return true;
        } else if (
          this.puissance4[i][k] === player &&
          this.puissance4[i - 1][k - 1] === player &&
          this.puissance4[i - 2][k - 2] === player &&
          this.puissance4[i - 3][k - 3] === player
        ) {
          return true;
        }
      }
    }
    return false;
  },

  jouerCase: function (joueurEnCours, ligneVide, colonne) {
    this.puissance4[ligneVide][colonne - 1] = joueurEnCours;
  },
};
