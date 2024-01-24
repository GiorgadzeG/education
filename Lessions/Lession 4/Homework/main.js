// ● დაწერე ფუნქცია, რომელიც მიიღებს სამ
// პარამეტრს (string, valueToReplace,
// valueToReplaceWith), ჩაანაცვლებს
// "valueToReplace"-ს "valueToReplaceWith"
// მნიშვნელობით და დააბრუნებს ახალ stringს
// ● არ გამოიყენო string.replace() ფუნქცია

//??


// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს string ტიპის მნიშვნელობას
// (წინადადებას), მასში ყოველ სიტყვას
// გადაწერს დიდი ასოთი და დააბრუნებს
// ახალ წინადადებას


const capitalWords = (words) => {
  return words.map((word) => word.split(' ')
      .map((w) => w[0].toUpperCase() +w.slice(1))
      .join(" ")
  )
}


const a = ["Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much. They were the last people you’d expect to be involved in anything strange or mysterious, because they just didn’t hold with such nonsense."]

console.log(a);
console.log(capitalWords(a));


// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს მომხმარებლების მასივს და
// დააბრუნებს დალაგებულ მასივს
// მომხმარებლების ასაკის ზრდადობის
// მიხედვით
// ● მაგალითად, ჩავთვალოთ, რომ გვაქვს
// [{name: ‘Lasha’, age: 30}, {name: ‘Saba’, age: 20}].
// ფუნქციამ უნდა დააბრუნოს [{name: ‘Saba’,
// age: 20}, {name: ‘Lasha’, age: 30}]
// ● შეგიძლია გამოიყენო sort() ფუნქცია

function sortUsersByAge(users) {
    users.sort((a, b) => a.age - b.age);
    return users;
  }
 
  const users = [
    {name: 'Lasha', age: 30}, 
    {name: 'Saba', age: 20}
]


  const sortedUsers = sortUsersByAge(users);
  console.log(sortedUsers);