'use strict'

// Function that calculates the DNI letter
function dniLetter(dni) {
  const dniLetters = 'TRWAGMYFPDXBNJZSQVHLCKE'
  const dniLetter = dniLetters[dni % 23]
  return dniLetter
}

// Function that validates the DNI number
function validateDni(dni) {
  const dniNumber = parseInt(dni)
  if (isNaN(dniNumber)) {
    return false
  }
  if (dniNumber < 0 || dniNumber > 99999999) {
    return false
  }
  return true
}

// Function that validates the DNI number and returns the letter
function dni(dni) {
  if (!validateDni(dni)) {
    return 'Invalid parameter'
  }
  return dniLetter(dni)
}

// Get the DNI number from the user
const dniNumber = window.prompt('Enter your DNI number: ', '0')
// Call the function that validates the DNI number and returns the letter
const letter = dni(dniNumber)
// Show the result
if (letter === 'Invalid parameter') {
  window.alert('Invalid DNI number')
} else {
  window.alert('Your complete DNI is ' + dniNumber + letter)
}
