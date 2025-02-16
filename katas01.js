
// KATAS 01 🐣

// EJERCICIO 1 ---> Crea una función que salude por consola a  la persona que le indiques por parámetro.

// function saludo(name) {
// console.log(`Hola, ${name}!, como estás? `);
// }

// saludo("Saray"); 



// EJERCICIO 2 ---> Crea este array y consulta sus posiciones en este orden 9,0,7,2,6,3,1,4,10,5,8 
 // console.log(num[0]); 
// console.log(num[1]);
// console.log(num[2]); 
// console.log(num[3]); 
// console.log(num[4]); 
// console.log(num[5]); 
// console.log(num[6]);
// console.log(num[7]); 
// console.log(num[8]); 
// console.log(num[9]); 
// console.log(num[10]);
  

// Descifra el mensaje oculto del array mensajeOculto consultando las posiciones del primer array
// const mensajeOculto = ['U', ' ', 'N', 'S', 'D', 'A', 'O', 'E', 'S', 'B', 'I']
// const num = [9, 0, 7, 2, 6, 3, 1, 4, 10, 5, 8];

// let resultado = "";
// num.forEach(i => {
//     resultado += mensajeOculto[i];
// });

// console.log(resultado);







//  EJERCICIO 3 ---> Con ayuda de los métodos que disponen los Arrays en Js ordena este listado de planetas y 
// elimina los que no lo sean 🪐

// const listadoPlanetas = ['Narnia','Venus','Tierra','Marte','Júpiter','Saturno','Urano','Neptuno','Plutón', 'Mercurio']




// // FORMA 1️⃣

// const listadoPlanetas = ['Narnia','Venus','Tierra','Marte','Júpiter','Saturno','Urano','Neptuno','Plutón', 'Mercurio'];
// console.log("Primero vemos la lista:    " + listadoPlanetas)


// let cajitaMercurio = listadoPlanetas.pop();
// console.log("Quitamos la ultima posición:     " + listadoPlanetas);


// listadoPlanetas.reverse();
// console.log("Invertimos el array:     " + listadoPlanetas);


// listadoPlanetas.pop();
// console.log("Quitamos la última posición otra vez:    " + listadoPlanetas)

// listadoPlanetas.push(cajitaMercurio);
// console.log("Agregamos la última posición:     " + listadoPlanetas)

// listadoPlanetas.reverse();
// console.log("Invertimos el orden para tener la lista final:     " + listadoPlanetas)



// Forma 2️⃣

// const listadoPlanetas = ['Narnia','Venus','Tierra','Marte','Júpiter','Saturno','Urano','Neptuno','Plutón', 'Mercurio'];

// function reorderPlanets(){

//     let mercurio = listadoPlanetas.pop();  //Elimina el último elemento del array 'listadoPlanetas' y guardarlo en 'mercurio'

//     let newList = listadoPlanetas.reverse();  //Invierte  el array 'listadoPlanetas' y asignarlo a 'newList'

//     newList.pop(); // Elimina el último elemento del array invertido 'newList'

//     newList.push(mercurio);  // Agrega el elemento 'mercurio' al final del array invertido 'newList'

//     newList = newList.reverse(); // Vuelve a invertir el array 'newList' para restaurar el orden original
    
//     console.log("La lista de planetas correcta es:     " + newList); //Imprime el array final 'newList' en la consola
// }

// reorderPlanets();




// // Forma 3️⃣
// const listadoPlanetas = ['Narnia', 'Venus', 'Tierra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Neptuno', 'Plutón', 'Mercurio'];
// listadoPlanetas.shift(); //elimina el primer valor del array
// let mercurio = listadoPlanetas.pop(); //elimina el último valor del array
// listadoPlanetas.unshift(mercurio); //añade ul valor al principio del array
// listadoPlanetas.unshift(listadoPlanetas.pop()) // Añade el último valor que había eliminado
// listadoPlanetas.pop()
// console.log(listadoPlanetas)
// listadoPlanetas.splice(0,1) 
