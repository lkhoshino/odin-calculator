function operate(){
    let isAddition = currentValue.includes("+");
    let isSubtraction = currentValue.includes("-");
    let isMultiplication = currentValue.includes("*");
    let isDivision = currentValue.includes("/");
    if(isAddition){
        let split = currentValue.split("+", 2);
        let a = parseInt(split[0]);
        let b = parseInt(split[1]);
        display.innerHTML = a+b;
        currentValue = display.innerHTML;
    }
    if(isSubtraction){
        let split = currentValue.split("-", 2);
        let a = parseInt(split[0]);
        let b = parseInt(split[1]);
        display.innerHTML = a-b;
        currentValue = display.innerHTML;
    }
    if(isMultiplication){
        let split = currentValue.split("*", 2);
        let a = parseInt(split[0]);
        let b = parseInt(split[1]);
        display.innerHTML = a*b;
        currentValue = display.innerHTML;
    }
    if(isDivision){
        let split = currentValue.split("/", 2);
        let a = parseInt(split[0]);
        let b = parseInt(split[1]);
        display.innerHTML = a/b;
        currentValue = display.innerHTML;
    }
    

}


const display = document.querySelector(".display");

let currentValue ="";

const button1 = document.querySelector(".button1");
button1.addEventListener("click", button1Pressed);
const button2 = document.querySelector(".button2");
button2.addEventListener("click", button2Pressed);
const button3 = document.querySelector(".button3");
button3.addEventListener("click", button3Pressed);
const button4 = document.querySelector(".button4");
button4.addEventListener("click", button4Pressed);
const button5 = document.querySelector(".button5");
button5.addEventListener("click", button5Pressed);
const button6 = document.querySelector(".button6");
button6.addEventListener("click", button6Pressed);
const button7 = document.querySelector(".button7");
button7.addEventListener("click", button7Pressed);
const button8 = document.querySelector(".button8");
button8.addEventListener("click", button8Pressed);
const button9 = document.querySelector(".button9");
button9.addEventListener("click", button9Pressed);
const button0 = document.querySelector(".button0");
button0.addEventListener("click", button0Pressed);

const buttonAdd = document.querySelector(".add");
buttonAdd.addEventListener("click", buttonAddPressed);
const buttonSub = document.querySelector(".sub");
buttonSub.addEventListener("click", buttonSubPressed);
const buttonMulti = document.querySelector(".multi");
buttonMulti.addEventListener("click", buttonMultiPressed);
const buttonDivis = document.querySelector(".divis");
buttonDivis.addEventListener("click", buttonDivisPressed);
const buttonEquals = document.querySelector(".equals");
buttonEquals.addEventListener("click", buttonEqualsPressed );
const buttonClear = document.querySelector(".clear");
buttonClear.addEventListener("click", buttonClearPressed);



function button1Pressed(){
    display.innerHTML = currentValue.concat("1");
    currentValue = display.innerHTML;
}
function button2Pressed(){
    display.innerHTML = currentValue.concat("2");
    currentValue = display.innerHTML;
}
function button3Pressed(){
    display.innerHTML = currentValue.concat("3");
    currentValue = display.innerHTML;
}
function button4Pressed(){
    display.innerHTML = currentValue.concat("4");
    currentValue = display.innerHTML;
}
function button5Pressed(){
    display.innerHTML = currentValue.concat("5");
    currentValue = display.innerHTML;
}
function button6Pressed(){
    display.innerHTML = currentValue.concat("6");
    currentValue = display.innerHTML;
}
function button7Pressed(){
    display.innerHTML = currentValue.concat("7");
    currentValue = display.innerHTML;
}
function button8Pressed(){
    display.innerHTML = currentValue.concat("8");
    currentValue = display.innerHTML;
}
function button9Pressed(){
    display.innerHTML = currentValue.concat("9");
    currentValue = display.innerHTML;
}
function button0Pressed(){
    display.innerHTML = currentValue.concat("0");
    currentValue = display.innerHTML;
}


function buttonAddPressed(){
    display.innerHTML = currentValue.concat("+");
    currentValue = display.innerHTML;
}
function buttonSubPressed(){
    display.innerHTML = currentValue.concat("-");
    currentValue = display.innerHTML;
}
function buttonMultiPressed(){
    display.innerHTML = currentValue.concat("*");
    currentValue = display.innerHTML;
}
function buttonDivisPressed(){
    display.innerHTML = currentValue.concat("/");
    currentValue = display.innerHTML;
}
function buttonClearPressed(){
    display.innerHTML = ("");
    currentValue = display.innerHTML;
}
function buttonEqualsPressed(){
    operate();
}

