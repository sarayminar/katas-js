
// KATAS 02🤺

// EJERCICIO 1 ---> Crea una función para felicitar el cumpleaños que pueda darte respuesta en tres idiomas (español, inglés y alemán) y que tenga una respuesta con iconos, en el caso de que no sea ninguno de los tres idiomas🎂
// ¡Feliz cumpleaños, Saray!
// Happy birthday, Saray!
// alles Gute zum Geburtstag, Saray!


// CON SWITCH
// function happyBday(name, language) {
//   switch(language){
//     case "es": console.log("Feliz cumpleaños, " + name + "!")
//         break;
//     case "en": console.log("Happy birthday, " + name + "!")
//         break;
//     case "de": console.log("alles Gute zum Geburtstag, " + name + "!")
//         break;
//     default:
//         console.log("🎂" + name + "🎂")    
//   } 
// };
// happyBday("Saray","en");


// CON IF...ELSE
// function happyBday(name, language) {
//     if (language === "es") {
//       console.log(`Feliz cumpleaños, ${name}!`);
//     } else if (language === "en") {
//       console.log(`Happy birthday, ${name}!`);
//     } else if (language === "de") {
//       console.log(`Alles Gute zum Geburtstag, ${name}!`);
//     } else {
//       console.log(`🎂 ${name} 🎂`);
//     }
//   }
//   happyBday("Saray", "en");
  


// EJERCICIO 2 ---> Crea una función que sea un dado, es decir, que devuelva un número aleatorio del 1 al 6 🎲

// FORMA 1️⃣

// function numRandom() {
//   return Math.floor(Math.random() * 6) + 1; // Genera entre 1 y 6
// }

// function dice() {
//   return numRandom();
// }

// let number = dice();
// console.log(`Tu número es el: ${number}`);


// Forma 2️⃣
// function dice(){
//   let number = Math.floor(Math.random() * 6) + 1;
//   return aleatoryNumber
// }

// console.log(Math.floor (Math.random()*6) + 1);
// console.log(dice());





//  EJERCICIO 3 ---> Crea una función que te devuelva la tabla de multiplicar completa al número que le indiquemos ✍️

// function tabla_multiplicar (number){
//   let tabla = [];
//   for (let i = 1; i <= 10; i++){
//     tabla.push(`${number} x ${i} = ${number * i}`);
//   }
//   return tabla.join('\n');
// }

// let number = 5;
// console.log(tabla_multiplicar(number));





//  EJERCICIO 4 ---> Crea una función que sea un contador de las ovejas  que están dormidas en el siguiente array 🐑 💤:

// const ovejas = [true,  true,  true, false,

//   true,  true,  true,  true ,

//   true,  false, true,  false,

//   true,  false, false, true ,

//   true,  true,  true,  true ,

//   false, false, true,  true, false]; 


// function contador_ovejas(contador) {
//   let dormidas = 0;
//   let despiertas = 0;

//   for (let i = 0; i < contador.length; i++) {
//       if (contador[i] === true) {
//           dormidas++;  
//       } else {
//           despiertas++; 
//       }
//   }

//   return { dormidas, despiertas };  
// }


// const resultado = contador_ovejas(ovejas); 

// console.log(`Hay ${resultado.dormidas} ovejas dormidas y ${resultado.despiertas} ovejas despiertas`);




// EJERCICIO 5 --->  Crea un objeto planeta tierra, que tenga las siguientes propiedades: su distancia del sol, sus vecinos (especificando que planeta tiene delante y cuál detrás), una lista de su composición atmosférica, y que también tenga un método saludar que devuelva en consola "Hola soy el planeta tierra 🌍

//  km del sol : 150.000.000
// composición atmosférica: nitrógeno, oxígeno, argón

// const planetaTierra = {
//   distanciaSol: 150000000,
//   vecinos:{
//     delante: "Venus",
//     detras: "Marte"
//   },
//   composicionAtmosferica: ["Nitrógeno", "Oxígeno", "Argón"],
//   saludo: saludar
  
// }

// function saludar(){
//     console.log("Hola, soy el planeta Tierra 🌍")
// }

// planetaTierra.saludo();
// console.log(`Mi distancia al sol es ${planetaTierra.distanciaSol}`)


// EJERCICIO 6 --->  Basándote en la especificaciones del objeto anterior crea la clase planeta y haz instancias de, al menos dos planetas, más abajo te especifico las propiedades: 🪐🐱🚀 
// nombre del planeta, km del sol, planetas
// vecinos, satélites, método saludar.
// más tarde añade con código la propiedad satélite y dale el valor de luna, también añade la propiedad planeta habitado con el valor true, y posteriormente eliminalo.

// class Planeta {
//   constructor(nombre, distanciaSol, vecinos, satelites){
//     this.nombre = nombre;
//     this.distanciaSol = distanciaSol;
//     this.vecinos = vecinos;
//     this.satelites = satelites;
//   }

//   saludar(){
//     console.log(`Hola, soy el planeta ${this.nombre}`)
//   }

// }

// const tierra = new Planeta("Tierra", 150000000, {delante: "Venus", detras: "Marte"}, "Luna");
// const venus = new Planeta("Venus",108000000, {delante: "Mercurio", detras:"Tierra"}, "Neith" );


// venus.saludar();
// console.log(`Mi distancia al sol es ${venus.distanciaSol}`);



