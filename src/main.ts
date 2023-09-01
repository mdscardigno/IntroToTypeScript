import './style.css'

// : string
//
// ^^^^ this is Typescript specific, it is not valid JS
//      since this is the type of the variable
let students = ['Mary', 'John', 'Jane']
const teachers = ['Mr. Smith', 'Mrs. Jones']
let scores = [98, 100, 78, 99, 100]
const personName = 'Mary' //strings are immutable
// personName = 'Gavin' <---- this is an error because personName is a const but why in the array bellow
// I am pushing something therefore changing the array?
//const doesnt mean that the value cant change, but it means you cant reassign the variable to point to something else
//const is a pointer to a value, not the value itself
//for example
const grade = 98
grade = grade + 1 //this is an error because you are trying to reassign the variable to point to something else
//it is not changing the value of grade but reassigning the variable to point to something else
//therefore what cons means is that the variable name cannot appear on the left side of an assignment operator or equal sign
//javascript can mix and match
// const differentKindsOfThings = [] would take an array of anything because it doesnt know
//you can put any[] to make it an array of anything but it is not recommended
const differentThings: (
  | string
  | number
  | boolean
  | { name: string }
  | null
  | undefined
)[] = ['Mary', 98, true, null, undefined, { name: 'Mary' }]
differentThings.push('3.14159265')
differentThings.push('Tim') //arrays are mutable and can be changed even if they are const
//remember that once you push a string into an array of string you will get a different array of strings
const differentKindsOfThings = [42, 'Ice Cream', true, 100, 'Pizza']
//the pipe symbol is an OR

//explicitly typed array
let studentName: string = 'Mary'
let studentNames: string[] = ['Mary', 'John', 'Jane']
let studentScores: number[] = [98, 100, 78, 99, 100]
//to be continued on 1:31:15
//Undefined Variables
