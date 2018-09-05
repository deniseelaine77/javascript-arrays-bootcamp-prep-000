var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

//take 2 parameters, an array and an element and add to the beginning of the array.  this one should not modify the original array.
function addElementToBeginningOfArray(array, element) {
  return[element, ...array]
}

//take 2 parameters, an array and an element, and add to the beginning of the array, this one should modify the original array.
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

//take 2 parameters, an array and an element, and add to the end of the array, this should not modify the original array
function addElementToEndOfArray(array, element) {
  return[...array, element]
}

//take 2 parameters, an array and an element, and add to the end of the array.  this one should modify the original array
function destructivelyAddElementToEndOfArray(array, element) {
  array = [...array, element]
  return array
}

function accessElementInArray(array, index) {
  return array.[index] + " " + 
}