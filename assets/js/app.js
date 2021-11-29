const champs = document.getElementById('champs');
const generateur = document.querySelector('button');
const history = document.getElementById('history');



let nom = ['jocelyn', 'Jackie', 'Django', 'Paprika', 'Eric Zemmour'];
let nom2 = ['Ada', 'Jean-Marie Bigard', 'pikachu']
let objet = ['un crayon', 'une souris', 'un ordinateur', 'une batte de baseball', ' un sac à dos', 'une raclette'];
let verbes = ['ont', 'rentre', 'font', 'cours', 'parle', 'utilisent', 'frappes', 'Nagent'];
let temperatures = ['-8000°', '7°', '59°', '1°', '-15°'];
let lieux = [' Yaoundé ', ' Groenland', 'Ogoudou', 'Bourg Palestine', 'Zereth Mortis'];





function generer(){
    const newHistory = document.createElement('p');
    history.appendChild(newHistory);
    let randomNom = Math.round(Math.random() * nom.length);
    let randomNom2 = Math.round(Math.random() * nom2.length);
    let randomObjet = Math.round(Math.random() * objet.length);
    let randomVerbes = Math.round(Math.random() * verbes.length);
    let randomTemperatures = Math.round(Math.random()* temperatures.length);
    let randomLieux =  Math.round(Math.random()* lieux.length);



    newHistory.innerHTML =   nom[randomNom] + ' et '+ nom2[randomNom] + ' '+ verbes[randomVerbes] + ' avec ' + objet[randomObjet] + ' alors qu il fait ' + temperatures[randomTemperatures] + ' à ' + lieux[randomLieux]+ ' ' + champs.value;
}

generateur.addEventListener("click", function (e){
    generer()
})


