const display = document.getElementById("result");

function clearDisplay(){
    display.textContent = "0";
}

function deleteOne(){
    if(display.innerText === "0"){
        return;
    } 
    if(display.innerText === "Welcome to my Calculator"){
        display.textContent = "0";
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
    if(display.innerText === "Welcome to my Calculator" || display.innerText === "0"){
        display.textContent = character;
    } else{
        display.textContent += character;
    }
    console.log(display.textContent);
}
