let leNgth = document.getElementById("length")
let noN = document.getElementById("rectangle");
let conBtn = document.getElementById("btn")

// var number = noN.valueAsNumber;
// console.log(number)
let vVol = document.getElementById("volume")
let mMass = document.getElementById("mass")

conBtn.addEventListener("click", function() {
    // leNgth.textContent = number
    let number1 = noN.value;
    convertintoLength(number1)
    converintoVolume(number1)
    converttoMass(number1)

})


function convertintoLength(num) {
    let convertintofeet = num * 3.281
    let convertintometers = num / 3.281
    leNgth.textContent = `
    ${num} meters = ${convertintofeet.toFixed(3)} feet | ${num} feet ${convertintometers.toFixed(3)} meters`
}

function converintoVolume(num) {
    let contoGallons = num * 0.264
    let contoLiters = num / 0.264
    vVol.textContent = `
    ${num}
    liters = ${contoGallons.toFixed(3)}
    gallons | ${num}
    gallons = ${contoLiters.toFixed(3) }
    liters `




}

function converttoMass(num) {
    let contopound = num * 2.204
    let contoKg = num / 2.204
    mMass.textContent = `${num} Kilograms = ${contopound.toFixed(3)} pounds | ${num} pounds = ${contoKg.toFixed(3)} kilograms`

}
// conBtn.addEventListener("click", function() {
//     // leNgth.textContent = number
//     convertintoLength(number)
//     converintoVolume(number)
//     converttoMass(number)

// })