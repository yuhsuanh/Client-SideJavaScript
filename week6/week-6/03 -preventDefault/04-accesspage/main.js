// JavaScript Document
 //select the element that we want to work with 
  let input = document.getElementById("access");
  let submit = document.getElementById("submit")
  let section = document.querySelector("section");
  let h2 = document.querySelector("h2");
  let p = document.querySelector("p");
  
  submit.addEventListener('click', accessCode);
  
  function accessCode(e) { // what does e stand for? 
    e.preventDefault(); //what does this do? 
    let userAccess = input.value;
    
    if(userAccess == 1234) {
      h2.textContent = "Activity One Challenge - Picture The DOM";
      p.innerHTML = "We now know that when a browser loads a page, it creates a model of that page and stores it in memory. This is the Document Object Model (DOM). The DOM is an API that allows us to use JavaScript (although we could use another other language to) to interface with the HTML page. For this challenge, go to <a href=\"https://github.com/JessicaGilfillan/AllAboutTheDOM/tree/master/active-learning/01-picture-the-dom\"> https://github.com/JessicaGilfillan/AllAboutTheDOM/tree/master/active-learning/01-picture-the-dom </a> and download the HTML provided. Using the ‘DOM puzzle pieces’ provided, construct the Document Object Model that would be created when this page is loaded in the browser.";
      let instructions = document.querySelector('.instructions'); 
    }
    else if(userAccess == 'Password347') {
      h2.textContent = "Activity Two Challenge - Node or Not? ";
      p.innerHTML = "Each node in the DOM tree is an object with methods and properties. Every the document, elements, pieces of text and even whitespace in the HTML is represented by it’s own DOM node. For this challenge, navigate to <a href=\"https://github.com/JessicaGilfillan/AllAboutTheDOM/tree/master/active-learning/02-node-or-not-a-node\"> https://github.com/JessicaGilfillan/AllAboutTheDOM/tree/master/active-learning/02-node-or-not-a-node </a> and download the code provided. Count how many nodes there would in the DOM that represents this page. Once you have completed this task, navigate to Blackboard or D2l to complete the Node or Not? Quiz found under quizzes to check your understanding. The password for this quiz is the same as the access code.";
    }
    else if(userAccess == 1325) {
      h2.textContent = "Activity Three Challenge : Select That Element";
      p.innerHTML = "There are a few different methods and properties that allow us to access elements. Dom queries may return one element or they can return a nodeList, which is a collection of nodes. Sometimes you want just one element. Sometimes you want a group of elements (i.e. every h2 on the page). Which one is best? We generally want to find the quickest way to access an element as this helps with performance( i.e. our page will be faster and more responsive - yay!). This means evaluating the minimum number of nodes on the way to get the element you want to work with. For example, getElementById() is the fastest, because no two elements can have the same ID on a page. For this challenge, first navigate to <a href=\"https://youtu.be/aduxe1QZsJU\">https://youtu.be/aduxe1QZsJU</a> to watch a short example video and then navigate to <a href=\"https://github.com/JessicaGilfillan/AllAboutTheDOM/tree/master/active-learning/03-select-that-element\">https://github.com/JessicaGilfillan/AllAboutTheDOM/tree/master/active-learning/03-select-that-element</a> and download the code files. Your instructions are in main.js. ";
    }
    else if(userAccess === 'catsarecool') {
      h2.textContent = "Activity Four Challenge: Walk The DOM ";
      p.innerHTML = "Because we are creating webpages and applications that are dynamic, we often need to walk or traverse the DOM in order to get to the element that we really want to target. When you have an element node, you can select another element node in relation to it using different properties. In order to traverse the DOM, we need to have a good understanding of the relationship between elements (i.e. parent elements, children elements, descendants, ancestors, siblings etc.) When traversing the DOM, remember that it’s not just elements that are considered to be nodes in the DOM tree, In fact,  most browsers (except IE) treat whitespace between elements as a text node, so properties might return unexpected nodes if there is whitespace in your HTML . For this challenge, first navigate to <a href=\"https://youtu.be/KdM3Z6UhLok\"> https://youtu.be/KdM3Z6UhLok </a> to watch a short example video and then navigate to <a href=\"https://github.com/JessicaGilfillan/AllAboutTheDOM/tree/master/active-learning/04-walk-the-dom\"> https://github.com/JessicaGilfillan/AllAboutTheDOM/tree/master/active-learning/04-walk-the-dom </a> and download the code files. Your instructions are in main.js.";
    }
    else if(userAccess == 'helloWorld8!') {
      h2.textContent = "Activity Five: Changing Properties & Master of DOM Manipulation ";
      p.innerHTML = "Once we can access the right element, we can start to manipulate or change the properties of these elements. We can also add and remove DOM nodes and get and set attributes on our elements.For this challenge, first navigate to <a href=\"https://youtu.be/JeUqLnxQ4Fo\"> https://youtu.be/JeUqLnxQ4Fo </a> to watch a short example video and then navigate to <a href=\"https://github.com/JessicaGilfillan/AllAboutTheDOM/tree/master/active-learning/05-master-of-dom-manipulation\">https://github.com/JessicaGilfillan/AllAboutTheDOM/tree/master/active-learning/05-master-of-dom-manipulation</a> and download the code files. Your instructions are in main.js. ";
    }
    else {
      h2.textContent = "Usercode not found";
      p.textContent = "this code was not found"
    }
  }