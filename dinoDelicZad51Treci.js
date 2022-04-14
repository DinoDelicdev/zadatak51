function provjeriDaLiJeBrojPrimaran(broj) {
    for (let i = 2; i < broj; i++) {
        if (broj % i === 0) {
            return false;
        }  
    }
    return true;
}

function provjeriDaLiJeBrojPalindrom(brojZaProvjeruPalindromteta) {
    let brojKaoString = brojZaProvjeruPalindromteta.toString();
    let brojKaoStringObrnuto = brojKaoString.split('').reverse().join('');
    if (brojKaoString === brojKaoStringObrnuto) {
        return true;
    } else {
        return false;
    }
}

//console.log(provjeriDaLiJeBrojPalindrom(44));

function ispisiPrvihOvolikoPalindromePrime(ovoliko) {
    let brojac = 0;
    for (let i = 1; brojac < ovoliko; i++) {
        if (provjeriDaLiJeBrojPrimaran(i) && provjeriDaLiJeBrojPalindrom(i)) {
            brojac++;
            console.log(i);
        }
    }
}

console.log(ispisiPrvihOvolikoPalindromePrime(100));

//Posto nisam bio siguran da li se i jednocifreni brojevi mogu smatrat palindromima evo funkcija ako ne mogu

/*function provjeriDaLiJeBrojPalindrom(brojZaProvjeruPalindromteta) {
    let brojKaoString = brojZaProvjeruPalindromteta.toString();
    let brojKaoStringObrnuto = brojKaoString.split('').reverse().join('');
    if (brojZaProvjeruPalindromteta > 10 && brojKaoString === brojKaoStringObrnuto) {
        return true;
    } else {
        return false;
    }
}*/