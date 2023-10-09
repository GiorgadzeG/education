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
console.log(users)


// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს იგივე
// მნიშვნელობების მქონე ახალ
// (განსხვავებულ) ობიექტს

let user = {
    name: "Giorgi",
    lastname: "Giorgadze",
    age: 23,
}






// დაწერე პროგრამა, სადაც ორი a და b
// მომხმარებლები აგორებენ კამათელს მანამ,
// სანამ არ გაგორდება, რომელიც უფრო
// ნაკლებ ცდაში გააგორებს სამიანს ის არის
// გამარჯვებული



function kamateli(){
    return Math.floor(Math.random() * 6) + 1;
}


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


function kamateligame(){
    console.log("Game is start...")
    while(true) {
    let player1 = kamateli()
    let player2 = kamateli()
    console.log ("player 1:", player1)
    console.log ("player 2:", player2)
    if(player1 === 3 && player2 === 3) {
     console.log ("Tie")
     console.log ("Good game, congratulations")
     break
    } else
    if(player1 === 3){
        console.log("Player 1 win!")
        console.log ("Good game, congratulations")
        break
    } else if(player2 === 3){
        console.log("Player 2 win!")
        console.log ("Good game, congratulations")
        break
    } 
    }
}

kamateligame()