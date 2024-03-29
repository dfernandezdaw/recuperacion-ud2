'use strict'

// Factorial of a given number using recursion
function factorial(n) {
  if (n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}

const number = window.prompt('Enter a number to calculate its factorial: ', '0')

// Check if the user entered a valid number or not and display the result accordingly
if (isNaN(number)) {
  window.alert('Invalid number')
} else {
  window.alert('The factorial of ' + number + ' is ' + factorial(number))
}
