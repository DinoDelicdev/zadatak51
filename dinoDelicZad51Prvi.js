function ukloniKarakterIzStringa(stringIzKojegSeUklanjaKarakter, karakterKojiSeUklanja) {
    let stringKaoNiz = stringIzKojegSeUklanjaKarakter.split('');
    for (let i = 0; i < stringKaoNiz.length; i++) {
        if (stringKaoNiz[i] === karakterKojiSeUklanja) {
            stringKaoNiz.splice(i, 1);
        }
    }
    return stringKaoNiz.join('');
}

console.log(ukloniKarakterIzStringa("Well, it's about this rhinoceros, right, escapes from a zoo and it heads straight for London. And after two or three days, they find like all these dead bodies lying about and no-one knows who's done it. So, they get hold of this private detective, you know, like a sort of Charlton Heston type geezer to try and solve the crime. Now the zoo keeper happens to be a very attractive woman, so before you know where you are, old Charlton is giving the sort what for, so that's your romantic interest!", "a"));