let textPw = document.querySelector("#pw-text");
let displaySize =  document.querySelector(".display-pw-size span");
let btnGenerate = document.querySelector(".generate");
let clipboard =  document.querySelector(".password a"); // es para seleccionar el enlace para copiar la contraseña


// estos cosos son para que la persona seleccione que cosos quiere para generar l contraseñia
let upper = document.querySelector("#upper");
let lower = document.querySelector("#lower");
let number = document.querySelector("#number");
let symbol = document.querySelector("#symbol");

let passwordAll = '';

// estos son los cosos, los datos para poder crear la contra
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //26
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";  //26
const numbers = "0123456789"; //10
const symbols = "!@#$%^&*()_+="; //13


//agregar los event listeners a los elementos del DOM
addEventLinsteners();
function addEventLinsteners(){
    btnGenerate.addEventListener('click', generatePw);

    clipboard.addEventListener('click', copyPw);
}


// para copiar la contraseña
function copyPw(e){
    e.preventDefault();
    const password = textPw.textContent;  // esto obtiene el texto de la contraseña generada
    if (password) {
        const textArea = document.createElement('textarea');
        textArea.value = password;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
    }
}

function generatePw(e){
    passwordAll = '';
    if (upper.checked) {
        passwordAll += getUpperCase();
    }if (lower.checked) {
        passwordAll += getLowerCase();
    }if (number.checked) {
        passwordAll += getNumberCase();
    }if (symbol.checked) {
        passwordAll += getSymbolCase();
    }

    if (upper.checked || lower.checked || number.checked || symbol.checked) {
        completePw();
    }
    //console.log(typeof(displaySize.textContent));
}

function completePw(){
    while (passwordAll.length < parseInt(displaySize.textContent)) {
        const numberR = getRandom();
        if (upper.checked && numberR === 0) {
            passwordAll += getUpperCase();
        }if (lower.checked && numberR === 1) {
            passwordAll += getLowerCase();
        }if (number.checked && numberR === 2) {
            passwordAll += getNumberCase();
        }if (symbol.checked && numberR === 3) {
            passwordAll += getSymbolCase();
        }
    }

    textPw.innerHTML = passwordAll;
}

function getRandomNumber(max){
    return Math.floor(Math.random() * max);
}
function getRandom(){
    return Math.floor(Math.random() * 4);
}

function getUpperCase(){
    return upperLetters[getRandomNumber(upperLetters.length)];
}
function getLowerCase(){
    return lowerLetters[getRandomNumber(lowerLetters.length)];
}
function getNumberCase(){
    return numbers[getRandomNumber(numbers.length)];
}
function getSymbolCase(){
    return symbols[getRandomNumber(symbols.length)];
}

function showVal(value){
    displaySize.textContent = value;
}