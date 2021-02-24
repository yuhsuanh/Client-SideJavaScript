// JavaScript Document
var personName = "";

function complainMessage() {
  alert("I told you not to do that " + personName);
}

function typeAndScream() {
  document.getElementById("audio").play();
  personName = document.getElementById("name").value;
}

function goDark() {
  var body = document.getElementsByTagName("body")[0];
  if (body.className == "") {
    body.className = "dark";
  }
  else {
    body.className = "";
  }
  
}

function finishTheStory() {
  document.getElementById("story").innerHTML = "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
}


/* When the user clicks the make it spooky button, goDark should be invoked */ 
let spooky = document.getElementById("spookyClicked");
spooky.addEventListener('click', goDark);


/* When the user types their name in the input, typeAndScream should be invoked */
let scream = document.getElementById("name");
// scream.addEventListener('keydown', typeAndScream);
scream.addEventListener('input', typeAndScream);

/* When the user clicks the button that says please, please don't click me, complainMessage() should be invoked*/ 
let dont = document.getElementById("dont");
dont.addEventListener('click', complainMessage);

/* When the user clicks the tell me what happened button, finish the story should be invoked */
let story = document.getElementById("complete");
// story.addEventListener('click', finishTheStory);
story.click = finishTheStory;

