// 1. Funciones flecha
//  1.- Convierte la siguiente función en una función flecha:
// function greetings() {
//   return "Hola";
// }

//Estas dos functions hacen lo mismo y la de arriba tambien
const greetings1 = () => {
    return "Hola";
}
const greetings2 = () =>  "Hola";
console.log(" --------- Ejer1 -------------");
console.log(greetings1);

//  2.- Convierte la siguiente función en una función flecha en línea:
// function division(a, b) {
//   return a / b;
// }

const division1 = (a, b) => a / b;
console.log(" --------- Ejer2 -------------");
console.log("Ejer2: La division es: ", division1(10,2));

//  3.- Convierte la siguiente función en una función flecha:
// function myName(name) 
// {
//     return `Mi nombre es ${name}`;
// }

//Estas dos lineas hacen lo mismo y la de arriba tambien
const myName1 = (name1) => "Mi nombre es" + name1;
const myName2 = (name2) => `Mi nombre es ${name2}`;

console.log(" --------- Ejer3 -------------");
console.log(myName1("Josy"));

//  4.- Convierte las siguientes funciones en funciones flecha:
// function test2() {
//     console.log("Función test 2 ejecutada.");
// }

// function test1(callback) {
//     callback();
// }

const testA = () => {
    console.log("Función test 2 ejecutada.");
}

const testB = (callback) => {
    callback();
}
console.log(" --------- Ejer4 -------------");
 testB(testA);

// 2. Foreach
// Utiliza el siguiente array para resolver los próximos ejercicios:
let allPeople = [
 { name: 'Jamiro', age: 45 },
 { name: 'Juan', age: 35 },
 { name: 'Paco', age: 34 },
 { name: 'Pepe', age: 14 },
 { name: 'Pilar', age: 24 },
 { name: 'Laura', age: 24 },
 { name: 'Jenny', edad: 10 },
]

//  1.- Crea un array con la gente mayor de 25 años y muéstralo por consola.
console.log(" --------- Prueba de foreach -------------");
allPeople.forEach((person) => {
    console.log("Foreach de la gente: ",person)
})

console.log(" --------- Ejer1 -------------");
const filteredNumbers = allPeople.filter((person) => person.age >= 18)
console.log("Los mayores de edad son:(Usando Filter) ", filteredNumbers);


//  2.- Crea un array con la gente que empieza por J.
const name_J =  allPeople.filter((person) => person.name.startsWith('J'));

console.log(" --------- Ejer2 -------------");
console.log("La gente que empieza por J.: ", name_J);

// 3. Map
//  1.- Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.
const filteredNumbersOld = allPeople
  .filter(person => person.age >= 18)
  .map(person => person.name);

console.log(" --------- Prueba de Map -------------");
console.log(" --------- Ejer1 -------------");
console.log("Los mayores de edad son (Con Map): ", filteredNumbersOld);

//  2.- Crea un array con la gente que empieza por J.
const filteredNameJ = allPeople
    .filter((person) => person.name.startsWith('J'))
    .map(person => person.name);

console.log(" --------- Ejer2 -------------");
console.log("La gente que empieza por J (Con Map): ", filteredNumbersOld);

//  3.- Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
const numbers = [ 4, 5, 6, 7, 8, 9, 10]

//Opcion con push
// const newArray1 = [];
// for (let i = 0; i < numbers.length; i++) {
//     //Ejemplo de ** --> 2 ** 3 // 2 elevado a la 3 = 8
//     newArray1.push(numbers[i] ** numbers[i]);
// }

const newArray = numbers.map(num => num ** num);

console.log(" --------- Ejer3 -------------");
console.log("Array con cada número elevado a sí mismo:", newArray);

// // Resultado esperado
// // [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

// 4. Filter
//  1.- Crea un segundo array que devuelva los impares
//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArrayImpraes =  numbers.filter((number) => number % 2 !== 0);
console.log(" --------- Ejer4 -- Filter -------------");
console.log("Array con cada número elevado a sí mismo:", newArrayImpraes);

//  2.- Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
//  const foodList = [
// 	{ name: 'Tempeh', isVeggie: true },
// 	{ name: 'Cheesbacon burguer', isVeggie: false },
// 	{ name: 'Tofu burguer', isVeggie: true },
// 	{ name: 'Entrecot', isVeggie: false }
// ]
// 	/* [
// 			'Que rico Tempeh me voy a comer!',
// 			'Que rica Tofu burguer me voy a comer!'
// 			]
// 	*/
// 5. Reduce
//  1.- Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
// const numbers = [39, 2, 4, 25, 62]
// // Salida--> 483600

// Extras
// Map
//  1.- Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
// const staff = [
//   {
//     name: "Pepe",
//     role: "The Boss",
//     hobbies: ["leer", "ver pelis"],
//   },
//   {
//     name: "Ana",
//     role: "becaria",
//     hobbies: ["nadar", "bailar"],
//   },
//   {
//     name: "Luis",
//     role: "programador",
//     hobbies: ["dormir", "comprar"],
//   },
//   {
//     name: "Carlos",
//     role: "secretario",
//     hobbies: ["futbol", "queso"],
//   }
// ]

// // Resultado esperado
// /*
//     [
//       'Pepe es TheBoss y le gusta leer y ver pelis',
//       'Ana es becaria y le gusta nadar y bailar',
//       'Luis es programador y le gusta dormir y comprar',
//       'Ana es becaria y le gusta nadar y bailar',
//       'Carlos es secretario y le gusta fútbol y queso'
//     ]
//  */

//  2.- Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:
// const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
// //Resultado esperado
// /* [
//     'Como soy de Italia, amo comer Pizza',
//     'Como soy de Japón, amo comer Ramen',
//     'Como soy de Valencia, amo comer Paella',
//     'Aunque no como carne, el Entrecot es sabroso'
//    ]
// */

// Filter
//  1.- Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros

// const inventory = [
//   {
//     name: 'Mobile phone',
//     price: 199
//   },
//   {
//     name: 'TV Samsung',
//     price: 459
//   },
//   {
//     name: 'Viaje a cancún',
//     price: 600
//   },
//   {
//     name: 'Mascarilla',
//     price: 1
//   }
// ];
// /*
//   [
//     'TV Samsung,',
//     'Viaje a Cancún'
//   ]
// */

// Reduce
//  1.- Concatena todos los elementos del array con reduce para que devuelva una sola frase

// const sentenceElements = [
//   'Me',
//   'llamo',
//   /* Tu nombre aquí! */,
//   'y',
//   'quiero',
//   'sentir',
//   'la',
//   'fuerza',
//   'con',
//   'javascript'
// ];

// // Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'
