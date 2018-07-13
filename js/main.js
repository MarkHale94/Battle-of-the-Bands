const bandNumber = 1;
let bandOrder = 0;

const takeNumber = function (bandName) {
    bandOrder += bandNumber;
    return `${bandOrder}. ${bandName}`;
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

const gwar = takeNumber("Gwar")
console.log(gwar)

const metallica = takeNumber("Metallica")
console.log(metallica)

const megadeth = takeNumber("MegaDeth")
console.log(megadeth)

const almond = takeNumber("Almond Brothers")
console.log(almond)