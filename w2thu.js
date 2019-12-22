//ANCHOR WEEK 2 THURSDAY:
//MENGENAL PENGGUNAAN FUNCTION
//TUGAS 1

function shoutOut() {
    return "Halo Function!"
}

console.log(shoutOut())

//TUGAS 2

function calculateMultiply(num1, num2) {
    return num1 * num2
}

var num1 = 6;
var num2 = 5;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

//TUGAS 3

function processSentence(name, age, address, hobby) {
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);