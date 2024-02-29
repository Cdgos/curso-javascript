alert("Hola mundo")
console.log("Hola mundo en consola navegador")

//Pregunta tu nombre 
const nombre = prompt('¿Cuál es tu nombre?')

//Toma el nombre y lo muestra en pantalla
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo javascript moderno.`