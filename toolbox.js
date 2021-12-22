/* var readline = require("readline-sync");
 */
var toolbox = {
  /**
   * Permet de saisir des commentaires
   * @param {String} txt
   * @returns
   */
  /*  saisirString: function (txt) {
    return readline.question(txt);
  }, */
  /**
   * Initialise un tableau de tableau
   * @param {number} nbLigne
   * @param {number} nbColonne
   * @param {any} car
   * @returns
   */
  initialiseBoard: function (nbLigne, nbColonne, car = 0) {
    var tab = [];
    for (let i = 0; i < nbLigne; i++) {
      var ligne = [];
      for (let k = 0; k < nbColonne; k++) {
        ligne.push(car);
      }
      tab.push(ligne);
    }
    return tab;
  },
};
/* 
module.exports = toolbox; */
