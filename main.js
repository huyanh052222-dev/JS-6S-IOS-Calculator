const display = document.getElementById("result");
const displayWrap = document.getElementById("display");

function comingSoon(){
    display.textContent = "Coming Soon!";
    effectDisplay('jump');
}

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
    if(display.innerText === "Welcome to my Calculator"|| display.innerText === "Error" || display.textContent === "Infinity" || display.textContent === "Coming Soon!"){
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
    if(display.textContent === "Welcome to my Calculator" || display.innerText === "Error"|| display.textContent === "Coming Soon!"){
        display.textContent = "0";
        effectDisplay('jump');
        return;
    }
    try {
        let expression = display.textContent;
        let formula = expression.replace(/x/g, '*').replace(/÷/g, '/').replace(/%/g, '/100');

        let result = eval(formula);

        if (!isFinite(result)) {
            display.textContent = "Infinity";
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

function signNum(){
    let currentDisplay = display.textContent;

    if(currentDisplay === "0" ||currentDisplay === "Welcome to my Calculator" || currentDisplay === "Error" || currentDisplay === "Infinity" || currentDisplay === "Coming Soon!"){
        effectDisplay('jump');
        return;
    }

    if(currentDisplay.startsWith("-(") && currentDisplay.endsWith(")")) {
        display.textContent = currentDisplay.slice(2, -1);
    }else {
        display.textContent = `-(${currentDisplay})`;
    }

    effectDisplay('jump');
}