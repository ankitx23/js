//singleton
//object.create

//Object literals

const mySym = Symbol("key1")

const JsUser ={
    name: "Hitesh", 
    [mySym]: "mykey1", // correct way to declare Symbol
    age :18,
    location : "Jaipur", 
    email: "ankit@nyc.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday", "Saturday"]
}

//console.log(JsUser);
//console.log(JsUser.email);
//console.log(JsUser["email"]) // 2nd method to get the value
//console.log(JsUser["full name"])
//console.log(JsUser[mySym]);


//Changing values in objects
JsUser.email= "ankitxydv@1.com"

//Object.freeze(JsUser)
JsUser.email= "ankitxydv@xyz.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


