// მოცემულია მასივი [{name: 'Temo', age: 25},
// {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]
// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user - ების მასივს და დააბრუნებს
// ყველაზე პატარა ასაკის მქონე ადამიანის
// სახელს

let users = [
{name: 'Temo', age: 25},
{name: 'Lasha', age: 21},
{name: 'Ana', age: 28},
]

let youngestName = ""
let youngestAge = 150

for(let i = 0; i < users.length; i++){
    let user = users[i]
    let name = user.name
    let age = user.age
    if(age < youngestAge){
        youngestName = name
        youngestAge = age
    }
}
console.log("Youngest user is", youngestName,'Age:', youngestAge) // Yangest user is Lasha Age: 21


