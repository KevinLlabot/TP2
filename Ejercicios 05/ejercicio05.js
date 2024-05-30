function calcularArea(){   

let a = parseInt(document.getElementById("alturaA").value);
let b = parseInt(document.getElementById("baseB").value);
let c = parseInt(document.getElementById("alturaC").value);

if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0 || c >= a){
    alert("Por favor ingrese numeros mayor a '0' y 'A' tiene que ser mayor que 'C'")
    return
}
let triangulo = b * (a - c) / 2;
let rectangulo = b * c;
let areaTotal = triangulo + rectangulo;
alert(`El area del terreno es: ${areaTotal} metros`)
}
