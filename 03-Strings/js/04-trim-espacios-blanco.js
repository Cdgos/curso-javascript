// Cortar espacios en blanco de un String

const producto = "          Monitor 20 pulgadas            ";
console.log(producto)
console.log(producto.length) // Los espacios cuentan como un caracter.

// trimStart() => Eliminar del inicio (Uso: espacios en e-mail formularios)
console.log( producto.trimStart() )

// trimEnd() => Eliminar al final
console.log( producto.trimEnd() )

// Combinarlos
console.log( producto.trimStart().trimEnd() )

// trim() => Eliminar al inicio y al final.
console.log( producto.trim() )