// დაწერე ფუნქცია, რომელიც მიიღებს a და b
// პარამეტრებს და დააბრუნებს ტექსტს
// “ტოლია” თუ a უდრის b-ს, ხოლო
// წინააღმდეგ შემთხვევაში, დააბრუნებს “არ
// არის ტოლი” 

// გაითვალისწინე, რომ a და b ყოველთვის
// ერთი და იგივე ტიპის არ არის

function compare (a,b){
    if (a == b){
        return "equal"
    } else
        return "not equal"
}

console.log(compare(7,8)) // not equal
console.log(compare(15,"15")) // equal 
console.log(compare("255",15)) // not equal 
console.log(compare("1125",1125)) // equal


// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს ტემპერატურას ფარენჰეიტებში და
// დააბრუნებს ტემპერატურას ცელსიუსში 

// თუ პარამეტრი არ არის რიცხვითი მონაცემი
// დააბრუნე - false


function conventer (temp){
    if(typeof temp != "number"){
        return false
    } 
    else{
       temp = (temp - 32)/1.8 
       return temp.toFixed(2) + "C"
    }
}

console.log(conventer(750)) // 398.89C
console.log(conventer(280)) // 137.78C
console.log(conventer("hello")) // false
console.log(conventer([1,3,4,6])) // false


// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს a (პირველი რიცხვი), b (მეორე
// რიცხვი) და operation (+, -, *, /) და
// დააბრუნებს ახალ მნიშვნელობას,
// რომელიც მიიღება ამ ორ რიცხვზე
// operation ცვლადში განსაზღვრული
// ოპერაციით

// თუ a და b არ არიან რიცხვები, ან თუ
// operation ცვლადში არის უცნობი,
// ოპერაცია დააბრუნე - false



function minicalculator (num1, num2, operation){
    if (typeof num1 != "number" || typeof num2 != "number") {
        return false
    }
    if (operation === "+") { 
       return num1 + num2 
    } else if(operation === "-") {
        return num1 - num2
    } else if(operation === "*") {
        return num1 * num2
    } else if(operation === "/") 
            if(num2 === 0){
                return "Impossible to divide by zero"
            } return (num1 / num2).toFixed(2)
        return false
    }
    

console.log(minicalculator(100,50,"+")) // 150  
console.log(minicalculator(100,50,"-")) // 50
console.log(minicalculator(100,50,"*")) // 5000
console.log(minicalculator(100,50,"/")) // 2.00
console.log(minicalculator(100,50,"hello")) // false
console.log(minicalculator(100,"hello","+")) // false
console.log(minicalculator("hello",50,"+")) // false
console.log(minicalculator(true,50,"+")) // false
console.log(minicalculator(100,50,50)) // false
console.log(minicalculator(100,0,"/")) // Impossible to divide by zero