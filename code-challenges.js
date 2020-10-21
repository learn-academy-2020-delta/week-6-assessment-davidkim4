// ASSESSMENT 6: JavaScript Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

const sentence = (array) => {
  //First we use the .map function to run through each object in the array.
  return array.map(value => {
    //We then initialize a new variable to hold all the names and split them into a subarray of letters, and one for all the occupations.
    let nameArr = value.name.split(" ")
    let occArr = value.occupation
    //Map through the subarray of characters and capitalize only the first character of each word, then attach the rest of the word starting from the letter after the first character to the capitalized letter.
    nameArr = nameArr.map(value => {
      return value.charAt(0).toUpperCase() + value.substring(1)
    })
    //The capitalized names and the occupation is then interpolated into a sentence, and then joined again so that it returns a combined string.
    return `${nameArr.join(" ")} is a ${occArr}.`
  }).join(" ")
}

console.log(sentence(people));



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDER of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

const remainder = (array) => {
  //Filter through the array to look for any array values that are of type number, then map through the filtered array to return the remainder of each number mod 3.
  return array.filter(value => typeof value === "number").map(value => value % 3)
}

console.log(remainder(testingArray1));
console.log(remainder(testingArray2));

// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

const uniqArr = (array1, array2) => {
  //Initialize a new array that is the concatenation of array1 and array2.
  let arr = array1.concat(array2)
  //Filter through the concatenated array and return only array values that have a unique index. If there is a duplicate array value, the function checks to see if the duplicate array value's index value is different. If it is, it will not return the duplicate because the index is not the same as the first array value's index.
  return arr.filter((value, index) => arr.indexOf(value) === index)
}

console.log(uniqArr(testingArray3, testingArray4));
