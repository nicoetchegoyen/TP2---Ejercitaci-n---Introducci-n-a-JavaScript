//Crea un objeto llamado libro con propiedades como título, autor y añoDePublicacion. Imprime cada propiedad en la consola.
const libro = {
    titulo: 'El principito',
    autor: 'Antoine de Saint-Exupéry',
    ano_publicacion: 1943,

    descripcion: function() {
        return `${this.titulo} es un cuento poético del autor ${this.autor}, publicado en ${this.ano_publicacion} que viene acompañado
de ilustraciones hechas con acuarelas por el mismo Saint-Exupéry.​ En él, un piloto se encuentra perdido
en el desierto del Sahara después de que su avión sufriera una avería, pero para su sorpresa
, es allí donde conoce a un pequeño príncipe proveniente de otro planeta.`;
    }
}

//console.log(libro)
console.log (libro.titulo)
console.log(libro.autor)
console.log(libro.ano_publicacion)

//Crea un objeto llamado estudiante con propiedades nombre, edad y direccion. direccion debe ser otro objeto con propiedades calle,
//ciudad y pais. Imprime la dirección completa del estudiante.

const direccion = {
    ciudad: 'Gualeguaychu',
    pais: 'Argentina',
}

const estudiante = {
    nombre: 'Nicolas',
    edad: '21',
    direccion: direccion

}

//console.log(estudiante)
console.log(`${estudiante.nombre} vive en ${estudiante.direccion.ciudad}, ${estudiante.direccion.pais}.`);

//Añade un método llamado descripción al objeto libro que devuelva una cadena describiendo el título y el autor del libro. Invoca este
//método e imprime el resultado.

console.log (libro.descripcion())

//Crea un objeto producto con propiedades como nombre, precio y
//disponible. Usa un bucle for...in para imprimir todas las propiedades
//y sus valores.

const producto = {
    nombre: 'Monitor HP LV1911',
    precio: '60.000$',
    //disponible: 'Si'
    disponible: true
};

for (let propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
}

// ○ Modifica el valor de la propiedad precio del objeto producto y luego
// imprime el objeto completo para verificar el cambio.

producto.precio = 49.99;

console.log(producto);


// Crea una función llamada tienePropiedad que tome un objeto y una
// cadena como parámetros, y devuelva true si el objeto tiene una
// propiedad con ese nombre, o false en caso contrario.

function tienePropiedad(obj, propiedad) {
    return obj.hasOwnProperty(propiedad);
}

console.log(tienePropiedad(libro, 'titulo'));
console.log(tienePropiedad(libro, 'editorial'));

// Elimina la propiedad disponible del objeto producto. Imprime el
// objeto antes y después de eliminar la propiedad.

console.log('Antes de eliminar la propiedad disponible:', producto);

delete producto.disponible;

console.log('Después de eliminar la propiedad disponible:', producto);

// Usa Object.assign para combinar dos objetos, persona1 y persona2,
// en un nuevo objeto. Imprime el resultado.

const persona1 = {
    nombre: 'Juan',
    edad: 22
};
const persona2 = {
    ocupacion: 'Estudiante',
    ciudad: 'Concepcion del Uruguay'
};

const personaCombinada = Object.assign({}, persona1, persona2);

console.log('Objeto combinado:', personaCombinada);

// Crea una copia profunda del objeto estudiante utilizando el método
// JSON.parse y JSON.stringify. Modifica la copia y verifica que el objeto
// original no haya sido alterado.

const estudianteCopia = JSON.parse(JSON.stringify(estudiante));

estudianteCopia.nombre = 'Brad';
estudianteCopia.direccion.ciudad = 'California';
estudianteCopia.direccion.pais = 'Estados Unidos';

console.log('Objeto original:', estudiante);
console.log('Copia modificada:', estudianteCopia);

               