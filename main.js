const display = document.getElementById("result");
const displayWrap = document.getElementById("display");

function clearDisplay(){
    display.textContent = "0";
    effectDisplay('jump');
}

function deleteOne(){
    if(display.innerText === "0"){
        effectDisplay('jump');
        return;
    } 
    if(display.innerText === "Welcome to my Calculator"){
        clearDisplay();
        return;
    }
    let currentText = display.textContent;
    let charArr = currentText.split('');
    console.log(charArr);


    charArr.pop();
    let result = charArr.join('');

    display.textContent = (result === "") ? "0" : result;
}

function addPad(character){
    if(display.innerText === "Welcome to my Calculator" || display.innerText === "0"|| display.innerText === "Error"){
        display.textContent = character;
    } else{
        display.textContent += character;
    }
    console.log(display.textContent);
}
function effectDisplay(effect) {
    displayWrap.classList.remove('jump', 'shakeAnimate');
    void displayWrap.offsetWidth; 
    displayWrap.classList.add(effect);
}

function calculate() {
    if(display.textContent === "Welcome to my Calculator"){
        display.textContent = "0";
        effectDisplay('jump');
        return;
    }
    try {
        let expression = display.textContent;
        let formula = expression.replace(/x/g, '*').replace(/÷/g, '/').replace(/%/g, '/100');

        let result = eval(formula);

        if (!isFinite(result)) {
            display.textContent = "Error";
            effectDisplay('shakeAnimate');
        } else {
            display.textContent = result;
            effectDisplay('jump');
        }

    } catch (error) {
        display.textContent = "Error";
        effectDisplay('shakeAnimate')
    }
}

