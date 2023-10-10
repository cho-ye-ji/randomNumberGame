const yourNumberInput = document.querySelector(".numberInputBox p .yourNumber");
const maxNumInput = document.querySelector(".numberInputBox .maxNumLine"); 
const maxNumLine = maxNumInput.value; 
const numberInputSubmit = document.querySelector(".numberInputSubmit");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNSME = "hidden";

function HandleInputSubmit() {
    const yourNumber = yourNumberInput.value;
    const maxNumLine = maxNumInput.value; 
    const randomNumber = Math.floor(Math.random() * maxNumLine);

  if (yourNumber > randomNumber) {
    greeting.innerText = `You chose: ${yourNumber}, the machine chose: ${randomNumber}.
        You won!`;
    greeting.classList.remove(HIDDEN_CLASSNSME);
  } else if (yourNumber === randomNumber) {
    greeting.innerText = `You chose: ${yourNumber}, the machine chose: ${randomNumber}.
        You are same!`;
    greeting.classList.remove(HIDDEN_CLASSNSME);
  } else {
    greeting.innerText = `You chose: ${yourNumber}, the machine chose: ${randomNumber}.
        You lost!`;
    greeting.classList.remove(HIDDEN_CLASSNSME);
  }
}


numberInputSubmit.addEventListener("click", HandleInputSubmit);



