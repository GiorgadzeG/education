console.log(typeof null) // object
// for in {} object
// for of [] array
// for(const ABC in/of masivis saxeli){
// console.log (ABC)
//}

const user = {
    name: 'James',
    lastName: 'Bond',
    userName: '007',
    sayHello: function() {
        return 'hello'
    }
}

console.log(
    user.name,
    user.lastName,
    user.userName,
    user.sayHello()
)
//
//
const age = 30;
let userAge = age;
userAge = 40;
console.log(age); // 30
console.log (userAge); // 40 

const user1 = {
    name: 'James',
    lastName: 'Bond',
    userName: '007'
}

const newUser = user1;
newUser.userName = 'Agent 007';
console.log(user1.userName); // Agent 007
//
//
let A = 30
let B = A

A = 45

console.log(A, B) // 45, 30
//
//
const A1 = {
    name: 'James',
    lastName: 'Bond',
    userName: '007'
}

const B1 = A1

A1.name = 'Giorgi'
B1.lastName = 'Giorgadze'

console.log(A1) // Giorgi Giorgadze 007
console.log(B1) // Giorgi Giorgadze 007
//
//
const numbers = [1,2,3,4,5]
console.log(
    numbers[0],
    numbers[1],
    numbers[2],
    numbers[3],
    numbers[4],
)               // 1 2 3 4 5 
//
//
const arr = ['James', 'Giorgi', 'Giga',]
console.log(arr.length) // 3
console.log(arr[0]) // James
console.log(arr[2]) // Giga
//
//
const arr1 = ['Hello', true, 30, null]
for(let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}                   // Hello
                    // true
                    // 30
                    // null

for( let i = 0; i < arr1.length; i++) {
    console.log(arr[i] + ' ' + 'is moving')
}                   // James is moving
                    // Giorgi is moving
                    // Giga is moving
                    // undefined is moving
//
//
const arr2 = ['James', 'Giorgi', 'Giga', 'Temo']
for(const name of arr2) {
    console.log(name)
}                   // James
                    // Giorgi
                    // Giga
                    // Temo
//
//
const C = {
name: 'James',
lastName: 'Bond',
userName: '007'
}

for (const f in C){
    console.log(C[f])
}                   // James
                    // Bond 
                    // 007
//
//
function randomNumber(){
    return parseInt(Math.random() * 10) + 1
}

let result = randomNumber()
console.log(result) // random 1 dan 10 mde

while(result !==9){
    result = randomNumber()
    console.log(result)
}                   // random sanam 9 ar iqneba
//
//
do{
    result = randomNumber()
        console.log(result)
} while(result!==9) // igive
//
//
const arr3 = ['James', 'Giorgi', 'Giga', 'Temo']

arr3.forEach(function(element, index){       // pirveli abrunebs mnishvnelobas meore indexx, saxeli mnishvnelovani araa, mesame kide tu daemata ragac massivs abrunebs
    console.log(index + ' is equal to ' + element)
})                  // 0 is equal to James
                    // 1 is equal to Giorgi
                    // 2 is equal to Giga
                    // 3 is equal to Temo
                    // * arafers ar abrunebs mxolod consolshi gamogvaq, tu gvunda ro daabrunos gamoviyenot map


const resMap = arr3.map(function(racginda, index){
    return (index + ' is equal to ' + racginda)
})
console.log(resMap) // 0 is equal to James
                    // 1 is equal to Giorgi
                    // 2 is equal to Giga
                    // 3 is equal to Temo
                    // axal masivshi iwers ise rom pirvels masivs ar afuchebs


const array = [1, 5, 3, 7, 4, 3, 2, 9]
const resFilter = array.filter(function(whatuwant){
    return whatuwant > 5
})
console.log(array)     // [1, 5, 3, 7, 4, 3, 2, 9]
console.log(resFilter) // [7, 9]

const resFind = array.find(function(el){
    return el > 5
})

console.log(resFind) // 7

// map filteri da find abruneben axal mnishvnelobs ise ro ar cvlian dziritad masivs, foreach ar abrunebs saertod