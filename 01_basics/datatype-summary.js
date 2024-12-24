// Q- How datatypes are stored in memory?
// In two ways, a) Primitive b) Reference or Non-Primitive

// Primitive Datatypes
// 7 types
// string, Number, Boolean, undefined, null, BigInt, Symbol

const score = 100
const scoreValue= 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id  = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 4398257489243434343233232n

// Reference or Non primitve
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj" , "doga"]
letMyObj = {
    name: "Ankit",
    age: 23
}

const myFunction = function(){
    console.log("Hello world")
}

console.log( typeof bigNumber);
console.log( typeof myFunction);
console.log( typeof score);
console.log( typeof anotherId);

// Q- Is JS dynamically typed or statically typed 
// JS is dynamically typed

