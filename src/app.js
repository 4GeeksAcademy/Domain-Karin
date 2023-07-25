/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello World!");

  let pronoun = [" the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net", ".us", ".io"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let e = 0; e < adj.length; e++) {
      for (let f = 0; f < noun.length; f++) {
        for (let g = 0; g < domain.length; g++) {
          console.log(pronoun[i] + adj[e] + noun[f] + domain[g]);
        }
      }
    }
  }
};
