const btn = document.getElementById('verifica');
var eta;
var stato;
btn.addEventListener('click', function () {
    let nome = document.getElementById('nome');
    let anno = document.getElementById('anno');

    calcolaEta(anno.value);
    verifica();
    scrivi(nome.value);
    cancellaform(nome, anno);
})
function calcolaEta(anno) {
    eta= 2023 - anno;
}
function verifica() {
    stato = (eta >= 18)? 'maggiorenne': 'minorenne';
}
function scrivi(nome) {
    document.getElementById('mioNome').innerHTML = 'Ciao ' + nome;
    document.getElementById('miaVerifica').innerHTML = 'La tua età è ' + eta + ' anni, sei ' + stato;
}
function cancellaform(nome, anno) {
    nome.value = '';
    anno.value = '';
}