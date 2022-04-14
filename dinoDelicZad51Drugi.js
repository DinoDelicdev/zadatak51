function provjeriDaLiJeBrojPrimaran(broj) {
    for (let i = 2; i < broj; i++) {
        if (broj % i === 0) {
            return false;
        }  
    }
    return true;
}

function provjeriDaLiPrimarniBrojImaTwinPrime(brojKojiSeTestira) {
    if (provjeriDaLiJeBrojPrimaran(brojKojiSeTestira) && provjeriDaLiJeBrojPrimaran(brojKojiSeTestira + 2)) {
        return true;
    }
    else {
        return false;
    }
}

//console.log(provjeriDaLiPrimarniBrojImaTwinPrime(7));

function ispisi2TwinPrime(primarniBroj) {
    if (provjeriDaLiJeBrojPrimaran(primarniBroj) && provjeriDaLiPrimarniBrojImaTwinPrime(primarniBroj)) {
        let parTwinPrime = [];
        parTwinPrime.push(primarniBroj);
        parTwinPrime.push(primarniBroj + 2);
        return parTwinPrime;
    }
}

//console.log(ispisi2TwinPrime(3));

function ispisiTwinPrimeBrojeve(doOvogBroja) {
    let matricaTwinPrimeBrojeva = [];
    let skupTwinPrimeBrojeva = [];
    for (let i = 1; i < doOvogBroja; i++) {
        if (provjeriDaLiJeBrojPrimaran(i) && provjeriDaLiPrimarniBrojImaTwinPrime(i)) {
            skupTwinPrimeBrojeva.push(ispisi2TwinPrime(i));
        }
         
    }
    //return redTwinPrimeBrojeva;
    while (skupTwinPrimeBrojeva.length > 0) {
        matricaTwinPrimeBrojeva.push(skupTwinPrimeBrojeva.splice(0, 10));
    }
    return matricaTwinPrimeBrojeva;
}
console.log(ispisiTwinPrimeBrojeve(10000));