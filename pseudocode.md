# Calculator

## JS Pseudocode

### General setup:
* create variables for: an empty number string and an empty number array
* grab display element from html
* create a variable for the previous result which is defaulted to false

* create a function that listens for a click event and fires the getButtonValue function (add event listener)
* call the above function

### Functions:
* declare main function that gets the value of the pressed buttons
    * create button variable which holds the event.target.value  
    * if it is a number OR the decimal '.' > fire the number function
    * else if button is AC > fire the all clear function
    * else if button is CE > fire the clear function
    * else if button is '=' > fire the calculate funtion
    * else > fire the store number function (function that holds the numbers in the array)


* declare functions for the different events:
    * 'number' function which takes a button as an argument
        - if the pressed button is a decimal '.' and the number string includes a decimal > return out of the function
        - else if the first character of the number string is a O and the number string has only 1 character and the button is a 0 > return out of the function
        - else > if previous result is true: set numbers string to empty and set previous result to false
            - number string takes on the value of the clicked button
            - display value changes to show the number string

    * 'all clear' function: 
        - sets the number string back to an empy string
        - sets the numbers array back to empty array
        - sets the display value back to 0
    
    * 'clear' function:
        - sets the number string back to 0
        - sets the display value back to 0

    * 'store number' function: takes a button as an argument
        - if the number string is empty and the numbers array holds no values > return out of the function
        - else if the number string is empty > number array length = number array length -1 and push the pressed button into the numbers array
        - else > push the numbers string into the numbers array, push the pressed button into the numbers array and set the numbers string back to an empty string

    * 'calculate' function:
        - push the numbers string into the numbers array
        - create a new variable for the current number which holds the first value of the numbers array and converts it into a number (Number function!)
        - loop through the numbers array:
            - set a variable for the next number which holds the next value in the array converted to a number
            - set a symbol variable which will hold any symbol of the numbers array
                if the symbol is a +: add next number to the current number
                else if the symbol is a -: subract next number from the current number
                else if the symbol is a *: multiply next number to the current number
                else if the symbol is a /: subtract the next number from the current number
            - if the current number is negative: convert the current number to an absolute number and concatenate with a minus symbol 

            - set the display value to the current number
            - convert the current number into a string using JSON stringify
            - set the previous result to true
            - empty the numbers array


