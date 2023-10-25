
 const openModalButton = document.getElementById("openModal");
 const modal = document.getElementById("myModal");
 const closeButton = document.querySelector(".close");

 openModalButton.addEventListener("click", () => {
     modal.style.display = "block";
 });

 closeButton.addEventListener("click", () => {
     modal.style.display = "none";
 });


 const colorInput = document.getElementById("colorInput");
 const changeColorButton = document.getElementById("changeColor");

 changeColorButton.addEventListener("click", () => {
     const newColor = colorInput.value;
     const validColors = ["red", "blue", "green", "black", "white"];
     
     if (validColors.includes(newColor)) {
         document.body.style.backgroundColor = newColor;
     } else {
         alert("არ არის სწორი ფერი");
     }
 });

 
 const numberInput = document.getElementById("numberInput");
 const calculateAverageButton = document.getElementById("calculateAverage");
 const resultDiv = document.getElementById("result");

 calculateAverageButton.addEventListener("click", () => {
     const numbers = numberInput.value.split(":").map(Number);
     const sum = numbers.reduce((acc, num) => acc + num, 0);
     const average = sum / numbers.length;

     if (!isNaN(average)) {
         resultDiv.textContent = `საშუალო რიცხვი: ${average}`;
     } else {
         resultDiv.textContent = "შეცდომა";
     }
 });