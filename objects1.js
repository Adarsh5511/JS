
// singleton ojbects made using only constructors
// Object.create 

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Adarsh",
    "full name": "Adarsg Salunkhe",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "Adarsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser)

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "Adarsh@chatgpt.com"
// Object.freeze(JsUser) not modification are reflectde
// JsUser.email = "Adarsh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
// console.log(JsUser)
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
