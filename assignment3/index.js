//weird products list - json format
let jsonURL = "https://yuhsuanhuang-tw.github.io/COMP1073-Demo/assignment3/products.json";

//use fetch to access the json information, then pass data to appendData method to display in browser
fetch(jsonURL).then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data.length);
  appendData(data);
});

//this mehtod use to display products information in table
function appendData(data) {
  //get tbody by id
  let tbody = document.getElementById('productListBody');

  //iterate all product data
  for(let i = 0; i < data.length; i++) {
    //create a table row element
    let tr = document.createElement("tr");

    //cteate columns
    let imgTd = document.createElement("td");
    let nameTd = document.createElement("td");
    let priceTd = document.createElement("td");
    let featureTd = document.createElement("td");
    let despTd = document.createElement("td");

    //set the value of the column
    //imgTd
    let img = document.createElement("img");
    img.setAttribute("src", data[i].image);
    img.style.width = "50px";
    imgTd.appendChild(img);
    //nameTd
    nameTd.innerHTML = data[i].productName;
    //priceTd
    priceTd.innerHTML = "$" + data[i].price;
    //featureTd
    let ul = document.createElement("ul");
    for(let j = 0; j < data[i].features.length; j++) {
      let li = document.createElement("li");
      li.innerHTML = data[i].features[j];
      ul.appendChild(li);
    }
    featureTd.appendChild(ul);
    //despTd
    despTd.innerHTML = data[i].description;

    //append columns to a table row
    tr.appendChild(imgTd);
    tr.appendChild(nameTd);
    tr.appendChild(priceTd);
    tr.appendChild(featureTd);
    tr.appendChild(despTd);

    //append a table row to the tbody
    tbody.appendChild(tr);
  }
}
