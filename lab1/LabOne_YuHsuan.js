/*
3.) 
	In your JS file, create an array with the names of the students in this section (you’ll find a list in the Lab One folder) and store in a variable. Remember to choose an appropriate variable name! 
4.) 
	Declare a variable called instructor and initialize the variable with the string 'Jessica Gilfillan'. 
5.) 
	Declare a variable called welcomeType.
6.)
	Create a function called welcomeCOMP1073. Inside this function, create a conditional structure to check whether welcomeType is equal to ‘learner’ or ‘instructor’.
	If the value is ‘learner’, loop through all the student names and welcome them to class, display this information in the console or as an alert.
	If the welcomeType is ‘instructor’, display the value stored in the instructor variable in the console or an alert box, along with a welcome message.
7.)
	Invoke the welcomeCOMP1073 function.
*/

//variables for students and instructor
let studentNames = ['Tanvi', 'Karan', 'Yogesh', 'Sagar', 'Harkirat', 'Snawarjot', 'Caio', 'Yi Tzeng', 'Dona', 'Lee', 'Keyur', 'Yu-Hsuan', 'Chaitanyasinh', 'Harsimranjit', 'Jashandeep', 'Kirandeep', 'Mandeep', 'Navaldeep', 'Simranjeet', 'Puneet', 'Kai-Wei', 'Nidhi', 'Rutendo', 'Maitra', 'Maulik', 'Aakash', 'Aatekabanu', 'Sam', 'Meet', 'Pratham', 'Abhishek', 'Manjotbir', 'Sarvdeep', 'Samrath', 'Jacob', 'Vinay', 'Sahil', 'Kaushal'];
let instructor = 'Jessica Gilfillan';

let welcomeType = 'learner';

//get textarea element
let textArea = document.querySelector('textarea');

//welcome function
function welcomeCOMP1073() {
	let content = '';
	//if data type and value equal to 'learner'
	if(welcomeType === 'learner'){
		//use foreach method to iterating all of the itmes
		studentNames.forEach(element => content += element + '(student), Welcome to COMP1073!\n');
		//display the content to console and text area.
		console.log(content);
		textArea.textContent = content;
	} 
	//if data type and value equal to 'instructor'
	else if (welcomeType === 'instructor') {
		content = instructor + '(instructor), Welcome to COMP1073!';
		//display the content to console and text area.
		console.log(content);
		textArea.textContent = content;
	}
}

//invoke the function
welcomeCOMP1073();



/*
BOUNS:
- use a dropdown to select either instructor or student and set the value to the value selected by the dropdown
- invoke the function when the user makes a new selection using the dropdown created (hint: onchange) 
*/
let dropdown = document.querySelector('select');
dropdown.onchange = function() {
	//get selected option value
	welcomeType = dropdown[dropdown.selectedIndex].value;
	welcomeCOMP1073();
};