// Crea una función llamada obtenerUsuarios que haga una petición
// HTTP a la API https://jsonplaceholder.typicode.com/users usando
// fetch. Luego, imprime en la consola la lista de usuarios obtenida.

async function obtenerUsuarios() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!respuesta.ok) {
            throw new Error('Network response was not ok');
        }

        const usuarios = await respuesta.json();
        
        if (usuarios.length === 0) {
            console.log('La lista de usuarios está vacía.');
        }

        return usuarios;  
    } catch (error) {
        console.error('Hubo un problema con la petición Fetch:', error);
        return null; 
    }
}

// Usando la función obtenerUsuarios, crea otra función llamada
// imprimirNombresDeUsuarios que filtre y muestre solo los nombres
// de los usuarios.

async function imprimirNombresDeUsuarios() {
    try {
        const usuarios = await obtenerUsuarios();
        
        if (!usuarios) {
            console.log('No se pudo obtener la lista de usuarios.');
            return;
        }

        if (usuarios.length > 0) {
            usuarios.forEach(usuario => {
                console.log(usuario.name);
            });
        } else {
            console.log('No hay usuarios para mostrar.');
        }
    } catch (error) {
        console.error('Hubo un problema al imprimir los nombres de los usuarios:', error);
    }
}

imprimirNombresDeUsuarios();


//Crea una función llamada autenticarUsuario que tome un objeto
// credenciales con usuario y contraseña, y verifique si coinciden con
// un usuario predefinido. La función debe devolver true si la
// autenticación es exitosa y false en caso contrario.

const usuarioEj = {
    usuario: 'admin',
    contraseña: '1234'
};

function autenticarUsuario(credenciales) {
    return credenciales.usuario === usuarioEj.usuario &&
           credenciales.contraseña === usuarioEj.contraseña;
}

const credencialesCorrectas = {
    usuario: 'admin',
    contraseña: '1234'
};

const credencialesIncorrectas = {
    usuario: 'user',
    contraseña: 'password'
};

console.log(autenticarUsuario(credencialesCorrectas)); 
console.log(autenticarUsuario(credencialesIncorrectas)); 

// Crea una función llamada mapearUsuarios que tome un array de
// usuarios obtenidos de la API y devuelva un nuevo array con solo las
// propiedades nombre y email de cada usuario.


function mapearUsuarios(usuarios) {
    if (!usuarios || !Array.isArray(usuarios)) {
        console.log('El argumento proporcionado no es un array de usuarios.');
        return [];
    }

    return usuarios.map(usuario => ({
        nombre: usuario.name,
        email: usuario.email
    }));
}
async function mostrarUsuariosMapeados() {
    const usuarios = await obtenerUsuarios();
    if (usuarios) {
        const usuariosMapeados = mapearUsuarios(usuarios);
        console.log(usuariosMapeados);
    };
}
    mostrarUsuariosMapeados();


// Crea una función llamada validarFormulario que tome un objeto con
// los campos nombre, email y password. La función debe devolver true
// si todos los campos están presentes y no están vacíos, y false en caso
// contrario.

function validarFormulario({ nombre, email, password }) {
    return nombre && nombre.trim() !== '' &&
           email && email.trim() !== '' &&
           password && password.trim() !== '';
}

async function validarFormularioUsuarios(formulario) {
    try {
        const usuarios = await obtenerUsuarios();
        
        if (usuarios) {
            const esValido = validarFormularioUsuarios(formulario);
            return esValido;
        } else {
            console.log('No se pudieron obtener los usuarios. No se puede validar el formulario.');
            return false;
        }
    } catch (error) {
        console.error('Hubo un problema al validar el formulario:', error);
        return false;
    }
}

//Crea una función llamada obtenerPagina que tome un array de
// datos y un número de página. La función debe devolver los
// elementos correspondientes a esa página, asumiendo que cada
// página tiene 5 elementos.
 
function obtenerPagina(datos, numeroPagina) {
    const elementosPorPagina = 5;
    
    const inicio = (numeroPagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    
    return datos.slice(inicio, fin);
}

const datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const pagina1 = obtenerPagina(datos, 1); 
const pagina2 = obtenerPagina(datos, 2); 
const pagina3 = obtenerPagina(datos, 3); 

console.log(pagina1);
console.log(pagina2);
console.log(pagina3);

// Crea una función llamada enviarDatos que tome un objeto data y
// haga una petición POST a la API
// https://jsonplaceholder.typicode.com/posts. La función debe
// imprimir la respuesta de la API.

function enviarDatos(data) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data) 
    })
    .then(response => response.json()) 
    .then(result => {
        console.log('Respuesta de la API:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

const data = {
    title: 'Hola',
    body: 'Como estas',
    userId: 1
};

enviarDatos(data);

// Crea una función llamada buscarUsuarioPorEmail que tome un array
// de usuarios y un email como parámetros, y devuelva el usuario que
// coincida con el email proporcionado. Usa el método find para
// implementarlo.

function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find(usuario => usuario.email === email);
}
const usuarios = [
    { nombre: 'Nicolás', email: 'nico@live.com.ar' },
    { nombre: 'Ernesto', email: 'tito@hotmail.com' },
    { nombre: 'Nazareno', email: 'naza@gmail.com' }
];

const emailBuscado = 'tito@hotmail.com';
const usuarioEncontrado = buscarUsuarioPorEmail(usuarios, emailBuscado);

console.log(usuarioEncontrado);

// Crea una función llamada generarToken que tome un objeto usuario
// y devuelva un token JWT simulado como una cadena. Puedes usar
// una función como btoa (Base64) para simular la generación del
// token.
function generarToken(usuario) {
    const payload = {
        sub: usuario.id,     
        name: usuario.nombre,
        email: usuario.email,
        iat: Date.now(),     
    };


    const token = btoa(JSON.stringify(payload));

    return token;
}

const usuario = {
    id: 1,
    nombre: 'Nicolas',
    email: 'nicos@live.com.ar'
};

const token = generarToken(usuario);
console.log(token);

// Crea una función llamada actualizarUsuario que tome un objeto
// usuario y una lista de cambios a aplicar. La función debe retornar el
// usuario con las propiedades actualizadas.

function actualizarUsuario(usuario, cambios) {
    const usuarioActualizado = Object.assign({}, usuario, cambios);

    return usuarioActualizado;
}

//cambio el usuario del punto anterior.
const cambios = {
    nombre: 'Brad',
    email: 'nico-etchegoyen@live.com.ar'
};

const usuarioActualizado = actualizarUsuario(usuario, cambios);
console.log(usuarioActualizado);
