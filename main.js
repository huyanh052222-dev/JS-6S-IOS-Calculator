const display = document.getElementById("result");

function clearDisplay(){
    display.textContent = "0";
}

function deleteOne(){

}

function updateDisplay(){
    
}

function addPad(character){
    if(display.innerText === "Welcome to my Calculator"){
        display.textContent = character;
    } else{
        display.textContent += character;
    }
    console.log(display.textContent);
}