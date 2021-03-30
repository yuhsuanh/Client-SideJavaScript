//store the URL of a JSON file in a variable
let dealsSection = document.getElementById("deals");
let requestURL = "https://jessicagilfillan.github.io/COMP1073-Summer2020-Week9/go-go-grocery-application/dailydeals.json";

//create our new XHR object
let request = new XMLHttpRequest();

//open our request
request.open('GET', requestURL);

//getting JSON block
request.responseType = 'json';

//send the request
request.send();

//adding our event handler
request.onload = function() {
  let dailyDeals = request.response;
  console.log(dailyDeals);
  dealInfo(dailyDeals);
}

//assemble the dealInfo function
function dealInfo(jsonObj) {
  //bind it
  let dealInfo = jsonObj['dailyDeals'];
  //loop through the daily deal obj
  for (let i=0; i<dealInfo.length; i++) {
    //build the HTML elements for the content
    let div = document.createElement('div');
    div.setAttribute('class', 'col-md-3');
    let description = document.createElement("h3");
    let price = document.createElement("p");
    let image = document.createElement("img");

    //set textContent property for each of the above elements
    image.setAttribute("src", 'https://jessicagilfillan.github.io/COMP1073-Summer2020-Week9/go-go-grocery-application/images/' + dealInfo[i].image);
    image.setAttribute("alt", dealInfo[i].item);
    description.textContent = dealInfo[i].item;
    price.textContent = dealInfo[i].price;

    //append the children
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(image);

    dealsSection.appendChild(div);
  }
}
