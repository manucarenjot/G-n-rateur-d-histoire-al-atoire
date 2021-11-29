const champs = document.getElementById('champs');
const generateur = document.querySelector('button');
const history = document.getElementById('history');


let nom = ['jocelyn', 'Jackie', 'Django', 'Paprika', 'Ada'];
let objet = ['crayon', 'souris', 'ordinateur', 'batte de baseball', 'sac à dos'];
let verbes = ['ai', 'rentre', 'fait', 'cour', 'parle', 'utilise', 'frappe', 'Nage'];
let temperatures = ['-8000°', '7°', '59°', '1°', '-15°'];
let lieux = ['le kebab de Jackie', ' Groenland', 'Ogoudou', 'Bourg Palestine', 'Zereth Mortis'];





function generer(){
    const newHistory = document.createElement('p');
    history.appendChild(newHistory);
    let randomNom = Math.round(Math.random() * nom.length );

    newHistory.innerHTML = nom[randomNom] + '' + objet[rand2]+ '' + temperatures[rand2]+ '' + lieux[rand2]+ '' + verbes[rand2];
}

generateur.addEventListener("click", function (e){
    generer()
})


