function prebrojiRijeciURecenici(recenica) {
    let brojRijeciURecenici = 1;
    for (i = 0; i < recenica.length; i++) {
        if (recenica.charAt(i) === ' ') {
            brojRijeciURecenici++;
        }
    }
    console.log(`Recenica "${recenica}" se sastoji od ${brojRijeciURecenici} rijeci`);
}

prebrojiRijeciURecenici("Oh, this is something else! A rhinoceros has escaped from a zoo, there are 300 dead bodies covered in rhinoceros footprints, there's a lock-up garage two and a half foot deep in rhinoceros crap, and Charlton Heston suspects the butler!");