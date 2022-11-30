// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

let numbers = [1,2,3,4,5,18,19]
numbers.reverse ();
console.log(numbers)

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

let numbersMax = Math.max(...numbers)
console.log(numbersMax)

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

let numbersMin = Math.min(...numbers)
console.log(numbersMin)

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

let numbersEven = numbers.filter(number => number % 2 === 0)
let sortEven = numbersEven.sort((a,b) => a - b);
console.log(numbersEven)


/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

console.log(numbers.slice(sortEven))
let sortNumbers = numbers.sort((a,b) => a - b);
console.log(numbers)

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

let examples = "Pneumonoultramicroscopicsilicovolcanoconiosis";
let noVowels = examples.replace(/[aeiou]/gi,"");
console.log(noVowels);

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

let additionalBy1 = numbers.map (num => num + 1);
console.log(additionalBy1)


/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */
