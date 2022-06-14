import emojipedia from "./emojipedia";
var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
//first need the 'doing something' function - we will double numbers
function double(x) {
  return x * 2;
}
//now parse that function as an argument in the mapping function and apply it to array numbers
const newNumber1 = numbers.map(double);
console.log(newNumber1);

//quicker way of doing the above, no need to separately declare function:
const newNumber2 = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumber2);

//Filter - Create a new array by keeping the items that return true.
const newNumber3 = numbers.filter(function (num) {
  return num < 10;
});
console.log(newNumber3);

//Reduce - Accumulate a value by doing something to each item in an array.
//accumulator is most recent sum of all numbers up to the current number of
//the iteration we are on
const newNumber4 = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});
console.log(newNumber4);

//Find - find the first item that matches from an array.
const newNumber5 = numbers.find(function (num) {
  return num > 10;
});
console.log(newNumber5);

//FindIndex - find the index of the first item that matches.
const newNumber6 = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(newNumber6);

//challenge, return meanings from emojipedia shortened to 100 chars.
const meanings = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(meanings);
