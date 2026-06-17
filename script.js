function ajouterLaTacheGlb(){
    const libelleInput = document.getElementById('libelle').value;
    const difficulteSelect = document.getElementById('difficulte').value;

     if (libelleInput === '') {
        alert("Le libellé ne peut pas être vide.");
        return;
    }

    ajouterTache(libelleInput, difficulteSelect);
    document.getElementById('libelle').value = '';
}

const accomplissement = {
    xp: 0,
    or: 0,
    hp: 100,
};

const taches = [];

function ajouterTache(libelle, difficulte){
    taches.push({
        id: Date.now(),
        accomplie: false,
        libelle,
        difficulte
    });
    afficherTache(taches);
}
function afficherStats(){
    document.getElementById("statistique").innerHTML = `
        <p>XP: ${accomplissement.xp}</p>
        <p>Or: ${accomplissement.or}</p>
        <p>HP: ${accomplissement.hp}</p>
    `;
}
function accomplisTache(id){
    const tache = taches.find(t => t.id === id);

    if (tache === undefined){
        console.log("Cette tache est introuvable");
        return;
    }

    if (tache.accomplie === true){
        console.log("Cette tache est déjà accomplie");
        return;
    }

    tache.accomplie = true;

    if (tache.difficulte === "facile") {
        accomplissement.xp += 10;
        accomplissement.or += 5;
    } else if (tache.difficulte === "moyen") {
        accomplissement.xp += 20;
        accomplissement.or += 10;
    } else {
        accomplissement.xp += 30;
        accomplissement.or += 15;
    }

    afficherTache(taches); 
    afficherStats();
}

function afficherTache(taches){
    document.getElementById("resultat").innerHTML = taches.map(tache => `
        <div class="lestaches">
            <h3>Nom de la tache: ${tache.libelle}</h3>
            <p>Difficulté: ${tache.difficulte}</p>
            <p>Statut: ${tache.accomplie ? "Accomplie" : "Non accomplie"}</p>
            <button onclick="accomplisTache(${tache.id})">Valider</button>
            <button onclick="suppressionTache(${tache.id})">Supprimer</button>
        </div>
    `).join('');
}

function suppressionTache(id){
  const index = taches.findIndex(t => t.id === id);
  if(index === -1){
    return;
  }

  if(taches[index].accomplie === false){
    accomplissement.hp = Math.max(0, accomplissement.hp - 5);
  }
 

    taches.splice(index,1);
    afficherTache(taches);
    afficherStats();
}



