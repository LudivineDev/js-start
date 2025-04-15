/* let name ="Ludivine"
let surname ="Dev"
console.log(name);
console.log(surname);

let age =23
console.log (age)
age=54;
console.log (age)

const pi = 3.14;
console.log(pi);

console.log(23 + 97)
console.log((23 + 97 + 36 + 21 + 28 + 89))
console.log((4 + 6 + 9) / 77)

let a =10
console.log(a)

a=22
console.log(a)

let b = 7 * a
console.log(b)

const max = 57
const actual = max - 13
const percentage = actual/max
console.log(percentage)

const string = "The revolution will not be televised.";
console.log(string);


const badString = string;
console.log(badString);

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"


function greet() {
    const name2 = prompt("What is your name?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name2}, nice to see you!`;
  }
  
  const button = document.querySelector("button"); // this was missing
  button.addEventListener("click", greet); *

  let answer = parseInt(prompt("please enter a number you'd like to FizzBuzz up to : "));
  for (let i = 1 ; i <= answer ; i++){
    
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if  (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }*/
    const container = document.querySelector("#container");

    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = "This is the glorious text-content!";
    
    
    container.appendChild(content);


    const redparagraph = document.createElement("p");
    redparagraph.textContent = "Hey, I am red!";
    redparagraph.style.color = "red";
    
    container.appendChild(redparagraph);

    const blueh3 = document.createElement("h3");
    blueh3.textContent = "I’m a blue h3!";
    blueh3.style.color = "blue";
    
    container.appendChild(blueh3);

    const innerDiv = document.createElement("div");
    innerDiv.style.border = "1px solid black";
    innerDiv.style.backgroundColor = "pink";

    const innerH1 = document.createElement("h1");
    innerH1.textContent = "I’m in a div";
    
    const innerP = document.createElement("p");
    innerP.textContent = "ME TOO!";
    
    innerDiv.appendChild(innerH1);
    innerDiv.appendChild(innerP);
    
    container.appendChild(innerDiv);

