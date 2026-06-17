
function ajouterLaTacheGlb(){
    const libelleInput = document.getElementById('libelle').value;
    const difficulteSelect  = document.getElementById('difficulte').value;

    ajouterTache(libelleInput, difficulteSelect);


    document.getElementById('libelle').value= '';

}
// tache
const accomplissement = {
    "xp" : 0,
    "or": 0,
    "hp":95,
}
const taches = [];

function ajouterTache(libelle,difficulte){
    taches.push({
        id :Date.now(),
        accomplie: false,
        libelle,
        difficulte
    })
    
    afficherTache(taches)
}

function afficherTache(taches){

    document.getElementById("resultat").innerHTML = taches.map(tache =>`
    <div class="lestaches">  
             <h3 id="tache">Nom de la tache:${tache.libelle}</h3>
            <p id="difficulte">Difficulté:${tache.difficulte}</p>
          
    </div>`);    
    }


// accomplisTache

function accomplisTache(index){

    if(difficulte === facile){
        xp = 10;
        or = 5;
    } else if(difficulte === moyen){
        xp = 20;
        or = 10;
    } else{
        xp = 30;
        or = 15;
    }
}

// supprimerTache




