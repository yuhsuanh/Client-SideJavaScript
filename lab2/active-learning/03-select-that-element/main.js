// JavaScript Document

//1.)  find two different ways to target the first section element on the page. Use console.log to check. Put a comment with the word faster by the method that targets the element more quickly and efficently. 
let firstSection1 = document.querySelector('section');
let firstSection2 = document.getElementsByTagName('section')[0];
console.log(firstSection1);
console.log(firstSection2);


//2.)  Target the footer element. Use console.log to check 
let footer = document.querySelector('footer');
console.log(footer);


//3.)  Target all elements with the class or orange and change the text in these elements orange 
let orangeClasses = document.getElementsByClassName('orange');
for(var i=0; i<orangeClasses.length; i++) {
    orangeClasses[i].style.color = 'orange';
}


//4.) Target all section elements and console log 
let allSections = document.querySelectorAll('section');
console.log(allSections);


//5.) Find two ways to target the second section element 
let secondSection1 = document.querySelectorAll('section')[1];
let secondSection2 = document.getElementsByTagName('section')[1];
console.log(secondSection1);
console.log(secondSection2);
