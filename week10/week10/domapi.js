//gather our elements
let listItem = document.getElementById("listItem");
let addButton = document.querySelector("#listItem + input"); //**notice use plus sign!!!
let ul = document.querySelector("ul");

//when do we want it to work?
addButton.onclick = (e) => {
  //prevent default action
  e.preventDefault();

  //create elements
  let li = document.createElement("li");
  let delButton = document.createElement("button");
  //build the list item elements
  let item = listItem.value;
  li.textContent = item;
  delButton.textContent = "Got it";

  //append the things
  li.appendChild(delButton);
  ul.appendChild(li);

  //set up delete
  delButton.onclick = deleteIt;
};

//delete function
function deleteIt(e) {
  let del = confirm("Are U sure you want to delete this item from your lis?");
  if(del) {
    let delItem = e.target.closest("li");
    delItem.remove();
  }
}
