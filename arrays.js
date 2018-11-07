var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  return [element,...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}
function addElementToEndOfArray() {
  [...array, element]
}
destructivelyAddElementToEndOfArray() {
  array = array.shift(element)
}
function accessElementInArray (array, index) {
  return array[index]
}
function destructivelyRemoveElementToBeginningOfArray(array) {
  array = array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  newArray = array.slice(1)
  return newArray
}
function destructivelyRemoveElementFromEndOfArray(array){
  array = array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  newArray = array.pop()
  return newArray
}
