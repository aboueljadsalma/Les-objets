const Livre ={
    Titre : 'Youcode',
    Auteur : 'Abdel',
    Année : 2018
};
function Informations(Livre){
    return (`Titre: ${Livre.Titre} 
Auteur: ${Livre.Auteur} 
Année: ${Livre.Année}
`);
}
console.log(Informations(Livre));