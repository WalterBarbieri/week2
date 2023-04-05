const docente = {
    nome: 'Dario',
    cognome: 'Del Giudice',
    anno: 1967,
    occupato: true,

    eta: function() {
        return 2023 - this.anno;

    },

    pippo: function() {
        return this.nome + ' ' + this.cognome + ', età: ' + this.eta() + ', attualmente occupato: ' + this.occupato;
    }

}
document.getElementById('oggetto').innerHTML = docente.nome;
document.getElementById('destr').innerHTML = docente.eta();
document.getElementById('sinistr').innerHTML = docente.pippo();
