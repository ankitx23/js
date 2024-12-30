let myDate = new Date;


//console.log(typeof(myDate));
//console.log(myDate.toDateString());
//console.log(myDate.toString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleDateString());

//let myCreateDate = new Date(2023, 2, 23 , 7, 53) // month is +1 ,given the month
let myCreateDate = new Date ("2-17-2024")
//console.log(myCreateDate.toString());

//let myTimeStamp = Date.now()
//console.log(myTimeStamp)
//console.log(myCreateDate.getTime())
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+ 1);
console.log(newDate.getDay());

//`${newDate.getDay()}`

newDate.toLocaleString('default', 
    {weekday: "long"}

);
