/*
* File: app.js
* Author: Laczkó Bálint
* Copyright: 2023, Laczkó Bálint
* Group: Szoft I-2-N
* Date: 2021-02-23
* Github: https://github.com/Balint0429/
* Licenc: GNU GPL
*/
var hosszInput = document.querySelector('#hossz');
var elotolasInput = document.querySelector('#elotolas');
var fordulatszamInput = document.querySelector('#fordulatszam');
var calcButton = document.querySelector('#calcButton');
var idoInput = document.querySelector('#ido');

calcButton.addEventListener('click', () => {
    inputCon();
});

function inputCon() {
    let hossz = Number(hosszInput.value);    
    let elotolas = Number(elotolasInput.value);    
    let fordulat = Number(fordulatszamInput.value);
    let ido = calcIdo(hossz,elotolas,fordulat);
    idoInput.value = "" + ido;

}

function calcIdo(hossz,elotolas,fordulat) {
    return hossz + elotolas ;
}