//numbers
// daweret funcqia romelic parametrad miigebs ricxvebis massivs da daabrunebs
// ricxvebis procentul ganawilebas
const calculatePercentage = (numbers) => {
    let sum = 0;
    for(const num of numbers){
        sum += num;
    }
    return numbers.map((num) => ((num / sum) * 100).toFixed(3));
}
console.log(calculatePercentage([30,40,50,100])); // ['13.636', '18.182', '22.727', '45.455']


//arrays
const names = ["James", "Temo", "Gio"]
names.pop() // ['James', 'Temo']
names.push("Nona") // ['James', 'Temo', 'Nona']

names.shift() // ['Temo', 'Nona']
names.unshift("Tamuna") // ['Tamuna', 'Temo', 'Nona']


const names2 = ["James", "Temo", "Gio"]
const newArr = names2.slice(1)
console.log(names2); // ['James', 'Temo', 'Gio']
console.log(newArr); // ['Temo', 'Nona']

const names3 = ["James", "Temo", "Gio"]
const newArr2 = names3.splice(1)
console.log(names3); // ['James']
console.log(newArr2); // ['Temo', 'Gio']



// combine arrays - gavaertianot masivebi
// dawere funkcia, romelic parametrad miigebs 2 masivs da meore masivs chaamatebs
// pirveli masivis shuashi. pirveli masivi yoveltvis 2 elementiania 

const combineArrays = ([first, last], b) => {
    // const result = [];
    // result.push(first);
    // for (const item of b) {
    //     result.push(item);
    // }
    // result.push(last)
    // return result;

    return [first, ...b, last]
}
console.log(combineArrays([3, 3, 15, 14, 12], [4, 32, 2, 4, 66, 2])); // [3, 4, 32, 2, 4, 66, 2, 3]


// string - mnishvnelobaa aq dids da patara asos
const text = "Hello World!";
console.log(text.indexOf("ll")); // 2 - gachvenebs index rodis iwyeba sasurveli fragmenti
console.log(text.startsWith("hello")); // false - iwyeba tu ara bullian
console.log(text.endsWith("!")); //  true
console.log(text.includes("o W")); // true - sheicavs tu ara textsi fragments
console.log(text.slice(1,5)); // ello - amoachris mititebul nawils indexebis 
console.log(text.substring(1,5)); // ello - igive rogorc slice magram slicistvis -1 indexi ari bolo aso da -2 bolodan pirveli aso da iwyebs iqedan, substringi vera
console.log(text.toUpperCase()); // HELLO WORLD! - yvela aso didi
console.log(text[0].toUpperCase()+text.slice(1)); // Hello World! - gaadida pirveli aso mara mainc didi iyo da ravi
console.log(text.split(' ')); // ['Hello', 'World!'] - gaxlicha teksti spaceis adgilas da daabruna masivat


// funqia romelic qveda xazebs moashorebs da gaxdis sityvebs didi asoti
const capitalWords = (words) => {
const result = []
for (const word of words){
    const splitArr = word.split("_") // ["agent", "james", "bond"]
    const capitalArr = []

    for(const w of splitArr){
        const upper = w[0].toUpperCase()+w.slice(1)
        capitalArr.push(upper)
    }

    result.push(capitalArr.join(" "))
    }

    return result
}

console.log(capitalWords(["hello_world", "agent_james_bond", "world_cup_sports_association"])); // ['Hello World', 'Agent James Bond', 'World Cup Sports Association']

//igive mokled
const capitalWords2 = (words) => {
        return words.map((word) => word.split("_")
            .map((w) => w[0].toUpperCase()+w.slice(1))
            .join(" ")
        )
    }
    console.log(capitalWords2(["hello_world", "agent_james_bond", "world_cup_sports_association"])); // ['Hello World', 'Agent James Bond', 'World Cup Sports Association']


// objects 

const person = {
    name: "James",
    address: {
        tbilisi: {
            district: {
                street: "Tamarashvili"
            }
        }
    },
    friends: [
        {closeFriend: {name: "Giga"}},
        {closeFriend: {name: "Giorgi"}}
    ]
}

const deepCopy = (obj) => {
    const result = {}
    
    for(const fn in obj){
        if(typeof obj[fn] === "object"){
            if(Array.isArray(obj[fn])){
                //Array
                result[fn] = obj[fn].map((el) => deepCopy(el))
            }else{
                //object
                result[fn] = deepCopy(obj[fn])
            }

        }else{
            result[fn] = obj[fn]

        }
    }
    return  result
}

const person2 = deepCopy(person)
console.log(person2);