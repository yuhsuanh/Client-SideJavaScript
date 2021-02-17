//Get textarea 
let textarea = document.querySelector('textarea');

//First Object Literal (my order)
const  coffeeOrder1 = {
	name: 'YuHsuan',
	type: 'Flat white', //coffee type
	size: 'Short', //coffee size
	drizzle: false,
	whippedCream: false,
	sweetener: false,
	coldFoam: true,
	dairy: '2% milk',

	orderInfo: function() {
		textarea.textContent += 
			'===============================================\n' + 
			'Customer: ' + this.name + '\n' +
			'Order: ' + this.size + ' ' + this.type + '\n';

		//Additional requirements have only been displayed, if the customer has the additional requirement
		if(this.drizzle || this.whippedCream || this.sweetener || this.coldFoam || this.dairy != 'None')
			textarea.textContent += 'Additional require: \n';
		if(this.drizzle)
			textarea.textContent += '\t- Drizzle\n';
		if(this.whippedCream)
			textarea.textContent += '\t- Whipped Cream\n';
		if(this.sweetener)
			textarea.textContent += '\t- Sweetener\n';
		if(this.coldFoam)
			textarea.textContent += '\t- Cold Foam\n';
		if(this.dairy != 'None')
			textarea.textContent += '\t- ' + this.dairy + '\n';
	}
};

//Second Object Literal (my friend's order)
const  coffeeOrder2 = {
	name: 'Winnie',
	type: 'Mocha', //coffee type
	size: 'Grande', //coffee size
	drizzle: true,
	whippedCream: true,
	sweetener: false,
	coldFoam: false,
	dairy: 'Almond milk',

	orderInfo: function() {
		textarea.textContent += 
			'===============================================\n' + 
			'Customer: ' + this.name + '\n' +
			'Order: ' + this.size + ' ' + this.type + '\n';

		//Additional requirements have only been displayed, if the customer has the additional requirement
		if(this.drizzle || this.whippedCream || this.sweetener || this.coldFoam || this.dairy != 'None')
			textarea.textContent += 'Additional require: \n';
		if(this.drizzle)
			textarea.textContent += '\t- Drizzle\n';
		if(this.whippedCream)
			textarea.textContent += '\t- Whipped Cream\n';
		if(this.sweetener)
			textarea.textContent += '\t- Sweetener\n';
		if(this.coldFoam)
			textarea.textContent += '\t- Cold Foam\n';
		if(this.dairy != 'None')
			textarea.textContent += '\t- ' + this.dairy + '\n';
	}
};

//Using dot notation to access the mehtod
coffeeOrder1.orderInfo();
coffeeOrder2.orderInfo();


//Create Object Constructor
function CoffeeOrder(name, type, size, drizzle, whippedCream, sweetener, coldFoam, dairy) {
	this.name = name;
	this.type = type;
	this.size = size;
	this.drizzle = drizzle;
	this.whippedCream = whippedCream;
	this.sweetener = sweetener;
	this.coldFoam = coldFoam;
	this.dairy = dairy;

	this.orderInfo = function() {
		textarea.textContent += 
			'===============================================\n' + 
			'Customer: ' + this.name + '\n' +
			'Order: ' + this.size + ' ' + this.type + '\n';

		//Additional requirements have only been displayed, if the customer has the additional requirement
		if(this.drizzle || this.whippedCream || this.sweetener || this.coldFoam || this.dairy != 'None')
			textarea.textContent += 'Additional require: \n';
		if(this.drizzle)
			textarea.textContent += '\t- Drizzle\n';
		if(this.whippedCream)
			textarea.textContent += '\t- Whipped Cream\n';
		if(this.sweetener)
			textarea.textContent += '\t- Sweetener\n';
		if(this.coldFoam)
			textarea.textContent += '\t- Cold Foam\n';
		if(this.dairy != 'None')
			textarea.textContent += '\t- ' + this.dairy + '\n';
	};
}


//Get 'Checked' radio button value by name
function getRadioCheckValueByName(name) {
	var radios = document.getElementsByName(name);
	for(var i = 0; i < radios.length; i++) { 
		if(radios[i].checked) {
			// console.log(radios[i].value == 'true');
			return radios[i].value == 'true';
		}
	}
}


//Anonymous functions (for submit the form)
let placeOder = document.getElementById('place_order');
placeOder.onclick = function() {
	let name = document.getElementById('name').value;
	let type = document.getElementById('type').value;
	let size = document.getElementById('size').value;
	let drizzle = getRadioCheckValueByName('drizzle');
	let whippedCream = getRadioCheckValueByName('whippedCream');
	let sweetener = getRadioCheckValueByName('sweetener');
	let coldFoam = getRadioCheckValueByName('coldFoam');
	let dairy = document.getElementById('dairy').value;

	//Using an object constructor function to create an object, then, call orderInfo method to display the order information
	new CoffeeOrder(name, type, size, drizzle, whippedCream, sweetener, coldFoam, dairy).orderInfo();
};