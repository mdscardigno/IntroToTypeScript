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
const differentKindsOfThings = [42, 'Ice Cream', true, 100, 'Pizza']
//the pipe symbol is an OR
//explicitly typed array
// let studentName: string = 'Mary' this can only be done in ts files
