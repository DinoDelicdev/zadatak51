function provjeriDaLiJeGodinaPrestupna(godina) {
    if ((godina % 4 === 0 && godina % 100 != 0) || (godina % 400 === 0)) {
        console.log(`Godina ${godina} je prestupna`);
    } else {
        console.log(`Godina ${godina} nije prestupna`);
    }
}

provjeriDaLiJeGodinaPrestupna(1700);