// Crea un array frutas con los valores ["manzana", "banana", "pera"]. Usa
// push para agregar una fruta al final, y pop para eliminar la última
// fruta.

let frutas = ["manzana", "banana", "pera"];

frutas.push("naranja");
console.log(frutas); 

frutas.pop();
console.log(frutas);

// Crea un array bidimensional llamado matriz con los valores [[1, 2, 3],
// [4, 5, 6], [7, 8, 9]]. Accede al elemento 5 e imprímelo en la consola.

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let elemento = matriz[1][1];

console.log(elemento); 

// Usa un bucle for para iterar sobre el array frutas e imprimir cada
// elemento.

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Crea una función llamada elevarAlCuadrado que tome un array de
// números y devuelva un nuevo array con cada número elevado al
// cuadrado. Usa map para implementar la función.

function elevarAlCuadrado(numeros) {
    return numeros.map(function(numero) {
        return numero * numero;
    });
}

let numeros = [2, 4, 6, 8, 10, 12];
let cuadrados = elevarAlCuadrado(numeros);
console.log(cuadrados);

// Crea una función llamada filtrarMayoresDe que tome un array de
// números y un valor de referencia, y devuelva un nuevo array solo con
// los números mayores que ese valor. Usa filter.

function filtrarMayoresDe(array, nroReferencia) {
    return array.filter(numero => numero > nroReferencia);
  }
  
  const nroReferencia = 7;
  const resultado = filtrarMayoresDe(numeros, nroReferencia);
  console.log(resultado);

//   Crea una función llamada sumarElementos que tome un array de
// números y devuelva la suma de todos los elementos del array
// usando reduce.

function sumarElementos(array) {
    return array.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  }

  const suma = sumarElementos(numeros);
  console.log(suma);

//   Crea un array de números llamado numeros y usa some para
//   verificar si algún número es mayor que 10.

const mayorQueDiez = numeros.some(numero => numero > 10);
console.log(mayorQueDiez); 

// Crea un array de números llamado numeros y usa every para
// verificar si todos los números son positivos.

const todosPositivos = numeros.every(numero => numero > 0);
console.log(todosPositivos);

// Crea un array de objetos llamados personas donde cada objeto
// tenga nombre y edad. Usa find para encontrar a la primera persona
// mayor de 30 años.

const personas = [
    { nombre: 'Nico', edad: 21 },
    { nombre: 'Ernesto', edad: 31 },
    { nombre: 'Juan', edad: 22 },
    { nombre: 'Ricardo', edad: 49 },
  ];
  
  const mayorDeTreinta = personas.find(persona => persona.edad > 30);
  console.log(mayorDeTreinta);

//  Crea un array de palabras y ordénalo alfabéticamente usando sort.
frutas.sort();
console.log(frutas);