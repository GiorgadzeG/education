console.log(typeof null) // object

const user = {
    name: 'James',
    lastName: 'Bond',
    userName: '007',
    sayHello: function() {
        return 'hello'
        // console.log('heeellloo')  -- es rato ar amodis tu  returnis qveshaa?
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

