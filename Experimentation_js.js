console.log("Utilisation de console.table pour afficher un tableau de facon organiser")

const array = ["Thomas", "Candille", 19, true]

console.log("Exemple de console.log sur une array :")
console.log(array)

console.log("Exemple de console.table sur une array :")
console.table(array)

const object = {
    firstname: "Thomas",
    lastName: "Candille",
    age: 19,
    isHuman: true
}

console.log("Exemple de console.log sur un object :")
console.log(object)

console.log("Exemple de console.table sur un object :")
console.table(object)

console.log("##########################")

//Definition de variable classique
let x = 1
let y = 2
let z = 3


//Definition de variable puis affectation de valeur
let a,b,c 

a = 1
b = 2
c = 3

//Definition de variable et affectation de valeur sur la meme ligne
let i = 1, j = 2, k = 3

console.log("Verification des variables :")

console.group("Variable")

    console.log(x,y,z)
    console.log(a,b,c)
    console.log(i,j,k)

console.groupEnd()

console.log("##########################")

console.log("Utilisation console.group : ")

console.group("Groupe 1")

    console.log("Bonjour")
    console.log("Je suis dans un groupe")
    console.log("de 3 console.log")

console.groupEnd()

console.log("##########################")

console.log("Customisatiion de l'apparence du texte : ")

const style = "color: blue; font-weight: bold; background-color: yellow;"

console.log("%cJe suis stylisé", style)

console.log("%cUne autre méthode", "color: red; font-weight: bold; background-color: green;")

console.log("##########################")

console.log("Récupération des données d'une liste avec des spreads operator : ")

const array2 = ["Quentin", "Garnier", 19, false]
const copiedArray2 = [...array2]

console.table(array2)
console.table(copiedArray2)


console.log("Concaténation de deux tableaux avec des spreads operator : ")
const mergedArray = [...array, ...array2]

console.table(mergedArray)

console.log("##########################")

console.log("Appel de fonction avec des spreads operator : ")

const addNumbers = (a, b, c) => {
    console.log(a + b + c)
}

const numbers = [1, 2, 3]

addNumbers(...numbers)

console.log("##########################")

console.log("")

console.log("Destrucuturation d'elements : ")

const student = {
    firstname: "Michel",
    lastName: "Mocquant-Jacquet",
    age: 19,
    isHuman: true
}

const { firstname, lastName, age, isHuman } = student

console.log(firstname, lastName, age, isHuman)

console.log("##########################")

console.log("Analyse Sart/End de strings :")

const text = "Hello World"

console.log(text.startsWith("H"))
console.log(text.startsWith("World", 6))
console.log(text.endsWith("d"))
console.log(text.includes("W"))

console.log("##########################")

console.log("Suppression des espaces au debut et a la fin d'une string:")

const textSpace = "   Hello World   "

console.log(textSpace.trim())

console.log(textSpace.trimStart())

console.log(textSpace.trimEnd())

console.log("##########################")

console.log("fonction sur array map :")

const array3 = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

const squareRoots = array3.map(number => Math.sqrt(number))
console.log(squareRoots)

const names = ["Thomas", "Candille", "Quentin", "Garnier", "Michel", "Mocquant-Jacquet"]

const uppercasedNames = names.map(name => name.toUpperCase())
console.log(uppercasedNames)

console.log("##########################")

console.log("fonction sur array et objet filter :")

const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ,14 ,15]

const oddNumbers = array4.filter((val) => val % 2 !== 0)
const evenNumbers = array4.filter((val) => val % 2 === 0)

console.group("Operation on Numbers")
    console.log(oddNumbers)
    console.log(evenNumbers)
console.groupEnd()

const axes = [
    {id: 1, names: "CD", good: true},
    {id: 2, names: "CDI", good: true},
    {id: 3, names: "CDEB", good: false},
    {id: 4, names: "JV", good: true},
    {id: 5, names: "3D", good: false}
]

const goodAxes = axes.filter((axe) => axe.good === true)
console.table(goodAxes)

console.log("##########################")

console.log("Sealing d'objet pour éviter les modifications :")

const student2 = {
    firstname: "Jeremy",
    lastName: "Lombard",
    age: 19,
    isHuman: true
}

Object.seal(student2)

console.log(student2.firstname)

student2.firstname = "Michel"

console.log(student2.firstname)

delete student2.firstname
console.log(student2.firstname)

student2.axe = "Dev"
console.log(student2.axe)

console.log(Object.isSealed(student2))

console.log("##########################")

console.log("Suppression des doublons dans un array :")

const array5 = [1, 1, 2, 3, 3, 3, 4, 5,5]
const unqiueArray5 = [...new Set(array5)]

console.log(array5)
console.log(unqiueArray5)

console.log("##########################")

console.log("Ajout de characteres au début et a la fin d'une string :")

const padText = "Hello World"
const paddedText = padText.padStart(20, "+")
const paddedText2 = padText.padEnd(20, "-")
const paddedText3 = padText.padStart(20, "+").padEnd(30, "-")

console.group("Padding")
    console.log(paddedText)
    console.log(paddedText2)
    console.log(paddedText3)
console.groupEnd()

console.log("##########################")