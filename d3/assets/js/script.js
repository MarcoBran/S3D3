function frutta(mele, arance){
    const succo = `Succo con ${mele} mele e ${arance} arance`;
    return succo;
}
document.getElementById('corretta').innerHTML = frutta(5,6);
document.getElementById('sbagliata').innerHTML = frutta(5, );



//calcola la tua eta

eta();
function eta(anni){
    let prodotto = 2022-1993;
    document.getElementById('eta').innerHTML += `${prodotto} anni`;
}

//calcola l'anno di nascita di Anna e Maria con una funzione freccia

calcolaAnno =(val1, val2) => {
    return val1 - val2;
}
document.getElementById('persona1').innerHTML = `L' anno di nascita di Anna è il  ${calcolaAnno(2022, 30)}`;
document.getElementById('persona2').innerHTML = `L' anno di nascita di Maria è il  ${calcolaAnno(2022, 24)}`;

calcolaAnno();
//torta
calcolaFette =(val1, val2) =>{
    return val1 - val2;
}
document.getElementById('torta').innerHTML = `Torta con ${calcolaFette(24, 15)} fette di mela e ${calcolaFette(24, 9)} fette di arancia`


//form

btn = document.getElementById('calcola');

btn.addEventListener('click', function (){
    var cibo = Number(document.getElementById('cibo').value);
    var detersivi = Number(document.getElementById('detersivi').value);
    var abiti = Number(document.getElementById('abiti').value);
    var somma =Number(cibo + detersivi + abiti);
    totale (somma);
})
function totale(somma){
    document.getElementById('totale').innerHTML += somma;
}


