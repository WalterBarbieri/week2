document.getElementById('saluto').innerHTML = 'ciao!'; //2
document.write('<h3>Questo andrà fuori formattazione</h3>') //6
alert(8 + 7); //1
var valore = 15; //3
console.log(valore); //4
console.log(valore + 15); //5

//commento a riga singola
/*commento a riga multipla*/

numero = 5;
document.getElementById('numero').innerHTML = numero;
document.getElementById('somma').innerHTML = numero + 5;
var altroTesto = 'numero5';
document.getElementById('altroTesto').innerHTML = altroTesto;
function riassegna() {
    altroTesto = 'Ho cambiato il valore';
    document.getElementById('altroTesto').innerHTML = altroTesto;
}
setTimeout(riassegna, 2000);
function clicca() {
    document.write('BRAVO')
}
var nome;
if (nome === undefined) {
    document.getElementById('errore').innerHTML = 'La variabile è undefined';
} else {
    document.getElementById('errore').innerHTML = 'Il valore della variabile è' + nome;
}
