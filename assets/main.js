/* consegna:
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */



function numRandom(){
     return Math.floor(Math.random()* 100) +1
}

//creo 5 numeri random che non si ripetono 
let fiveNumbers = []

while( fiveNumbers.length < 5){
     let random = numRandom()

     if(!fiveNumbers.includes(numRandom)){
          fiveNumbers.push(random)
     }
}

console.log(fiveNumbers)

//mostro in pagina i numeri
for( let i = 0; i < fiveNumbers.length; i++ ){
     document.getElementById('numeriStampati').innerHTML += `<li> ${fiveNumbers[i]} </li>`
}

//scompaiono i numeri dopo 30 secondi 
setTimeout(function(){
     document.getElementById('numeriStampati').innerHTML = ''
}, 5000)

//faccio inserire con prompt i numeri dall'utente uno alla volta
setTimeout(function(){

     let numeriUtente = []

     while(numeriUtente.length < 5){
          let singoloNumero = parseInt(prompt("Inserisci un numero che hai visto prima"))

          if( !numeriUtente.includes(singoloNumero)){
               numeriUtente.push(singoloNumero)
          }
     }

     console.log(numeriUtente)

     //controllo se i due array hanno gli stessi numeri
     let indovinati = []

     for( let k=0; k < numeriUtente.length; k++){
          if(fiveNumbers.includes(numeriUtente[k])){
               indovinati.push(numeriUtente[k])
          }
     }

     //stampo il risultato
     document.getElementById('risultato').innerHTML = `hai indovinato ${indovinati.length} e sono: ${indovinati}`
}, 6000)
