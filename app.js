let afficherChoixComputeur = document.getElementById('choixOrdi')
let choixJoueur = document.getElementById('choixUtilisateur')
let afficherRésultat = document.getElementById('résultat')
let bouton = document.querySelectorAll('button')
let boutonCliqué
let choixComputeur
let résultat
let afficherScoreDuJoueur = document.getElementById('scoreJoueur')
let scoreDuJoueur = 0
let afficherScoreOrdi = document.getElementById('scoreOrdi')
let scoreOrdi = 0

bouton.forEach (bouton => bouton.addEventListener("click",(e)=>{
    boutonCliqué=e.target.id
    choixJoueur.innerHTML = boutonCliqué
    choixOrdi()
    funcRésultat()
}))

function choixOrdi(){
    let numRandom = Math.floor(Math.random()*3)+1

    if(numRandom===1){
        choixComputeur='Papier'
    }else if(numRandom===2){
        choixComputeur='Caillou'
    }else if(numRandom===3){
        choixComputeur='Ciseaux'
    }

    afficherChoixComputeur.innerHTML = choixComputeur
}

function funcRésultat(){
    if(boutonCliqué==="Papier" && choixComputeur==="Caillou"){
        résultat ='Gagner'
        scoreDuJoueur ++
    }
    if(boutonCliqué==="Papier" && choixComputeur==="Ciseaux"){
        résultat = 'Perdu'
        scoreOrdi ++
    }
    if(boutonCliqué==="Caillou" && choixComputeur==="Papier"){
        résultat = 'Perdu'
        scoreOrdi ++
    }
    if(boutonCliqué==="Caillou" && choixComputeur==="Ciseaux"){
        résultat ='Gagner'
        scoreDuJoueur ++
    }
    if(boutonCliqué==="Ciseaux" && choixComputeur==="Caillou"){
        résultat = 'Perdu'
        scoreOrdi ++
    }
    if(boutonCliqué==="Ciseaux" && choixComputeur==="Papier"){
        résultat ='Gagner'
        scoreDuJoueur ++
    }
    if(boutonCliqué===choixComputeur){
        résultat='Nul'
    }
    afficherRésultat.innerHTML = résultat
    afficherScoreDuJoueur.innerHTML = scoreDuJoueur
    afficherScoreOrdi.innerHTML = scoreOrdi
}