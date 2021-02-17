// JavaScript Document


//1.) Using ol as your starting element, target the first li element 
let ol = document.querySelector('ol');
let firstLi = ol.firstElementChild;
console.log(firstLi);

//2.) using main as your starting element, what is the last child? console.log to check it out 
let main = document.querySelector('main');
let lastChildMain = main.lastChild;
console.log(lastChildMain);


//3.) using html as your starting element, what is the last Element child? Console.log to check it out. 
let html = document.querySelector('html');
let lastEleHtml = html.lastElementChild;
console.log(lastEleHtml);


//4.) using the second li element as your starting element, target the next li element and change the colour to purple.
let secondLi = document.getElementsByTagName('li')[1];
let nextLi = secondLi.nextElementSibling;
console.log(nextLi);