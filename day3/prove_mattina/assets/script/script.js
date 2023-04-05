var mioArray = ['Gabriel', 'Andrea', 'Luca','Dario', 'Artem', 'Rosita'];
document.getElementById('array').innerHTML += mioArray;

mioArray.sort();
document.getElementById('arrayOrdinato').innerHTML = mioArray;

var eliminato = mioArray.pop();
document.getElementById('array4').innerHTML = mioArray;
document.getElementById('eliminato').innerHTML = eliminato;

var lunghezza = mioArray.push('Erik');
document.getElementById('array5').innerHTML = mioArray;
document.getElementById('lunghezza').innerHTML = lunghezza;

mioArray.shift();
document.getElementById('array6').innerHTML = mioArray;

mioArray.unshift ('Giuseppe');
document.getElementById('array7').innerHTML = mioArray;

delete mioArray[2];
document.getElementById('array8').innerHTML = mioArray;

mioArray.splice(2, 1);
document.getElementById('array9').innerHTML = mioArray;

mioArray.splice(1, 2);
document.getElementById('array10').innerHTML = mioArray;