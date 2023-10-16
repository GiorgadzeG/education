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


