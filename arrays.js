var chocolateBars = ["snicker", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = [element, ...array]
}
