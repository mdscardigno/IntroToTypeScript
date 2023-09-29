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
const myCar = { make: 'Jeep', model: 'Wrangler', year: 2024 }
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
