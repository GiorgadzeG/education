const car = {
    manufacturer: "Porche",
    brand: "Cayenne",
    year: 2022,
    color: "black"
}
const { manufacturer, brand, year, color, ragacaracargvaqobiektshi} = car;
console.log(manufacturer, brand, color, ragacaracargvaqobiektshi); // Porche Cayenne black undefined
console.log(manufacturer, brand, color, year); // Porche Cayenne black 2022




const brands = ["apple", "samsung", "lenovo", "asus"]
const [apple, lenovo, asus, hp] = brands

console.log(apple, lenovo, asus, hp); // apple samsung lenovo asus (radgan samsung aris meore adgilas masivshi)

const [ss, sss, ass, ssa] = brands
console.log(ss, sss, ass, ssa) // apple samsung lenovo asus


const users = ["James", "Giga", "Tornike", "Giorgi"]
// const a = users [0] // James

const [a, b, c, d] = users
console.log(a,b,c,d) //James Giga Tornike Giorgi
 
const [name1, name2 ] = users
console.log (name1, name2) // James Giga

const [ user2, user1] = users
console.log(user1, user2); // Giga James

const [ one, , two] = users
console.log(one, two); // James Tornike




const firstName = "Temo"

const user = {
    firstName: "James",
    lastName: "Bond",
    profile: {
        nickName: "007",
        age: 40,
        adress: {
            street: "Tamarashvili 13"
        }
    }
}
const {firstName: myFirstName, lastName, profile: {nickName, age, adress: {street}}} = user
console.log(myFirstName, lastName, nickName, age, street) // James Bond 007 40 Tamarashvili 13


function myProfile ({profile: {adress: {street}}}){
    return "adress" + ' ' + street
}

console.log(myProfile(user));



const calculateSum = function(a,b) {
    return a + b
}
console.log(calculateSum(5, 6)); // 11


const calculateSum1 = (a,b) => {
    return a+b
}
console.log(calculateSum1(5, 6)); // 11



const sayHello = (fullName) => {
    return 'Hello, ' + fullName
}
console.log(sayHello("Giorgi")); // Hello, Giorgi


const sayHello1 = fullName => "Hello, " + fullName;
console.log(sayHello1("Giorgi")); // Hello, Giorgi


const sayHello3 = (name1, name2) => "Hello, " + name1 + " and " + name2;
console.log(sayHello3("Giorgi", "Giga")); // Hello, Giorgi and Giga


function profile(username){
    return "Hello " + username
}

//string literals `pliusebi ro ar gamoiyeno wer aq ase ${username} `
const newProfile = (username) => {
    return `hello, ${username}`
    //return "Hello " + username 
  
}

console.log(newProfile("Giorgi")); // hello, Giorgi
  
const newProfile2 = (username, username2) => `hello, ${username} and ${username2}`
console.log(newProfile2("Giorgi", "Giga")); // heloo Giorgi and Giga


// this-it shegvidzlia gamovidzaxot tu funqcia aris gamodzaxebuli, tu ki mokle dawerit vxmarobs mashin ar mushaobs da edwebs mtavar obiktshi da ara "user3" shi
const user3 = {
    firstName: "James",
    lastName: "Bond",
    sayHello: function(){
        console.log(`${this.firstName} ${lastName}`)
    }
}
user3.sayHello() // James Bond



//default parameters - tu ki arafers ar vawodebt funcias ro ar daiqrashos
const calculateSum3 = (a, b = 0, c = 0) => a + b + c
console.log(calculateSum3(1, 2, 3)); // 6
console.log(calculateSum3(1,undefined, 3)); // 4 // radgan meore cifri ar iyo miigo 1 1+0+3


const user4 = {
    name: "James Bond"
}

const printUser = (user) => {
    console.log(user.name);
}

// printUser() // Error


const printUserWithoutBag = (user = {}) => console.log(user.name); // vawodebt default parametrs
printUserWithoutBag() // undefined
printUserWithoutBag(user4) // James Bond


const user5 = {
    firstName: "James",
    lastName: "Bond",
    adress:{
        city: "Tbilisi"
    }
}

const {adress: {city}} = user5
console.log(city); // Tbilisi

const user6 = {
    firstName: "James",
    lastName: "Bond",
}
//tavs vizgvevt ro ar daiqrashot tu araa mititebuli
const {adress: {city: newCity} = { }} = user6
console.log(newCity); // undefined