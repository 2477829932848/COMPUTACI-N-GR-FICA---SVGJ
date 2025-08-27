//1

interface Direccion {
    calle: string;
    ciudad: string;
    pais: string;
}

interface Estudiante {
    nombre: string;
    edad: number;
    curso: string;
    direccion: Direccion;
    mostrarInfo(): string;
}

const estudiante: Estudiante = {
    nombre: 'Juan',
    edad: 22,
    curso: 'Matemáticas',
    direccion: {
        calle: 'Av. Siempre Viva',
        ciudad: 'Bogotá',
        pais: 'Colombia'
    },
    mostrarInfo() {
        return `${this.nombre} estudia ${this.curso} en ${this.direccion.ciudad}`;
    }
};

console.log(estudiante.mostrarInfo());

//2

interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    mostrarDetalle(): string;
}

const producto: Producto = {
    id: 1,
    nombre: 'Laptop',
    precio: 3500,
    stock: 10,
    mostrarDetalle() {
        return `${this.nombre} cuesta $${this.precio} y hay ${this.stock} unidades disponibles`;
    }
};

console.log(producto.mostrarDetalle());


//3

interface Pelicula {
    titulo: string;
    director: string;
    duracion: number;
    genero: string;
    reproducir(): string;
}

const pelicula: Pelicula = {
    titulo: 'Avengers: Endgame',
    director: 'Anthony y Joe Russo',
    duracion: 181,
    genero: 'Acción',
    reproducir() {
        return `Reproduciendo: ${this.titulo}. Dirigida por ${this.director}`;
    }
};

console.log(pelicula.reproducir());


//4

interface Vehiculo {
    marca: string;
    modelo: string;
    anio: number;
    encender(): string;
}

const vehiculo: Vehiculo = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2022,
    encender() {
        return `${this.marca} ${this.modelo} está encendido`;
    }
};

console.log(vehiculo.encender());


//5

interface Usuario {
    username: string;
    password: string;
    roles: string[];
    login(): string;
}

const usuario: Usuario = {
    username: 'admin01',
    password: '123456',
    roles: ['admin', 'editor'],
    login() {
        return `Usuario ${this.username} ha iniciado sesión con roles: ${this.roles.join(', ')}`;
    }
};

console.log(usuario.login());


////////////////////////////////////////////////////////////////
//# SEGUNDA PARTE TALLER
///////////////////////////////////////////////////////////////////

// CORRECCIONES DEL TALLER DE TYPESCRIPT

// Estaba mal porque aparece `true` como tipo, lo cambié a boolean
let myValue: number | string | boolean = 10; 
console.log("myValue:", myValue);

// El error fue usar `Boolean` con mayúscula
let myBoolean: boolean = true; 
console.log("myBoolean:", myBoolean);

// Aquí estaba como string, lo corregí a número
let healthPoints: number = 150; 
console.log("healthPoints:", healthPoints);

// El error fue que no coincidía con el literal "myTag"
let otherMultipleDataType: number | boolean | "myTag" = "myTag"; 
console.log("otherMultipleDataType:", otherMultipleDataType);

let myVar;
myVar = 123;
myVar = true;
myVar = "texto";
myVar = {};
console.log("myVar:", myVar);

// El error fue que no se inicializo la constante
const myConstant: number = 10; 
console.log("myConstant:", myConstant);

// El problema fue que infirió string y no permitía number
let inferedDataType: string | number = "Texto inicial"; 
inferedDataType = 123;
console.log("inferedDataType:", inferedDataType);

// Aquí habia un 1 en lugar de un booleano
const isActive: boolean = true; 
console.log("isActive:", isActive);

// El error fue que true no es number ni string
let mixed: number | string = "true"; 
console.log("mixed:", mixed);

// No se puede usar `while` como nombre de variable
let myWhile: string = "Hola"; 
console.log("myWhile:", myWhile);

// El error fue que estaba escrito `numer` en vez de `number`
let myNumber: number = 10; 
console.log("myNumber:", myNumber);

// Aquí tenía un string en un arreglo de números
let numeros: number[] = [1, 2, 3]; 
console.log("numeros:", numeros);

// El error fue que la tupla estaba incompleta
let tupla: [string, number] = ["Hola", 10]; 
console.log("tupla:", tupla);

// El error fue que los tipos estaban en orden equivocado
let otraTupla: [string, boolean] = ["Hola", true]; 
console.log("otraTupla:", otraTupla);

// El error fue que no aceptaba null
let texto: string | null = "Hola mundo"; 
texto = null;
console.log("texto:", texto);

// Aquí habia un color que no estaba permitido
let color: "rojo" | "verde" | "azul" = "rojo"; 
console.log("color:", color);

// Esta parte funciona con `any`, convertí antes de usar toUpperCase
let valor: any = 10;
console.log("valor toUpperCase:", valor.toString().toUpperCase()); 

// El error fue intentar reasignar después
const version: number = 1.0;
// version = 2.0; // no se puede

// Aquí se agrego el tipo con apellido opcional
let persona: { nombre: string; apellido?: string } = { nombre: "Ana" };
persona.apellido = "Ruiz";
console.log("persona:", persona);

// El error fue que `undefined` no era aceptado en number
let edad: number | undefined = undefined; 
console.log("edad:", edad);
