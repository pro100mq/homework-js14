const users = [
    {name: "Mango", eyeColor: "brown", genger: "female", isActive: false, email: "mango@email.com", age: 15},
    {name: "Poly", eyeColor: "blue", genger: "female", isActive: true, email: "poly@email.com", age: 19},
    {name: "Kiwi", eyeColor: "brown", genger: "male", isActive: true, email: "kiwi@email.com", age: 16},
    {name: "Ajax", eyeColor: "cyan", genger: "male", isActive: false, email: "ajax@email.com", age: 21},
    {name: "Chelsy", eyeColor: "green", genger: "female", isActive: true, email: "chelsy@email.com", age: 13},
];

const allUsers = users.map((user) => user.name)
console.log(allUsers)

const eyesColors = users.filter((user) => user.eyeColor === "blue")
console.log(eyesColors)

const findUserGender = users.filter((user) => user.genger === "male")
console.log(findUserGender.map((user) => user.name))

const findOfflineUser = users.filter((user) => user.isActive === false)
console.log(findOfflineUser)

const findUserEmail = users.find((user) => user.email === "chelsy@email.com")
console.log(findUserEmail)

const findUserAge = users.filter((user) => user.age > 10 && user.age < 25)
console.log(findUserAge)
