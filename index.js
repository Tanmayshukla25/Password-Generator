let inputbox = document.getElementById("Password-box");
let Password = document.getElementById("Password");
let Upper = document.getElementById("Upper");
let lower = document.getElementById("lower");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");
let generatebtn = document.getElementById("btn");
let resetbtn = document.getElementById("resetBtn");

let Uppercase_characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase_characters = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()<>?/|{}[]";

generatebtn.addEventListener("click", () => {
   let availableChars = ""; 
   let allPassword = ""; 

   let passwordLength = parseInt(Password.value);
   if (isNaN(passwordLength) || passwordLength < 6) {
      alert("Please enter a valid number with at least 6 digits");
      return;
   }
   if(passwordLength>=12){
      alert("Please enter only 12-digits number");
      return;
   }

   if (Upper.checked) availableChars += Uppercase_characters;
   if (lower.checked) availableChars += lowercase_characters;
   if (number.checked) availableChars += numbers;
   if (symbol.checked) availableChars += symbols;

   if (availableChars === "") {
      alert("Please select at least one option!");
      return;
   }

   for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      allPassword += availableChars[randomIndex];
   }

   inputbox.innerHTML = allPassword; 
});

resetbtn.addEventListener("click", () => {
   inputbox.innerHTML = "";
   Password.value = "";
   Upper.checked = false;
   lower.checked = false;
   number.checked = false;
   symbol.checked = false;
});
