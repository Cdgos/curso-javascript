// Concatenar strings y template strings

const producto = "Monitor 20 pulgadas ";
const precio = '30 USD';

// metodo concat(string o 'cadena')
console.log(producto.concat(precio))
console.log(producto.concat('En descuento'))

// + y ,
console.log( producto + "con un precio de " + precio );
console.log( producto , "tiene un precio de" , precio );

// Template Strings o Template Literales ` ` backtick
console.log(`El producto ${producto} tiene un precio de $ ${precio}`);