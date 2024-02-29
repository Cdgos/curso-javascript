// length => Metodo cantidad caracteres.

const producto = "Monitor 20 pulgadas";
console.log(producto.length);

/* indexOf('cadena') => Metodo devuelve posicion donde inicia cadena y si la contiene. 
Devuelve -1 si no encuentra incidencia
*/
console.log(producto.indexOf('Pulgadas'))

// include('cadena') => Devuelve true o false si contiene o no una cadena.
console.log(producto.includes('Tablet'))
console.log(producto.includes('pulgadas'))
console.log(producto.includes('Pulgadas')) // No es sensible a mayusculas, false.

