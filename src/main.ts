import './style.css'

// : string
//
// ^^^^ this is Typescript specific, it is not valid JS
//      since this is the type of the variable
//let students = ['Mary', 'John', 'Jane']
//const teachers = ['Mr. Smith', 'Mrs. Jones']
//let scores = [98, 100, 78, 99, 100]
//const personName = 'Mary' //strings are immutable
// personName = 'Gavin' <---- this is an error because personName is a const but why in the array bellow
// I am pushing something therefore changing the array?
//const doesnt mean that the value cant change, but it means you cant reassign the variable to point to something else
//const is a pointer to a value, not the value itself
//for example
//const grade = 98
//grade = grade + 1 //this is an error because you are trying to reassign the variable to point to something else
//it is not changing the value of grade but reassigning the variable to point to something else
//therefore what cons means is that the variable name cannot appear on the left side of an assignment operator or equal sign
//javascript can mix and match
// const differentKindsOfThings = [] would take an array of anything because it doesnt know
//you can put any[] to make it an array of anything but it is not recommended
/*const differentThings: (
  | string
  | number
  | boolean
  | { name: string }
  | null
  | undefined
)[] = ['Mary', 98, true, null, undefined, { name: 'Mary' }]
differentThings.push('3.14159265')
differentThings.push('Tim')*/ //arrays are mutable and can be changed even if they are const
//remember that once you push a string into an array of string you will get a different array of strings
//const differentKindsOfThings = [42, 'Ice Cream', true, 100, 'Pizza']
//the pipe symbol is an OR

//explicitly typed array
/*let studentName: string = 'Mary'
let studentNames: string[] = ['Mary', 'John', 'Jane']
let studentScores: number[] = [98, 100, 78, 99, 100]*/
//to be continued on 1:31:15
//Undefined Variables
//RunJS tool
const x = 'The answer is ' + 42
const y = 42 + ' is The answer'

let score = 100
score
score = score + 5
//Console.WriteLine(score)
console.log('Score is ', score)
console.log('x is ', x)
console.log('y is ', y)

let z: string
z = '37' - 7 //subtraction is math
console.log('subtraction', z)
z = '37' + 7 //addition is concatenation
console.log('addition', z)
//TypeScript seems inconsistent
//Doesn't seem to care about types and does not work as you might expect
//In statements involving other operators, TypeScript does not convert numeric values to strings. For example:

//String Interpolation $

{
  const score = 98
  const answer = 42
  //var message = $"Congratulations, {answer} is the correct! Your score is {score} points." in C#
  const message = `Congratulations, ${answer} is the correct answer! Your score is ${score} points.` //backtick is like the $ sign string in C# and the $ sign goes inside around the braces
  console.log(message)
}

//Objects are a combination of properties and methods or state and behavior
//In Typescript, an object is a standalone entity, with properties and type. Compare it with a cup, for example.
//A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc.
//The same way, Typescript objects can have properties, which define their characteristics.
//Characteristics vs Properties
//*Characteristics* are the features of an object that make it unique.
//*Properties* are the values that describe the characteristics of an object.
//For example, a car is an object. Its characteristics are color, model, weight, etc.
//Its properties can be the color red, Toyota, 2000 lbs, etc.
//In Typescript, an object is a value in memory which is possibly referenced by an identifier.
//Each object has its own memory address.
//The object is created by defining its properties and methods.
//An object has the following characteristics:
//State: It is represented by attributes of an object. It also reflects the properties of an object.
//Behavior: It is represented by methods of an object. It also reflects the response of an object with other objects.
//Identity: It gives a unique name to an object and enables one object to interact with other objects.

//Object Properties
//A TypeScript object has properties associated with it.
//A property of an object is a variable that is attached to the object.
//Object properties are the same as ordinary TypeScript variables, except for the attachment to objects.
//The properties of an object define the characteristics of the object.
//You can access the properties of an object with a simple dot-notation:
//objectName.propertyName

//Object Properties
//Like all TypeScript variables, both the object name (which could be a standard variable) and property name are case sensitive.
//You can define a property by assigning it a value.
//For example, let's create an object named myCar and give it properties named make, model, and year:
//
//This defines a type of variable object. The braces mean that the variable is an object.
const myCar = {
  theMakeOfTheCar: 'Jeep',
  make: 'Jeep',
  model: 'Wrangler',
  year: 2024,
}
/*
In C# you would do this:
In here, we are defining a class that can make something of type Car
class Car 
{
  public string Make { get; set; } = 'Jeep';
  public string Model { get; set; } = 'Wrangler';
  public int Year { get; set; } = 2019;
}
*/
//TypeScript is a classless OOP language
// console.log('My car', myCar.make)
console.log(`My car is a ${myCar.make} ${myCar.model} from ${myCar.year}`)
myCar['theMakeOfTheCar'] = 'Jeep'
myCar.year = 2024
//myCar.model = 1988 //it knows it is a mistake

//Object Initializer
//The previous example uses an object initializer, which is a comma-delimited list of zero or more pairs of property
//names and associated values of an object, enclosed in curly braces ({ }):
//
/* When we were in C# we would do this:

var person = new Person {
  FirstName = 'John',
  LastName = 'Doe',
  Age = 42
}
In TypeScript we do this: 
var person = {
  FirstName: 'John',
  LastName: 'Doe',
  Age: 42
}
*/
/*
Accessing properties using bracket notation (and by string)
Properties of TypeScript objects can also be accessed or set using a bracket notation. So for example, you could access
//the properties of the myCar object as follows: with a bracket syntax

myCar['make'] = 'Jeep'
myCar['model'] = 'Wrangler'
myCar['year'] = 2024

console.log(myCar['make'])
console.log(myCar['model'])//with the key or property name
console.log(myCar['year'])
console.log(`My car, using brackets is a ${myCar['make']}`)
*/
//How do we run this quote and quote on the backend? We use NodeJS Repl (Read Evaluate Print Loop) in Terminal
//node
//then we type some code
//we haven't done anything to interact with the browser. All we are doing is exploring the language
//We can mix JS and TS with database languages and make it the backend
//we can mix it with browser technology and make it the frontend
//we cannot do that with C# because it is a compiled language and it is not interpreted. c# works better for backend.
//to be continued 2:09:23
//Gaving talking about the difference between C# and TS

//Better Form (best practice)

myCar.make = 'Jeep'
myCar.model = 'Wrangler'
myCar.year = 2024

console.log(myCar.make)

//LETS MAKE A SECOND CAR

const theirCar: Car = {
  make: 'Ford',
  model: 'Mustang',
  year: 2024,
}
//This car has the same type as myCar variable, but only through coincidence

//myCar = {make: 'Tesla', model: '3', year: '2018 } //this is illegal because myCar is a const, the properties of myCar are not const
myCar.make = 'Tesla'
myCar.model = '3'
myCar.year = 2018

const otherCar: Car = { make: 'Honda', model: 'Civic', year: 2024 } //changed modal to model
//if we misspell the property name, it will not give us an error

//Using types to find issues in our code
//we can teach TypeScript about the a new specific type and give it a name of our choice.
//it is the closet analogy to a class in C#
type Car = {
  make: string
  model: string
  year: number
}
console.log(
  `the other car is a ${otherCar.make} ${otherCar.model} from ${otherCar.year}`
)
//A type declares the shape of a variable and the valid keys and properties of an object or the valid values something can have
//Run code in RunJS and check the transpiled code
//Some processes are striping away the types - there is no check at runtime
//Making a new object from an existing object

const myCar2 = {
  make: 'Jeep',
  model: 'Wrangler',
  year: 2021,
}

const myOtherCar2: Car = {
  //traded in my car for a new one
  make: myCar2.make, //its totally valid on the right hand side of an object initializer to use variables as long as they are the same type
  model: myCar2.model,
  year: 2024,
}
//what if we wanted to change one of the properties of myOtherCar2
//Typescript allows for a shortcut that expands all the keys and values of an object
//this is called the spread operator

const myOtherCar3: Car = {
  //this is the same as the following code:
  //make: myCar2.make,
  //model: myCar2.model,
  //year: 2024,
  ...myCar2,
  //year: 2024,
  model: '3',
}
console.table(myOtherCar3)
//the spread operator is three dots
//it is a shortcut for copying all the properties of an object into a new object

//we can also use the spread operator to combine objects
//to be continued 2:50:57
//ARRAYS
const array = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
const array2 = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(array)
console.log(array2)
console.log(array3)

//Literals
//Integers Floating-point literals String literals Boolean literals
//A literal is a value that is expressed as itself

//A decimal integer literal consists of a sequence of digits without a leading 0 (zero).
//A leading 0 (zero) on an integer literal or a leading 0o (or 0O) indicates it is octal.
//Octal integers can include only the digits 0-7. A leading 0x (or 0X) indicates a hexadecimal integer literal.
//Hexadecimal integers can include digits (0-9) and the letters a-f and A-F.
//(The case of a character does not change its value, e.g. 0xa = 0xA = 10 and 0xf = 0xF = 15.)
//A leading 0b (or 0B) indicates a binary integer literal. Binary integers can only include the digits 0 and 1.

// 0, 117 and -345 (decimal, base 10)
// 015, 0001 and -0o77 (octal, base 8)
// 0x1123, 0x00111 and -0xF1A7 (hexadecimal, "hex" or base 16)
// 0b11, 0b0011 and -0b11 (binary, base 2)

//Floating-point literals
/*A floating-point literal can have the following parts:

A decimal integer which can be signed (preceded by "+" or "-"),
A decimal point ("."),
A fraction (another decimal number),
An exponent.
The exponent part is an "e" or "E" followed by an integer, which can be signed (preceded by "+" or "-"). 
A floating-point literal must have at least one digit and either a decimal point or "e" (or "E").

For example:

3.1415926
-0.123456789
-3.1e12
0.1e-23

String Literals

A string literal is zero or more characters enclosed in double (") or single (') quotation marks. 
A string must be delimited by quotation marks of the same type; that is, either both single quotation 
marks or both double quotation marks. 
The following are examples of string literals:

'foo'
'bar'
'1234'
'one line \n another line'
"John's cat"

Template literals are also available. Template literals are enclosed by the back-tick (`) (grave accent) character 
instead of double or single quotes. 
Inside the backticks, we can use ${} to evaluate statements.

const score = 56
const prompt = `The current score is ${score} and the next score is ${
  score + 1
}`
// The current score is 56 and the next score is 57

Boolean Literals

The Boolean type has two literal values: true and false.
const typeScriptIsAwesome = true
const learningTypeScriptIsHard = false

Now that we have data, we need ways to manipulate the variables.

*/
/* Block:  
The most basic block is a block statement that is used to group statements. 
The block is delimited by a pair of curly brackets:
{
  statement_1
  statement_2
  .
  .
  .
  statement_n
}

Using a plain block like this can be used to reduce the "scope" of a variable. 
That is, ensuring a variable only exists for a few lines of code. 
Here is an example of when we would use this type of block:

const employees = ['Mary', 'Bob', 'Alice', 'Frank']

{
  let employeeIndex = 1

  // Some code that uses the variable
}

// We want to ensure that the variable `employeeIndex` is not valid here.

*/
/********** CONTROL FLOW STATEMENTS********


Conditional statements
A conditional statement is a set of commands that executes if a specified condition is true. 
TypeScript supports two conditional statements: if...else and switch.

if statement

Use the if statement to execute a statement if a logical condition is true. 
Use the optional else clause to execute a statement if the condition is false. An if statement looks as follows:

if (condition) {
  statement_1
} else {
  statement_2
} 
Here the condition can be any expression that evaluates to true or false.

NOTE: In TypeScript all of these are considered false: 0, -0, null, false, NaN, undefined, and the empty string ""
If the condition evaluates to true, statement_1 is executed; otherwise, statement_2 is executed. statement_1 and statement_2 can be any statement, including further nested if statements.

You may also compound the statements using else if to have multiple conditions tested in sequence, as follows:

if (condition_1) {
  statement_1
} else if (condition_2) {
  statement_2
} else if (condition_n) {
  statement_n
} else {
  statement_last
}

In the case of multiple conditions, only the first logical condition which evaluates to true will be executed. 
To execute multiple statements, group them within a block statement ({ ... }). 
In general, it's good practice to always use block statements, especially when nesting if statements:

if (condition) {
  statement_1_runs_if_condition_is_true
  statement_2_runs_if_condition_is_true
} else {
  statement_3_runs_if_condition_is_false
  statement_4_runs_if_condition_is_false
}

switch statement

A switch statement allows a program to evaluate an expression and attempt to match the expression's value 
to a case label. 
If a match is found, the program executes the associated statement. A switch statement looks as follows:

switch (expression) {
  case label_1:
    statements_1
    [break]
  case label_2:
    statements_2
    [break]
    ...
  default:
    statements_def
    [break]
}

The program first looks for a case clause with a label matching the value of the expression and then transfers 
control to that clause, executing the associated statements. If no matching label is found, the program looks 
for the optional default clause, and if found, transfers control to that clause, executing the associated 
statements. If no default clause is found, the program continues execution at the statement following the 
end of the switch. By convention, the default clause is the last clause, but it does not need to be so.

The optional break statement associated with each case clause ensures that the program breaks out of the 
switch once the matched statement is executed and continues execution at the statement following the switch. 
If break is omitted, the program continues execution at the next statement in the switch statement.

In the following example, if fruittype evaluates to "Bananas", the program matches the value with case 
"Bananas" and executes the associated statement. When break is encountered, the program terminates the switch 
and executes the statement following the switch. If break were omitted, the statement for case "Cherries" 
would also be executed.

switch (fruittype) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.')
    break
  case 'Apples':
    console.log('Apples are $0.32 a pound.')
    break
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.')
    break
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.')
    break
  case 'Mangoes':
    console.log('Mangoes are $0.56 a pound.')
    break
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.')
    break
  default:
    console.log('Sorry, we are out of ' + fruittype + '.')
}
console.log("Is there anything else you'd like?")

*/
