// ejercicio 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)


//el const declarado en la 4ta linea desestructura cars y guarda como valor el primer dato "Tesla"
// la linea 8 tambien desestructura pero al tener primero la "," desestructura el segundo dato "Mercedes"
// dando asi console.log1 "Tesla"
// console.log2 "Mercedes"

//ejercicio 2


const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
//console.log(name);
console.log(otherName);

//el console.log de la linea 26 no se puede ejecutar porque el dato name no ha sdo declarado fuera del objeto
// en la linea 27 el console log ejecutara sin problema la desestructuracion de "name" en la variable "otherName" dando por resultado "Elon"


//ejercicio 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

//el primer console log dara de resultado el string '12345' declarado en la constante 
// el segundo console.log dara "undefined" porque se intenta desestructurar del objeto "person" el dato "password" pero no ha sido declarado 


//ejercicio 4


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

//en el primer console log (2 == 5) dara de resultado false 
//en el segundo console log (2 == 2) dara de tresultado true

//ejercicio 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// el primer console log imprimira "value"
// el segundo console log imprimira el array "[ 1, 5, 1, 8, 3, 3]"
// el tercer console log impirmira el primer valor del array "1"
// el cuarto console log imprimira el segundo valor del array "5" 




