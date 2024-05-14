//EJERCICIO 1

let variable= 'Practicando con el bucle for';

for (let i = 0; i < 5; i++) {
    console.log (variable);
}


for (let i = 0; i < 10; i++) {
    console.log ('La variable i tiene el valorDei');
}

for (let i = 2; i <= 20; i+=2) {
    console.log (i);
}

for (let i = 5; i <= 250; i+=5) {
    console.log (i);   
}

for (let i = 0; i <= 100; i++) {
    console.log(i);
}

//EJERCICIO 2

let base= 4;
let resultados=[];

for (let i = 1; i <=10; i++) {
    let resultado= base*i;
    resultados.push(resultado);
}

console.log (resultados);

//EJERCICIO 3

let ganancias=[1,2,3,4,5,6,7,8,9,10];
let gananciaFinal =0;

for (let i = 0; i < ganancias.length; i++) {
    gananciaFinal += ganancias[i];
}
console.log (gananciaFinal);

//EJERCICIO 4

let healingIsDifficult =['Fear',
'Drink to Get Drunk',
'Taken for Granted',
'Blow It All Away',
'Get Me',
'Im Not Important to You',
'Sober and Unkissed',
'Healing Is Difficult',
'Judge Me',
'Little Man',
'Insidiously'
]

for (let i = 0; i < healingIsDifficult.length; i++) {
    console.log((i+1) + ' ' + healingIsDifficult[i]);
}

//EJERCICIO 5

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]

for (let i = 0; i < got.length; i++) {
    console.log ('Soy ' + got[i].nombre + ' ' + got[i].apellido + ' criatura viajera!');
    console.log ('Soy ' + got[i].nombre + ' ' + got[i].apellido + ' de la ciudad ' + got[i].ciudad);
}