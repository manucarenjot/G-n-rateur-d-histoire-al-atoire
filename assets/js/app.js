const champs = document.getElementById('champs');
const generateur = document.querySelector('button');
const history = document.getElementById('history');

console.log(champs.value)

let nom = ['jocelyn', 'Jackie', 'Django', 'Paprika', 'Ada'];
let objet = ['crayon', 'souris', 'ordinateur', 'batte de baseball', 'sac à dos'];
let verbes = ['ai', 'rentre', 'fait', 'cour', 'parle', 'utilise', 'frappe', 'Nage'];
let temperatures = ['-8000°', '7°', '59°', '1°', '-15°'];
let lieux = ['le kebab de Jackie ', ' Groenland', 'Ogoudou', 'Bourg Palestine', 'Zereth Mortis'];





function generer(){
    const newHistory = document.createElement('p');
    history.appendChild(newHistory);
    let randomNom = Math.round(Math.random() * nom.length );
    let randomObjet = Math.round(Math.random() * objet.length);
    console.log(randomObjet);
    let randomVerbes = Math.round(Math.random() * verbes.length);
    let randomTemperatures = Math.round(Math.random()* temperatures.length);
    let randomLieux =  Math.round(Math.random()* lieux.length);


    newHistory.innerHTML = nom[randomNom] + ' ' + verbes[randomVerbes] + ' ' + objet[randomObjet] + ' ' + temperatures[randomTemperatures] + ' ' + lieux[randomLieux]+ ' ' + verbes[randomVerbes];
}

generateur.addEventListener("click", function (e){
    generer()
})


