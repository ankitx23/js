//use [] to declare an array
const myArr = [0,1,2,3,4,5]
const myHeroes= ["spidey",'batman']

//Another way to declare an array USING KEYWORD 'ARRAY'
const myArr2 = new Array(1,2,3,4)
//console.log(myArr[1]);

//Array methods

//to add values in array

//myArr.push(6)
//myArr.push(7)
//myArr.pop() // removes the last value from the array

//myArr.unshift(9) // adds value to an array in the beginning
//myArr.shift() // removes the first value of an array

//console.log(myArr.includes(9)); // to check if value is there or no
//console.log(myArr.indexOf(4)); // to check the index of the given value

//const newArr = myArr.join() // converts array into string and combines them
//console.log(myArr);

//console.log(typeof(newArr));


//slice, splice

console.log("A ", myArr)
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B" , myArr);

//splice manupilates the whole array
const myn2= myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2)


