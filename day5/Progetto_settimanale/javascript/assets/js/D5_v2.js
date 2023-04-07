/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
for (let i = 0; i < 4; i++) {
  let elemento = pets[i];
  console.log(elemento);
}


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets" e stampa l'array ordinato in console.
*/

console.log(pets.sort());


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log(pets.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione e stampa l'array in console.
*/

var pets2 = pets.shift();
pets.push(pets2);
console.log(pets);


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta e stampa l'array in console.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars.forEach((element) => {
  element.licensePlate = 'AB012CD';
  console.log(cars);
});



/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto e stampa l'array in console.
*/

var clio = {
  brand: 'Renault',
  model: 'Clio',
  color: 'gray',
  trims: ['titanium', 'active'],
  licensePlate: 'AB012CD',
}
cars.push(clio);
cars.forEach((element) => {
  return element.trims.pop();
})
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito e stampa in console l'array justTrims così popolato.
*/
const justTrims = []
cars.forEach((element) => {
  let trims = element.trims[0];
  console.log(trims);
})

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < 4; i++) {
  let uno = cars[i];
  let firstLetter = uno.color.charAt(0);
  if (firstLetter === 'b') {
    console.log('Fizz');
  } else {
    console.log('Buzz')
  }
}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32 escluso.
*/

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
numericArray.length = 14;
let i = 0;
console.log(numericArray.length);
while (i < numericArray.length) {
  let partialArray = numericArray[i];
  i++;
  console.log(partialArray.length);
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/


const charactersArray = ['g', 'n', 'u', 'z', 'd']

for (let i = 0; i < charactersArray.length; i++) {
  const character = charactersArray[i];

  const numero = {};

  switch (character) {
    case 'a':
      console.log(1);
      break;
    case 'b':
      console.log(2);
      break;
    case 'c':
      console.log(3);
      break;
    case 'd':
      console.log(4);
      break;
    case 'e':
      console.log(5);
      break;
    case 'f':
      console.log(6);
      break;
    case 'g':
      console.log(7);
      break;
    case 'h':
      console.log(8);
      break;
    case 'i':
      console.log(9);
      break;
    case 'l':
      console.log(10);
      break;
    case 'm':
      console.log(11);
      break;
    case 'n':
      console.log(12)
      break;
      case 'o':
      console.log(13);
      break;
      case 'p':
      console.log(14);
      break;
      case 'q':
      console.log(15);
      break;
      case 'r':
      console.log(16);
      break;
      case 's':
      console.log(17);
      break;
      case 't':
      console.log(18);
      break;
      case 'u':
      console.log(19);
      break;
      case 'v':
      console.log(20);
      break;
      case 'z':
      console.log(21);
      break;
  }
}

