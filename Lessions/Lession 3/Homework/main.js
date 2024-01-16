// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს n ცალ რიცხვს (n > 2). ფუნქციამ
// უნდა დააბრუნოს 2 - ელემენტიანი მასივი,
// სადაც პირველი ელემენტია პირველი და
// მეორე პარამეტრის ჯამი, ხოლო მეორე
// ელემენტი - მესამე ელემენტიდან
// დაწყებული ყველა დანარჩენის ნამრავლი

function superFunction (...args){
    if(args.length <= 2){
        return "Need more numbers"
    }

    let sum = args[0] + args[1]
    let multiplication = args.slice(2).reduce((a, b)  => a * b)
    return [sum, multiplication]
}
console.log(superFunction(1,2,3,4,5,6,7))  // [3, 2520]


// ● დავუშვათ გვინდა ობიექტიდან
// წავიკითხოთ შემდეგი ველი:
// user.banks[2].address.city. დაწერე ფუნქცია,
// რომელიც პარამეტრად მიიღებს user
// ობიექტს და დააბრუნებს city-ს. გამოიყენე
// destructuring-ი. თუ ასეთი ველი არ
// არსებობს უნდა დაბრუნდეს undefined

let user = {banks: [{}, {}, {adress: {
    city: "Tbilisi"
}}]}

const {banks: [, , {adress: {city}}]} = user

function getCity(obj){
    const {banks} = obj
    if(banks && banks[2]){
        const {adress} = banks[2]
        if(adress && adress.city){
            return city
        }
    }
    return undefined
}
 console.log(getCity(user)) // Tbilisi


// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს ნებისმიერ ობიექტს და
// დააბრუნებს იგივე მნიშვნელობების მქონე
// ახალ (განსხვავებულ) ობიექტს
// ● გაითვალისწინე, რომ თუ ობიექტში კიდევ
// სხვა ობიექტებია იმათი ასლებიც უნდა
// შეიქმნას
// ● გამოიყენეთ (...) ოპერატორი

function CopyObject(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }
    const copy = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = CopyObject(obj[key]);
        }
    }
    return copy;
}

const user344556 = {
    name: "Giorgi",
    lastname: "Giorgadze",
    address: {
        country: "Georgia",
        city: "Tbilisi",
        secretinformation: {
            street: "secret",
            phoneNumber: "total secret"
        }
    }
};

console.log(CopyObject(user344556))     // {
                                        //     "name": "Giorgi",
                                        //     "lastname": "Giorgadze",
                                        //     "address": {
                                        //         "country": "Georgia",
                                        //         "city": "Tbilisi",
                                        //         "secretinformation": {
                                        //             "street": "secret",
                                        //             "phoneNumber": "total secret"
                                        //         }
                                        //     }
                                        // }

