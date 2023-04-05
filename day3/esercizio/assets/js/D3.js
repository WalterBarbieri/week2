/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/*mia esecuzione*/
{
  let nIntero1 = 4;
  let nIntero2 = 7;
  let nMaggiore;
  nMaggiore = (nIntero1 > nIntero2) ? 'nIntero1 è più grande' : 'nIntero2 è più grande';
  document.getElementById('esercizio1').innerHTML = nMaggiore;

}
/*esecuzione Dario*/
{
  let x = 4;
  let y = 7;
  if (x > y) {
    console.log('Il numero più grande è', x);
  } else if (x < y) {
    console.log('Il numero più grande è', y);
  } else {
    console.log('I numeri sono uguali');
  }
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*mia esecuzione*/
{
  let nIntero3 = 6;
  let nCinque;
  nCinque = (nIntero3 == 5) ? 'Equal' : 'Not equal';
  console.log(nCinque);
}
/*esecuzione Dario*/
{
  let x = 7;
  if (x !== 5) {
    console.log('not equal');
  }
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*mia esecuzione*/
{
  let nIntero4 = 10;
  let risultato = (nIntero4 % 5);
  if (risultato > 0) {
    console.log('non divisibile per 5');
  } else {
    console.log('divisibile per 5');
  }
}
/*esecuzione Dario*/
{
  let x = 15;
  if (x % 5 === 0) {
    console.log('divisibile per 5');
  }
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*mia esecuzione*/
{
  let nIntero5 = 16;
  let nIntero6 = 8;
  let uguaglianza1;
  uguaglianza1 = (nIntero5 == 8 || nIntero6 == 8) ? 'Uno dei valori è uguale a 8.' : 'Nemmeno uno dei valori è uguale a 8.'
  let somma = nIntero5 + nIntero6;
  let sottrazione = nIntero5 - nIntero6;
  let uguaglianza2;
  uguaglianza2 = (somma == 8 || sottrazione == 8) ? 'La somma o sottrazione è uguale a 8.' : 'Né la somma né la sottrazione sono uguali a 8.';
  document.getElementById('esercizio4').innerHTML = uguaglianza1 + ' ' + uguaglianza2;
}
/*esecuzione Dario*/
{
  let y = 10;
  let y1 = 2;
  if (y === 8 || y1 === 8 || y + y1 === 8 || y - y1 === 8 || y1 - y === 8) {
    console.log('verificato');
  } else {
    console.log('non verificato');
  }
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*mia esecuzione*/
{
  let totalShoppingCart = 45; /* inserire valore per avere totale*/
  let shippingcost = 10;
  let checkout;
  if (totalShoppingCart > 50) {
    checkout = totalShoppingCart;
  } else {
    checkout = (totalShoppingCart + shippingcost);
  }
  document.getElementById('esercizio5').innerHTML = checkout;
}
/*esecuzione Dario*/
{
  let totalShoppingCart = 45;
  let shippingCost = 10;
  let amountToPay = totalShoppingCart;
  if (totalShoppingCart < 50) {
    amountToPay += shippingCost;
  }
  console.log('Totale da pagare: ', amountToPay);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/*mia esecuzione*/
{
  let totalShoppingCart = 65; /* inserire valore per avere totale*/
  let blackfridaydiscount = 20;
  let blackFriday = totalShoppingCart - [(blackfridaydiscount / 100) * totalShoppingCart];
  let shippingcost = 10;
  let checkout;
  if (blackFriday > 50) {
    checkout = blackFriday;
  } else {
    checkout = (blackFriday + shippingcost);
  }
  document.getElementById('esercizio6').innerHTML = checkout;
}
/*esecuzione Dario*/
{
  let totalShoppingCart = 65;
  totalShoppingCart = totalShoppingCart * 0.8;
  let amountToPay = totalShoppingCart;
  if (totalShoppingCart < 50) {
    amountToPay += shippingCost;
  }
  console.log('Totale da pagare: ', amountToPay);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*esecuzione Dario*/
{
  let z1 = 6;
  let z2 = 14;
  let z3 = 10;
  if (z1 > z2) {
    if (z3 > z1) {
      console.log('z3, z1, z2');
    } else if (z3 > z2) {
      console.log('z1, z3, z2');
    } else {
      console.log('z1, z2, z3');
    }
  } else if (z3 > z2) {
    console.log('z3, z2, z1');
  } else if (z3 > z1) {
    console.log('z2, z3, z1');
  } else {
    console.log('z2, z1, z3');
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/*esecuzione Dario*/
{
  let test = 'Ciao';
  if (typeof test === Number) {
    console.log('è un numero');
  } else {
    console.log('non è un numero');
  }
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*esecuzione Dario*/
{
  let test = 31;
  if (test % 2 === 0) {
    console.log('è un numero pari!');
  } else {
    console.log('è un numero dispari!');
  }
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/*esecuzione Dario*/
{
  let val = 7
  if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/



const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = 'Toronto';
console.log(me);
document.getElementById('esercizio11').innerHTML = `${me.name}, ${me.lastName}, ${me.city}, My skills: , ${me.skills[0]},${me.skills[1]},${me.skills[2]},`;




/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

me.lastName = '';
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/


me.skills.pop();
console.log(me);


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let myArray = [];
myArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(myArray);
document.getElementById('array1').innerHTML = myArray;

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

myArray[9] = 100;
console.log(myArray);
document.getElementById('array2').innerHTML = myArray;
