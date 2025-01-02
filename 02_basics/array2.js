const marvel_Heroes = ["Spiderman" , "Ironman" , "Thor"]
const dc_heroes = ["Batman", "Superman", "Flash"]

//marvel_Heroes.push(dc_heroes); // push returns the existing array 

//console.log(marvel_Heroes[3]);

const allHeroes= marvel_Heroes.concat(dc_heroes); // concat returns the new array
//console.log(allHeroes);

const all_new_heroes = [...marvel_Heroes, ...dc_heroes]
//console.log(all_new_heroes);

//Spread Method
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Ankit Yadav"));
console.log(Array.from("Ankit Yadav")); // from converts into array
console.log(Array.from ({Name: "Yadav"})) // if returns blank it means its not converted to array


let score1 = 100
let score2 = 2300
let score3= 1200

console.log(Array.of(score1, score2, score3)); // it also does the same turns the value into array








