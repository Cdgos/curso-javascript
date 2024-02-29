// .replace(texto, reemplazo) => Reemplazar un texto de una cadena.

console.log("======== Replace ========\n");

const producto = "Monitor 20 pulgadas";
console.log(producto)
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

console.log("======== Slice ========\n");

// .slice => Cortar-extraer texto de una cadena
// .slice(inicio, final) => Cortar entre un rango. Inicio debe ser menor que final
// .slice(inicio) => Cortar desde inicio caracter.
console.log(producto.slice(0, 10)) // Extrae Monitor 20
console.log(producto.slice(8)) // Extrae Monitor 20

console.log("======== Substring ========\n");

// .substring => Alternativa a slice
// .substring(inicio, final) 
// .substring(2, 1) => Diferencia: Si el inicio es mayor a final, slice no hace nada pero substring trata de hacer algo.
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1));

console.log("======== charAt ========\n");

const usuario = 'Sebas';
console.log(usuario.substring(0, 1)) // Extrae la primera letra.

// .charAt(posicion) => Extrae el caracter de la posicion.
console.log(usuario.charAt(0));