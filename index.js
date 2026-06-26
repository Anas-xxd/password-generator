const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const firstBox = document.getElementById("first-box");
const secondBox = document.getElementById("second-box");
const button = document.getElementById("menu-btn");
const sidebar = document.getElementById("side-bar");
const overlay = document.getElementById("overlay");
const value = document.getElementById("value");
const input = document.getElementById("char-num")

let numbersAvailable = true;
let symbolsAvailable = true;
let availableCharacters = [];

firstBox.addEventListener("click", () => {
    copyPassword(firstBox);
})

secondBox.addEventListener("click", () => {
    copyPassword(secondBox);
})

button.addEventListener("click", () => {
    sidebar.classList.toggle("active")
    overlay.classList.toggle("active")
})

overlay.addEventListener("click", () => {
    sidebar.classList.remove("active")
    overlay.classList.remove("active")
})

input.addEventListener("input", (event) =>{
    value.textContent = event.target.value
})

function copyPassword(box) {
    let password = box.textContent;

    navigator.clipboard.writeText(password);

    box.textContent = "Copied!";

    setTimeout(() => {
        box.textContent = password;
    }, 1000);
}

function genPasswords() {
    numbersAvailable = document.getElementById("numbers").checked;
    symbolsAvailable = document.getElementById("symbols").checked;
    let length = document.getElementById("char-num").value;
    
    getAvailableCharacters();
    
    firstBox.textContent = getRandomPassword(length);
    secondBox.textContent = getRandomPassword(length);
    
    availableCharacters = [];
    firstBox.style.cursor = "pointer";
    secondBox.style.cursor = "pointer";
}

function getAvailableCharacters(){
    for (let i = 0; i < letters.length; i++){
        availableCharacters.push(letters[i])
    }
    
    if (numbersAvailable){
        for (let i = 0; i < numbers.length; i++){
            availableCharacters.push(numbers[i])
        }
    }
    
    if (symbolsAvailable){
        for (let i = 0; i < symbols.length; i++){
            availableCharacters.push(symbols[i])
        }
    }
}

function getRandomPassword(length) {
    let password = "";
    for (let i = 0; i < length; i++){
        password += availableCharacters[getRandomNum(availableCharacters.length)];
    }
    return password
}

function getRandomNum(num) {
    return Math.floor(Math.random() * num);
}