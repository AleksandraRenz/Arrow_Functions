/* Q1 Write an arrow function expression called greet(). 
It should accept a single argument representing a person's name. 
It should return a greeting string as shown below:
greet("John"); //"Hi John!"
greet("James"); //"Hi James!"

*/

let greet = name => "Hi " + name +"!"
console.log(greet("John"))
console.log(greet("James"))