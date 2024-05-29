function calcular() {
let peso = document.getElementById("peso").value
let altura = document.getElementById("altura").value

if (peso <= 0 ||  altura <= 0){
    alert("Por favor ingrese valores positivos para el peso y la altura...")
}

let resultado = peso / (altura*altura)

alert(`Su indice de masa corporal es: ${resultado}`)
}
