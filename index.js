// ES6 MODULE = An external file that contains reusable
// code that can be imported into other JS files. Write 
// reusable code for many different apps.
// can contain variables, classes, functions... and more 
// Introduced as part of ECMAScript 2015 update.
/*
import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';
console.log(PI);
const circumfernce = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);
console.log(circumfernce);
console.log(area);
console.log(volume);
*/

// synchronous = Executes line by line consequently in a sequential
// manner Code that waits for an operation to complete.


// asynchronous = Allows multiple operation to be performed
// concurrently without waiting
// Does not block the execution flow and allows the program 
// to continue
// handled with: Callbacks, promises, Async/await

/*
function func1(callback){
setTimeout(() => {console.log("Task 1");

            callback()}, 3000);
}

function func2(){
console.log("Task 2")
console.log("Task 3")
console.log("Task 4")
}
func1(func2)
*/
// ERROR = An object that is created  to represent a problem
// Occur often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// catch { } = catch and handle any thrown Error from try{ }
// finally{ } = (optional) Always executes. Used mostly for
// clean up eg. close files, close connection, release resources


/*
try{
    // network error
// Promise rejection
// security Errors
console.log("HELLO")
}
catch(error){
    console.error(error);
}
finally{
    // CLOSE FILES
    // CLOSE CONNECTION
    // RELEASE RESOURCES
    console.log("THIS ALWAYS EXECUTES")
}
console.log("You have reached the end")
*/

// DOM = DOCUMENT OBJECT MODEL
// Object{} that represent the page you see in the the web browser and provides you with 
// with an API to interect with it.
// web browser construct the DOM when it loads an HTML document, and structures all elements in a tree 
// like representaion.
// JS can access the DOM to dynamically change the content, structue, and style of a web page.

//console.log(document);
//console.dir(document);
/*
document.title = "my website"
document.body.style.backgroundColor = "green"

console.dir(document);
*/

// Element selectors = Methods used to target and manipulate HTML elements. They allow you select one or manipulate
// HTML elements from the DOM(Document Object Modle)
// 1. document.getElementByID()       // element or null
// 2. document.getElementsClassNAme() // HTML collection
// 3. document.getElementsTagName()   // HTML collection
// 4. document.querySelector()        // Element or Null
// 5. document.querySelectorAll()     // Nodelist
/*
const myHeading = document.getElementById("myHeading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

const fruits = document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor = "red";
fruits[1].style.backgroundColor = "yellow";
fruits[2].style.backgroundColor = "green";

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
})

*/
/*
const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements);

const liElements = document.getElementsByTagName("li");

//h4Elements[0].style.backgroundColor = "yellow";

for(let h4Element of h4Elements) {
    h4Element.style.backgroundColor = "yellow";
}

for(let liElement of liElements){
    liElement.style.backgroundColor = "brown";

}
    

//const element = document.querySelector(".fruits");

//element.style.backgroundColor = "yellow";

//const element = document.querySelector("ul");

//element.style.backgroundColor = "yellow";

const fruits = document.querySelectorAll("ul");
fruits[0].style.backgroundColor = "yellow";
*/
// DOM Navigation = The Process of Navigating through the structure of an HTML document using JS;
// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

//const element = document.getElementById("fruits");

//const firstChild = element.firstElementChild;
//firstChild.style.backgroundColor = "yellow";
/*
const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow";
});
*/

//const element = document.getElementById("fruits");
//const nextSibling = element.nextElementSibling;
//nextSibling.style.backgroundColor = "yellow";

//const element = document.getElementById("apple");
//const nextSibling = element.nextElementSibling;
//nextSibling.style.backgroundColor = "yellow";


//const element = document.getElementById("apple");
//const parent = element.parentElement;
//parent.style.backgroundColor = "yellow"
/*

const element = document.getElementById("fruits");
const children = element.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
}

)


//Add and change HTML
// step0- create an element
const newH1 = document.createElement("h1");
// step1- Add attributes and properties
newH1.textContent = "I like pizza";
newH1.id = "myH1";
newH1.style.color = "red";
newH1.style.textAlign = "center";

//step2 - append element from Dom
//document.body.append(newH1);
//document.body.prepend(newH1);
document.getElementById("box1").append(newH1);
//document.getElementById("box4").prepend(newH1);

//const name = document.createElement("h1");
//name.textContent = "Pankaj";
//name.id = "name";
//name.style.color = "blue";

//document.body.append(name);
//document.body.prepend(name);
//document.getElementById("box1").append(name);

//const box2 = document.getElementById("box2");
//document.body.insertBefore(newH1, box2);

//const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newH1, boxes[1]);
//document.getElementById("box1").removeChild(newH1);

const newListItem = document.createElement("li");
newListItem.textContent = "coconut";
newListItem.id = "coconut";

newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

document.getElementById("fruits").append(newListItem);

*/

/// MOUSE EVENT

// eventListener = listen for specific events to create iteractive web pages 
// events: click, mouseover, mouseout
// add.EventListener(event, callback);
/*


const myBox = document.getElementById("myBox");

function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch, dont click";
}
myBox.addEventListener("click", changeColor);


myBox.addEventListener("mouseover", event => {

    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Please Click";


})

/// KEYS EVENT
// EVENTS : KEYDOWN, KEYUP
// document.addEventlistner(event, callback);
*/
/*
const myBox = document.getElementById("myBox")

document.addEventListener("keydown", event => {
    myBox.textContent = "hello";
    myBox.style.backgroundColor = "blue";
});

document.addEventListener("keyup", event => {
    myBox.textContent = "hi";
    myBox.style.backgroundColor = "yellow"
    
});
*/

const myBox = document.getElementById("myBox");
const moveAmount = 100;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {

    if(event.key.startsWith("Arrow")){

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;

            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

       myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    
    }
})




