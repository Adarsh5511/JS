// Stack (primietive data types)->Copy banti he by value

// heap (non primitive data types)->by refernce


const var1="learning"
const var2=var1
console.log(var1,var2)

const user1={
    name:"employee",
    email:"employee@google.com"
}

const user2=user1

user2.emial="employee@microsoft.com"

console.log(user1.emial)
console.log(user2.emial)


