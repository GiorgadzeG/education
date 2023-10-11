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

let youngestName = users[0].name
let youngestAge = users[0].age

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
// console.log(users)


// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს იგივე
// მნიშვნელობების მქონე ახალ
// (განსხვავებულ) ობიექტს

let object = {
    name: "Giorgi",
    lastname: "Giorgadze",
    age: 23,
}

function copyobject(user){
    let newObject = {}
    
    for(let key in user){
        newObject[key] = user[key]
    }
    return newObject
}
let newObject = copyobject(object)
console.log(object)
console.log(newObject)



// დაწერე პროგრამა, სადაც ორი a და b
// მომხმარებლები აგორებენ კამათელს მანამ,
// სანამ არ გაგორდება, რომელიც უფრო
// ნაკლებ ცდაში გააგორებს სამიანს ის არის
// გამარჯვებული


// function game(){
//     let player1win = kamateli()
//     console.log("player 1:", player1win)
//     let player2win = kamateli()
//     console.log("player 2:", player2win)
//     if(player1win == 3 && player2win == 3) {
//         return "tie"} else
//     if(player1win == 3){
//         return ("Player 1 win")
//     }else if(player2win == 3){
//         return ("Player 2 win")
//     } else {
//         return "tie"
//     }
//     }
// console.log(game())  // sxva ragaca gavakete...


function kamateli(){
    return Math.floor(Math.random() * 6) + 1;
}


function kamateligame(){
    let winner = null
    console.log("Game is start...")
    while(winner != true) {
        let player1 = kamateli()
        let player2 = kamateli()
        console.log (`Player 1 rolled a: ${player1}     Player 2 rolled a: ${player2}`)
        if(player1 === 3 && player2 === 3) {
        // tu ginda ro tamashi gacherdes roca orive motamashes amouva 3, winaamdeg shemtxvevashi tamashi gagdzeldeba sanam
        // mogebuli ar gamovlindeba 
        //  console.log ("Tie")
        //  console.log ("Good game, congratulations")
        //  break
        } else if(player1 === 3){
            winner = true
            console.log("Player 1 is winner!")
            break
        } else if(player2 === 3){
            winner = true
            console.log("Player 2 is winner!")
        
            break
        }
    }
    console.log ("Good game, congratulations")
}

kamateligame()
let button = document.getElementById("button")
button.addEventListener('click', kamateligame)
