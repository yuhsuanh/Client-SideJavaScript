// JavaScript Document


//1.) Add a new paragraph to the page
//method 1
let main = document.querySelector('main');
main.innerHTML += "<p>Here is a new paragraph area</p>";
//method 2
let newPara = document.createElement('p');
// newPara.textContent = 'Here is a new paragraph ara, too'
main.appendChild(newPara);
let newParaText = document.createTextNode('Here is a new paragraph ara, too');
newPara.appendChild(newParaText);

//2.) Remove the class attribute on the header element 
let header = document.querySelector('header');
header.removeAttribute('class');

//3.) Change the src attribute in the image element to 'cat2.jpg'
let img = document.querySelector('img');
img.setAttribute('src', 'assets/cat2.jpg');

//4.) Remove the footer element
let footer = document.querySelector('footer');
let footerParent = footer.parentElement;
footerParent.removeChild(footer);

//5.) Add an h3 into the header 
let newH3 = document.createElement('h3');
header.appendChild(newH3);
let newH3Text = document.createTextNode('New header 3');
newH3.appendChild(newH3Text);