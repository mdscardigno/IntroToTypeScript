let s1 = 'This is a sentence.'

let s2 = `This is a sentence. `

// Methods of declaring variables
// var declares a variable to be function or globally scoped, optionally initializing it to a value.
//let declares a block-scoped local variable, optionally initializing it to a value.
//const declares a block-scoped local variable, which is read-only.
//undeclared global without var, let or const, we create a global variable.
if (true) {
  //Wow. *score* exists here... because of hoisting
}
// Hoisting is a concept or behavior in JavaScript where the declaration of a function,
// variable, or class goes to the top of the scope they were defined in.
//In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.
//Only the declaration is moved to the memory in the compile phase.
var score = 42
//let is more like the var in c#

//const is a constant, it cannot be changed
const personName = 'Mary'

score = 100
// @ts-ignore
personName = 'John' // it cannot be reassigned

// @ts-ignore
favoriteColor = 'Blue' // error

//WE ARE GOING TO USE LET AND CONST
//WE ARE GOING TO PREFER CONST OVER LET
//const variables are assigned a value on the same statement where they are declared.
//They can also not be re-assigned later in the code.
// const answer = 42
//not allowed, will be an error:
//answer = answer + 1

//let variables do not need to be assigned a value on the same statement they are declared.
//They can be re-assigbed later in the code.
// let score = 98
score = score + 1

//let score
//the value of score will be undefined

// to be continued on 1:00:07 *LET*
let students = ['Mary', 'John', 'Jane']
const teachers = ['Mr. Smith', 'Mrs. Jones']
let scores = [98, 100, 78, 99, 100]
//javascript can mix and match
const differentThings = ['Mary', 98, true, null, undefined, { name: 'Mary' }]
const differentKindsOfThings = [42, 'Ice Cream', 100, 'Pizza']
//
//:string
//
//^^^ this is Typescript specific. This is NOT valid JS
//Since this is me teaching Typescript.
// const differentMoreKindsOfThings: (string | number | boolean)[] = [
//   42,
//   'Ice Cream',
//   100,
//   'Pizza',
//   98,
// ]
//the pipe symbol is an OR
//explicitly typed array
// let studentName: string = 'Mary' this can only be done in ts files
//
//The inference: let TypeScript figure out the type until it cant.
//
differentKindsOfThings.push('Candy')
differentKindsOfThings.push(98)
// differentKindsOfThings.push(true) it knows I am trying to push a boolean so we add | boolean to the types
// so it is better to be explicit with the type
//so we will end up with: (string | number | boolean)[]
//const anyKindsOfThings: any[] = ['Mary', 98, true, null, undefined, { name: 'Mary' }]
//
//const personName = 'Mila'
//personName = 'Mary' // error. So why is the Push working? Look at the notes bellow about what is a const
//
//const grade = 98
//grade = grade + 1 I am computing a new value for grade and reassigning it. So
//This is not changing the value of grade, this is reassigning the value of grade
//const doesnt mean that the value of the const cannot change,
//it means that the variable cannot be reassigned the variable to point to a different value
//but what const really means is that variable name cant appear on the left side of an assignment operator again
//const =  unreassignable variable
//strings and numbers are inmutable so you cannot change them
//unlike an array that can grow and shrink therefore are mutable
//booleans are inmutable: true cant be changed to false and viceversa
//NOTE: I cannot completely reasign an array, but
//I can change the contents of the array by using push, pop, shift, unshift, splice, etc
//
//to be continued on 1:31:00 *UNDEFINED VARIABLES*

// let studentName: any
// studentName = 'Mary'
// studentName = 42
// studentName = true
// studentName = [1, 2, 3]
// studentName = { name: 'Mary' }
// studentName = null
// studentName = undefined
//any is the default type for variables in javascript
//
//Typescript specific:
// let studentName: string
//What is the value of studentName on this line
//--------?????----------
//studentName is a valueless variable. It is undefined.
//null vs undefined
//
//types vs values
//types are the kinds of things that we can have in our program
//values are the actual things that we have in our program
//null and undefined are types
//null and undefined are values
//we need to start thinking about the classification of things more carefully
//null means, i assigned something to it and with that i mean the absence of any value
//undefined means the absence of anything whatsoever
//
//so in the example of let studentName: string
//studentName is undefined because it has not been assigned a value
//we can also say something like let studentName: string | undefined
//so how can it be undefined if we are saying it is a string?
//because we are saying that it can be undefined or a string so it is undefined and this is where
//js and ts break down a little bit
//union types are a ts concept
//https://www.w3schools.com/typescript/typescript_union_types.php
//so Typescript is saying that studentName is undefined until you give it a value
//****THIS BELLOW IS ILLEGAL***
//so studentName: string
//studentName = 'Mary'
//studentName = undefined
//***THIS BELOW IS LEGAL***
//let studentName: string | undefined
//studentName = 'Mary'
//studentName = undefined
//
//It is preferred to do:
//let studentName = ""
//studentName = 'Mary'
//to be continued on 1:40:00 *NULL*
//avoid undefined and any
//Bad Form:
//let name --> undefined and is of type any
//name = 'Jane' --> name is now contains the value 'Jane', but `name` is still `any` type.
//Better Form:
//let name: string --> undefined and is of type string
//name = 'Jane'   --> name is now contains the value 'Jane'.
//Best Form:
//const name = 'Jane' --> name is now contains the value 'Jane' and is of type string. We avoid  any issues with undefined
//best way is to defined variable as let or const but if you are not going to reassign the variable then use const.
//Having immutable data types makes stronger code and less error prone. Allows the compiler and the computer to make more assumptions about our code
//The more we can avoid changing the value of a variable the better and the lower the chances there are for bugs
//Good variable hygiene
//Follow these rules and you will do well:
//Only use const and let
//Use const unless you have a good reason to use let
//Always initialize a variable unless you have a good reason not to
//
//Coversions: Typescript is more forgiving when converting types
//Valid in Typescript but not allowed in a language like C#
//const X - 'The answer is ' + 42 // "The answer is 42"
//const Y = 42 + ' is the answer' // "42 is the answer"
//check ts file for snippets of code
