//Using contructor to instant object
function Car(brand, model, type, year, hp) {
    this.brand = brand;
    this.model = model;
    this.type = type;
    this.year = year;
    this.hp = hp;

    this.introduce = function() {
        console.log(this.brand + " - " + this.model + "(" + this.year + ")\tType:" +this.type + "\tHP: " + this.hp);
    }
    this.createTableRow = function() {
        let tr = document.createElement("tr");
        tr.innerHTML = "<td>" + this.brand + "</td><td>" + this.model + "</td><td>" + this.year + "</td><td>" + this.type + "</td><td>" + this.hp + "</td>";
        return tr;
    }
}

let tesla = new Car("Tesla", "Model X", "SUV", 2020, 671);
let subaru = new Car("Subaru", "BRZ", "Coupe", 2017, 205);
let toyota = new Car("Toyota", "RAV4", "SUV", 2018, 203);
let bmw = new Car("BMW", "440i", "Sedan", 2019, 332);
let ford = new Car("Ford", "F-350", "Picker", 2016, 385);
let porsche = new Car("Porsche", "911", "Coupe", 2020, 641);

let displayButton = document.getElementById("display");
displayButton.addEventListener('click', function(){
    let table = document.querySelector("#carList");
    let tbody = table.querySelector("tbody");

    tbody.append(porsche.createTableRow());
    tbody.append(tesla.createTableRow());
    tbody.append(subaru.createTableRow());
    tbody.append(ford.createTableRow());
    tbody.append(bmw.createTableRow());
    tbody.append(toyota.createTableRow());
});