const score = 100;
//console.log(score);

const balance= new Number(100)
//console.log (balance);

//console.log(balance.toString()); // converts number to string
//console.log(balance.toString().length); // converts number to string and gives the length 
//console.log(balance.toFixed(2)); // gives values after decimal

const otherNumber = 23.8966

//console.log(otherNumber.toPrecision(3)); //prints number to the given digits


const hundreds = 1000000
//console.log(hundreds.toLocaleString()) // turns numbers acc to US standards
//console.log(hundreds.toLocaleString('en-IN')) // turns numbers acc to IN standards

//-----------------------Maths------------------------//

//console.log(Math);
//console.log(Math.abs(-4)); // gives absolute value
//console.log(Math.round(4.6)); // round figure
//console.log(Math.ceil(4.2)); // gives absolute value on upper
//console.log(Math.floor(4.2)); // gives nearest value whole number

//console.log(Math.min(4,2,7,5));
//console.log(Math.max(4,2,7,5));
//console.log(Math.random()); // gives random number
//console.log(Math.random()*10); // gives one whole number
//console.log(Math.random()*10+1); //never returns zero number
//console.log(Math.floor(Math.random()*10+1)); // gives only absolute value

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);












