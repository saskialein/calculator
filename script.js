let numStr = ''; // will hold user inputs as a string
let numArr = []; // will hold the pushed input strings in an array

let display = document.getElementById('display')

let previousResult = false;

document.addEventListener('click', getButtonValue)

function getButtonValue(e) {
    let button = e.target.value; //gets value for the clicked event
    
    // if a number or the decimal is clicked
    if (!isNaN(button) || button === '.') {
        number(button)
    }
    else if (button === 'AC') {
        clearAll()
    }
    else if (button === 'CE') {
        clearEntry()
    }
    else if (button === "=") {
        calculate()
    }
    // if +, -, * or / is clicked
    else {
        storeNumber(button)
    }
}

function number(button) {
    //no 2 decimals in one number string allowed
    if (button === '.' && numStr.includes('.')) {
        return
    }
    //only one 0 at the start of a number string allowed
    else if (numStr.charAt(0) === 'O' && numStr.length == 1 && button == '0') {
        return
    //if a number or the decimal is clicked
    } else {
        //disables adding numbers to the result string by emptying out the number string and setting the previous result to false
       if (previousResult === true) {
         numStr = ''
         previousResult = false
        }
        //adds clicked button to the string and shows the string value in the display
        numStr += button
        display.value = numStr
    }
}

//clears everything
function clearAll() {
    numStr = ''
    numArr = []
    display.value = '0'
}

//clears most recent entry
function clearEntry() {
    numStr = ''
    display.value = '0'
}

//stores the current number string as soon as plus, minus, division or multiplication button is hit
function storeNumber(button) {
    //returns out of the function if the number string and the number array do not hold any values
    if (numStr === '' && numArr.length === 0) {
        return
    }
    // What does that do???
    else if (numStr === '') {
        numArr.length = numArr.length - 1
        numArr.push(button)
    }
    //pushes the number string and the mathematical operation button into the numbers array and empties number string
    else {
        numArr.push(numStr)
        numArr.push(button)
        numStr = ''
    }
}

function calculate() {
    //pushes the last number string into the array
    numArr.push(numStr)
    //converts the first array item of the numbers array into a number and assigns it to a variable
    let currentNumber = Number(numArr[0])
    //loops through the numbers array
    for (let i = 0; i < numArr.length; i++) {
        //assigns the next number of the array to a variable
        let nextNumber = Number(numArr[i + 1])
        let symbol = numArr[i]
        //finds the symbols in the array and determins which mathematical operation has to be carried out
        switch (symbol) {
            case "+":
                currentNumber += nextNumber
                break;
            case '-':
                currentNumber -= nextNumber
                break;
            case '*':
                currentNumber *= nextNumber
                break;
            case '/':
                currentNumber /= nextNumber
                break;
        }
    }
    
    //displays the result, converts the current number back in to a string, empties the array and sets previous result to true
    display.value = currentNumber
    numStr = JSON.stringify(currentNumber)
    previousResult = true
    numArr = []
}
