//-----------PARTIE 1-------
//EXERCICE 1
document.querySelector("h1").innerHTML="Les attributs class et id";
//console.log(titre);
//EXERCICE 2
document.querySelector("h2").innerHTML="Exercice 2 partie A";
//console.log(titre1);

//EXERCICE 3
let h2 = document.querySelectorAll("h2");
h2[1].innerHTML = "Exercice 2 partie B";

//EXERCICE 4
document.querySelector("p").innerHTML = `L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> `;

//EXERCICE 5
let p = document.querySelectorAll("p");
p[1].innerHTML =  `La manipulation de l'attribut Style peut-être une <i>solution</i> rapide`;

//-----------PARTIE 2.1-------
//EXERCICE 6
document.querySelector("h1").id = "bigTitle";

//EXERCICE 7
document.querySelector("div").className = "container";

//EXERCICE 8
h2.forEach(element => {
    element.classList.add("title")
})
console.log(h2);
//EXERCICE 9
p.forEach(element => {
    element.classList.add("text")
})

//-----------PARTIE 2.2-------
//EXERCICE 10
let section1= document.querySelector("section")
section1.classList.add("margin-bottom", "border-black", "padding");

//EXERCICE 11
let section2 = section1.nextElementSibling;
section2.classList.add("margin-top", "border-black", "padding");

//EXERCICE 12
document.querySelectorAll("div")[1].classList.add("fond" )