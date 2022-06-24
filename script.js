const button = document.getElementById ("btn")
const read1 = document.getElementById ("read1")
const read2 = document.getElementById ("read2")
const read3 = document.getElementById ("read3")

button.addEventListener("click", function() {
    const input = document.getElementById("value")
    const num = Number(input.value)

    const mtoFeet = num * 3.281
    const ftoMeter = num / 3.281
    const ltoGallon = num * 0.264
    const gtoLitre = num / 0.264
    const ktoPound = num * 2.204
    const ptoKilo = num / 2.204

    read1.textContent = `${num} meters = ${mtoFeet.toFixed(3)} feet | ${num} feet = ${ftoMeter.toFixed(3)} meters`
    read2.textContent = `${num} litres = ${ltoGallon.toFixed(3)} gallons | ${num} gallons = ${gtoLitre.toFixed(3)} litres`
    read3.textContent = `${num} kilos = ${ktoPound.toFixed(3)} pounds | ${num} pounds = ${ptoKilo.toFixed(3)} kilos`
})