// PART 1: printing with prompt
// Prompt the user for a number and cast it to a number
let user = prompt("enter a number")
 user = parseInt(user)

// Prompt the user for another number that is bigger than the first number and cast it to a number
let user2 = prompt("enter a larger number")
user2 = parseInt(user2)

// Write a JavaScript program that uses a for loop to print all numbers from the first number to the second number

for (let i = user; i <= user2; i++){
  console.log(i)
}
// PART 2: Averaging an array
// Create an array of numbers 
 let num = [1,2,3,4,5]

// Write a for loop that calculates the sum of the elements 
let sum = 0
for (let i = 0; i < num.length; i++){
  sum = num + sum
}
console.log(sum)



// Using the sum, calculate the average of all the elements (sum divided by the length of the array)


