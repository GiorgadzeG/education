// ● შექმენი <button> და <div> ელემენტები და
// მიანიჭეთ საკუთარი უნიკალური id
// ● <div> - ში ჩაწერე პატარა random ტექსტი
// ● ღილაკზე დაჭერის შემთხვევაში დამალე
// <div> ელემენტი


function hideDiv() {
    const divElement = document.getElementById("Div");
    divElement.style.display = "none";
}

const button = document.getElementById("Button");
button.addEventListener("click", function() {
    const divElement = document.getElementById("Div");
    hideDiv();
});



// ● შექმენი შემდეგი სტრუქტურა JS -ის
// გამოყენებით და დაამატე DOM-ში:
// <div id=”card”>
// <h2>Gandalf</h2>
// <a href=”#”>Go to profile</a>
// </div>

const cardDiv = document.createElement("div");
cardDiv.id = "card";

const heading = document.createElement("h2");
heading.textContent = "Gandalf";

const link = document.createElement("a");
link.href = "#";
link.textContent = "Go to profile";

cardDiv.appendChild(heading);
cardDiv.appendChild(link);


document.body.appendChild(cardDiv);


// ● შექმენი quiz თამაში
// ● დაწერე რამდენიმე მოკლე შეკითხვა
// თავისი სავარაუდო პასუხებით
// ● სწორ პასუხზე დაჭერის შემთხვევაში
// გაამწვანე პასუხი
// ● არასწორი პასუხის შემთხვევაში გააწითლე
// ● ბონუს დავალება:
// გამოიტანე ეკრანზე ქულების რაოდენობა
// სწორი პასუხის შემთხვევაში დაამატე 1
// ქულა
// არასწორის შემთხვევაში უცვლელი რჩება
 