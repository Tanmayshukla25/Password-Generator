let inputbox = document.getElementById("Password-box");
let Password = document.getElementById("Password");
let Upper = document.getElementById("Upper");
let lower = document.getElementById("lower");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");
let generatebtn = document.getElementById("btn");
let resetbtn = document.getElementById("resetBtn");
let copybtn = document.getElementById("copybtn");

let Uppercase_characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase_characters = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*";
let storedPasswords=JSON.parse(localStorage.getItem("storedPasswords"))||[];

generatebtn.addEventListener("click", () => {
   let availableChars = ""; 
   let passwordArray = [];

   let passwordLength = parseInt(Password.value);
   if (isNaN(passwordLength) || passwordLength < 6) {
      alert("Please enter a valid number with at least 6 digits");
      return;
   }
   if(passwordLength>=12){
      alert("Please enter only 12-digits number");
      return;
   }

   let selectedCategories = [];

   if (number.checked) {
      availableChars += numbers;
      selectedCategories.push(numbers);
   }
   if (Upper.checked) {
      availableChars += Uppercase_characters;
      selectedCategories.push(Uppercase_characters);
   }
   if (lower.checked) {
      availableChars += lowercase_characters;
      selectedCategories.push(lowercase_characters);
   }
   if (symbol.checked) {
      availableChars += symbols;
      selectedCategories.push(symbols);
   }
   if (availableChars === "") {
      alert("Please select at least one option!");
      return;
   }

   selectedCategories.forEach(category => {
      passwordArray.push(category[Math.floor(Math.random() * category.length)]);
   });


   for (let i = passwordArray.length; i < passwordLength; i++) {
      passwordArray.push(availableChars[Math.floor(Math.random() * availableChars.length)]);
   }
   
   passwordArray = passwordArray.sort(() => Math.random() );

 
   let allPassword = passwordArray.join("");

   inputbox.innerHTML = allPassword; 

   storedPasswords.unshift(allPassword);
     if(storedPasswords.length>5){
      storedPasswords.pop();
     }

     localStorage.setItem("storedPasswords",JSON.stringify(storedPasswords));
});

resetbtn.addEventListener("click", () => {
   inputbox.innerHTML = "";
   Password.value = "";
   Upper.checked = false;
   lower.checked = false;
   number.checked = false;
   symbol.checked = false;
});


copybtn.addEventListener("click", () => {
   let passwordText = inputbox.innerHTML;
   if (passwordText === "") {
      alert("No password to copy!");
      return;
   }

   navigator.clipboard.writeText(passwordText)
      .then(() => {
         alert("Password copied to clipboard!");
          
         console.log("Copied Passwords: ", copiedPasswords); 
      })
      .catch(err => console.error("Failed to copy: ", err));
});