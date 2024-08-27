// Crea una función llamada sumar que tome dos números como
// parámetros y devuelva su suma. Prueba la función con diferentes
// números.

function sumar(num1, num2) {
    return num1 + num2;
}

// Prueba la función con diferentes números
console.log('3 + 5 =', sumar(3, 5));  
console.log('10 + 20 =', sumar(10, 20));
console.log('-4 + 7 =',sumar(-4, 7));  

// Crea una función llamada multiplicar que tome dos números como
// parámetros y devuelva su producto. Prueba la función con diferentes
// valores.

function multiplicar(num1, num2) {
    return num1 * num2;
}

console.log('2 x 2 =',multiplicar (2, 2));  
console.log('7 x 7 =', multiplicar(7, 7));
console.log('12 x 9 =',multiplicar(12, 9));  

//  Crea una función llamada saludar que tome un parámetro nombre
// con un valor por defecto de "Invitado". La función debe devolver
// "Hola, [nombre]".

function saludar(nombre = "Invitado") {
    return `Hola ${nombre}!!`;
}

console.log(saludar("Tito"));            
console.log(saludar("Nicolás"));   
console.log(saludar("Juan"));       

// Crea una función llamada crearPersona que tome nombre y edad
// como parámetros y devuelva un objeto con esas propiedades.

function crearPersona(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad
    };
}

const persona = crearPersona('Nicolas', 21);
console.log(persona);

// Crea una función llamada actualizarEdad que tome un objeto
// persona y un número nuevaEdad, y actualice la propiedad edad del
// objeto.

function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
}

actualizarEdad(persona, 25);
console.log('Después de actualizar:', persona);

// Crea una función recursiva llamada factorial que calcule el factorial
// de un número dado.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));

// Crea una función llamada despedir que contenga una función
// interna adios.despedir debe devolver el resultado de llamar a adios.

function despedir() {
    function adios() {
        return "hasta pronto!!";
    }

    return adios();
}

const saludo = despedir();
console.log(saludo); 

// Crea una función llamada procesarArray que tome un array y una
// función como parámetros, y aplique la función a cada elemento del
// array. Usa una función como parámetro para multiplicar cada
// número por 2.

function procesarArray(array, funcion) {
    return array.map(funcion);
}
function multiplicarPorDos(numero) {
    return numero * 2;
}

const numeros = [1, 2, 3, 4, 5];
const multiX2 = procesarArray(numeros, multiplicarPorDos);

console.log(multiX2); 

// Crea una función llamada crearMultiplicador que tome un número x
// y devuelva una nueva función que multiplique cualquier número por x.
function crearMultiplicador(x) {
    return function(numero) {
        return numero * x;
    };
}
 
const multiplicarPorX = crearMultiplicador(5);
const multiX = multiplicarPorX(5);

console.log("la funcion que multiplica cualquier numero x y multiplica otro x da como resultado", multiX);

// Crea una función anónima que sume dos números y la asigna a una
// variable llamada sumarAnonima. Luego, invoca la función a través de
// esa variable.

const sumarAnonima = (a, b) => {
    return a + b;
}

console.log("la funcion anonima que suma 2 numeros da como resultado", sumarAnonima(9, 12));

