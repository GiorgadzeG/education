console.log("This is working")


//boolean - yes/no = true/false
//string - text = ""
//symbol - unikaluri mnishvneloba
//number - number (1,2,3,4..) 10
//bigInt - 2^53-1 didi ricxvi
//null - chven vanichebt
//undefined - tviton kompi anishnebs

let myName = "Gio"
myName = "Giga"

const myNumber = 10
const myStrNumber ="10"
const myBoolean = true


console.log(typeof myNumber) // number
console.log(typeof myName) // string
console.log(typeof myBoolean) // boolean

console.log(myNumber==myStrNumber) // true (==)
console.log(myNumber===myStrNumber) // false (===)


const a = -1
const b = 9
if(a + b === 8){
    console.log(true)
} else{
    console.log(false)
}

const myLastName = calculate()
console.log (myLastName)

function calculate2(name){
    return name
}

console.log (calculate2("Giorgi"))
console.log(calculate2("Giga"))

function calculate(num1, num2){
    if (typeof num1 === "string"){
        return false
    }
    if (typeof num2 === "string"){
        return false
    }
    
    return num1 + num2
}

console.log(calculate(150,200))
console.log(calculate("gio",200))