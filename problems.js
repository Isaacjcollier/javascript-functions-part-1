console.log('sanity check!')
console.log('=-=-=-=-=-=Q1-=-=-==-=-=-=-=-=')
// 1.) Define a function called sum that takes two numbers as arguments and returns their sum

function sum (a, b) {
  return a + b
}

var resultSum = sum(1, 2)

console.log(resultSum === 3) // => true
console.log(resultSum === 5) // => false

console.log('=-=-=-=-=-=Q2-=-=-==-=-=-=-=-=')
// 2.) Define a function called isEqual that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.

function isEqual (a, b) {
  if (a === b) {
    return true
  } else {
    return false
  }
}

console.log(isEqual(1, 1)) // => true
console.log(isEqual(1, 2)) // => false
console.log(isEqual(1, '1')) // => false
console.log(isEqual('one', 'one')) // => true
console.log('=-=-=-=-=-=Q3-=-=-==-=-=-=-=-=')
// 3.) Define a function called discountPercentage that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less that 0 percent.

function discountPercentage (price, discount) {
  var percent = discount / 100
  if ((percent * price) >= price && ((percent * price) < 0)) {
    return 'Warning this coupon is fake'
  } else {
    return (percent * price)
  }
}

console.log(discountPercentage(500, 50))

console.log('=-=-=-=-=-=Q4-=-=-==-=-=-=-=-=')
// 4.) Define a function called stringCapitalize that takes a string as an argument and returns the same string with the first letter of each word capitalized. Assume that each individual word is separated by only one space.

// Define a function Called stringCapitalize
function stringCapitalize (phrase) { // the function should take a string as an argument
  var seperatedWords = phrase.split(' ') // seperate the phrase into words
  for (var i = 0; i < seperatedWords.length; i++) { // create a for loop that will continue to cycle through until it reaches the length of the argument/phrase that you are passing through.
    var letters = seperatedWords[i].split('') // establish a variable that takes the first word in the argument/phrase and sets it equal to that variable.
    letters[0] = letters[0].toUpperCase() // select the newly established variable, and select the first letter in that array/string, and capitalize it.
    seperatedWords[i] = letters.join('') //  replace the word in the phrase with the newly capitalized word.
  }
  return seperatedWords.join(' ') // Join the array with spaces inbetween each index of the array so that you have a full sentence.
}

console.log(stringCapitalize('the little lamb had 5 sheep')) // log into the terminal the value of the function.

console.log('=-=-=-=-=-=Q5-=-=-==-=-=-=-=-=')

// 5.) Define a function called evenNumbers that takes an arbitrary integer as an argument, from 0 to 100, and outputs all the even integers from 0 to that arbitrary number.

function evenNumbers (num) {
  if (num > 100 && num < 0) {
    return false
  }
  for (var i = 0; i < num; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  }
  return 'The function outputs all the even integers from 0 to the number'
}

console.log(evenNumbers(56))

console.log('=-=-=-=-=-=Q6-=-=-==-=-=-=-=-=')

// 6.) Define a function called isDivisible that takes two arguments and returns a boolean. Return true if the first argument is divisible by the second; otherwise, return false.

function isDivisible (a, b) {
  if (a % b === 0) {
    return true
  } else {
    return false
  }
}

console.log('Is 15 divisble by 3? ', isDivisible(15, 3)) // => true
console.log('Is 333 divisible by 2? ', isDivisible(333, 2)) // => false

console.log('=-=-=-=-=-=Q6-=-=-==-=-=-=-=-=')

// Bonus: Write a function called oddNumbers that takes an arbitrary integer as an argument, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the arbitrary number. If the number is less than 40, output all the odd integers from 0 to 40.

function oddNumbers (num) {
  if (num > 100 && num < 0) {
    return false
  } else if (num > 40) {
    for (var i = 40; i < num; i++) {
      if (i % 2 !== 0) {
        console.log(i)
      }
    }
  } else if (num < 40) {
    for (var j = 0; j < num; j++) {
      if (i % 2 !== 0) {
        console.log(j)
      }
    }
  } return 'The function outputs all the odd integers from either 0 to the number, or 40 to the number (unless the number is over 100 or negative)'
}
console.log(oddNumbers(50))
console.log(oddNumbers(39))
