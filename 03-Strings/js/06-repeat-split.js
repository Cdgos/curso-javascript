console.log("======== Repeat ========\n");

// .repeat(cantidad) => Repetir una cadena X cantidad entera, si pasa un decimal, lo redondea.

const producto = "Monitor 20 pulgadas";
const texto = " en Promocion".repeat(3);

console.log(texto)
console.log(`${producto} ${texto} !!!`)

console.log("======== Split ========\n");

// .split(caracter) => Dividir un string por cada caracter que encuentre
const actividad = 'Estoy aprendiendo JavaScript moderno'
console.log(actividad.split(" ")) // Genera un arreglo con las palabras separadas.

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(', '));

const tweet = 'Aprendiendo JavaScript moderno #JSModernoConJuan'
console.log(tweet.split('#'))