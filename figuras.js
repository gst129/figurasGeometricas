const PI = Math.PI;

diametroCirculo = (radio) => 
    radio * 2;

console.log("El diametro del circulo es " + diametroCirculo(5));

areaCirculo = (radio) => 
    (radio * radio) * PI;


console.log("El area del circulo es: " + areaCirculo(5));

perimetroCuadrado = (ladoC) => 
     ladoC * 4;

console.log("El perimetro del cuadrado es " + perimetroCuadrado(5));

areaCuadrado = (ladoC) => 
     ladoC * ladoC;

console.log("El area del cuadrado es: " + areaCuadrado(5));
