/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "a"];
  let adj = ["great", "big", "wonderful", "scary"];
  let noun = ["jogger", "racoon", "dragon", "dog"];
  let ext = [".com", ".net", "es", ".org", ".uy"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let h = 0; h < ext.length; h++) {
          console.log(pronoun[i] + adj[j] + noun[k] + ext[h]);
        }
      }
    }
  }
};