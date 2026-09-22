const prompt = require ('prompt-sync')();
const Rectangle ={
    Longeur : 10 ,
    Largeur : 5 ,
};
function Calcul (Rectangle){
    return(Rectangle.Longeur*Rectangle.Largeur);
}
console.log(Calcul(Rectangle));