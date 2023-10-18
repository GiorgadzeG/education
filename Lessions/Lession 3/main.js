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



