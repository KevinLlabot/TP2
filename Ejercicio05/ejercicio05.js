function calcularArea(){   

let a = document.getElementById("alturaA").value;
let b = document.getElementById("baseB").value;
let c = document.getElementById("alturaC").value;

if (a <= 0 || b <= 0 || c <= 0 || c >= a){
    alert("Por favor ingrese numeros mayor a '0' y 'A' tiene que ser mayor que 'C'")
    return
}

let triangulo = b * (a - c) / 2;
let rectangulo = b * c;

let areaTotal = triangulo + rectangulo;

alert(`El area del terreno es: ${areaTotal} metros`)


}
