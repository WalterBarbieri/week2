/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

document.getElementById('datatypes').innerHTML = ('Principali Data Types');
document.getElementById('forte').innerHTML = ('Tipizzazione Forte');
document.getElementById('uno').innerHTML = ('Il tipo di dato deve essere necessariamente essere indicato tramite keyword.');
document.getElementById('debole').innerHTML = ('Tipizzazione Debole');
document.getElementById('due').innerHTML = ('Il tipo di dato <b>non</b> deve essere necessariamente essere indicato tramite keyword.');
document.getElementById('statica').innerHTML = ('Tipizzazione Statica');
document.getElementById('tre').innerHTML = ('La variabile <b>non</b> può modificare il tipo di dato assegnato.');
document.getElementById('dinamica').innerHTML = ('Tipizzazione Dinamica');
document.getElementById('quattro').innerHTML = ('La variabile può modificare il tipo di dato assegnato.');
document.getElementById('tipi').innerHTML = ('Tipologie:');
document.getElementById('lista').innerHTML = ('<li>Stringa: sequenza di caratteri</li><li>Numerico</li><li>Booleano: true o false</li>');


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

var name = 'Walter';
document.getElementById('esercizio2').innerHTML = name;


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

var numeroUno = 12;
var numeroDue = 20;
document.getElementById('esercizio3').innerHTML = numeroUno + numeroDue;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12;
document.getElementById('esercizio4').innerHTML = x;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = 'Barbieri';
document.getElementById('esercizio5').innerHTML = name;
const piGreco = 3.14;
console.log(piGreco);
/* piGreco = 2;
console.log(piGreco); se attivo funziona crea errore "Uncaught TypeError: Assignment to constant variable.
    at D2.js:62:9" e non visualizza ciò che viene dopo.
*/



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

var numeroTre = 4;
document.getElementById('esercizio6').innerHTML = numeroTre - x;


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var name1 = 'john';
var name2 = 'John';
