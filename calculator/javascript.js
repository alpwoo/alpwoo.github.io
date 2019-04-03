// javascript code for the calculator exercise

let displayExpression = document.getElementById("displayExpression");
let operatorExpression = document.getElementById("operatorExpression");
let resultDisplayed = false;
let decimalAdded = false;
let operatorAdded = false;

function addNumberToDisplay(number)
{
    if(resultDisplayed == true)
    {
        displayExpression.textContent = "";
        operatorExpression.textContent = "";
        resultDisplayed = false;
    }
    displayExpression.textContent += number;
    operatorAdded = false; 
}

function displayInput(displayButtons){
    displayButtons.forEach(button => {
        button.addEventListener("click", event => {
            addNumberToDisplay(button.children[0].textContent);
        })
    });

    window.addEventListener("keypress", event => {
        switch(event.key){
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
              addNumberToDisplay(event.key);
              break;
            }
    });
}

function displayEventListener (){
    const displayButtons = document.querySelectorAll(".display");
    displayInput(displayButtons);
}

function addOperatorToDisplay (operator)
{
    if ((operatorExpression.textContent == "" && displayExpression.textContent == "") || operatorAdded == true)
        return;
    else if (resultDisplayed == true){
        operatorExpression.textContent = displayExpression.textContent;
    }
    else{
        operatorExpression.textContent += displayExpression.textContent;
     }

    operatorExpression.textContent += operator;
    displayExpression.textContent = "";
    decimalAdded = false;
    resultDisplayed = false;
    operatorAdded = true;
}

function operatorInput(operatorButtons){
    operatorButtons.forEach(button => {
      button.addEventListener("click", event => {
          addOperatorToDisplay(button.children[0].textContent);
        });
    });

    window.addEventListener("keypress", event => {
        switch(event.key){
            case "*":
            case "/":
            case "+":
            case "-":
            addOperatorToDisplay(event.key);
              break;
            }
    });
 }

function operatorEventListener(){
    const operatorButtons = document.querySelectorAll(".operator");
    operatorInput(operatorButtons);
}

function clear(){
    operatorExpression.textContent = "";
    displayExpression.textContent = "";
    resultDisplayed = false;
    decimalAdded = false;
    operatorAdded = false;
}

function clearEventListener(){
    const clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", (e) =>{
      clear();
    });

    window.addEventListener("keypress", event => {
        if(event.key == "C" || event.key == "c")
            clear();
        });
    
  }

function displaySolution ()
{
    if (resultDisplayed == true)
        return;

    operatorExpression.textContent += displayExpression.textContent;
    let number = eval (operatorExpression.textContent);    displayExpression.textContent = number;
    resultDisplayed = true;
    decimalAdded = false;
    operatorAdded = false;
}

function equalEventListener(){
    const equalButton = document.getElementById("equalButton");
    equalButton.addEventListener("click", (e) =>{
      displaySolution();
    });

    window.addEventListener("keypress", event => {
        if(event.key == "=" || event.key == "Enter")
            displaySolution();
        });

  }

  function addDecimalToDisplay()
  {
    if(resultDisplayed == true)
    {
        displayExpression.textContent = "";
        operatorExpression.textContent = "";
        resultDisplayed = false;
    }

    if(decimalAdded == false)
      {
        displayExpression.textContent += ".";
      }
      
      decimalAdded  = true;
   
  } 
  
  function decimalEventListener(){
    const decimalButton = document.getElementById("decimalButton");
    decimalButton.addEventListener("click", (e) =>{
        addDecimalToDisplay();
    });

    window.addEventListener("keypress", event => {
        if(event.key == ".")
            addDecimalToDisplay();
        });
    
  }

  function deleteFunction(){
    if(displayExpression.textContent.length != 0){
        if(displayExpression.textContent.slice(-1) === ".")
          decimalAdded = false;

        if(operatorExpression.textContent.slice(-1) === "="){
          operatorExpression.textContent = "";
          displayExpression.textContent = displayExpression.textContent.slice(0, displayExpression.textContent.length - 1);
        }else{
          displayExpression.textContent = displayExpression.textContent.slice(0, displayExpression.textContent.length - 1);
        }
    
      }else{
        if(isNaN(operatorExpression.textContent.slice(-1))){
          operatorExpression.textContent = operatorExpression.textContent.slice(0, operatorExpression.textContent.length - 1);
        }else{
          operatorExpression.textContent = "";
        }
      }
    
  }

  function deleteEventListener(){
    const deleteButton = document.getElementById("deleteButton");
    deleteButton.addEventListener("click", (e) =>{
        deleteFunction();
    });

    window.addEventListener("keydown", event => {
        if(event.key == "Delete" || event.key == "Backspace" )
        deleteFunction();
        });
    
  }

deleteEventListener();
decimalEventListener();
displayEventListener();
operatorEventListener();
clearEventListener();
equalEventListener();