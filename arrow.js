const user = {
    username: "Adarsh",
    price: 999,



    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// let varaible="adarsh"

// IMP This always used oin objects not is functions beacause in functions it dosnt give anything no context

// user.welcomeMessage()
// user.username = "Sammy"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Adarsh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Adarsh"
//     console.log(this);
// }

// const chai =  () => {
//     let username = "Adarsh"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }



// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => 
    {
        return {username:"Adarsh"}
    }


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


// ---------------------------------------------------------------------------------------------------------------------

// if you want to return object in one line use parenthesis
// No neeed to write return in for ()paranthesis but if curly the return in must