/* -------- Table of Contents -------------- */
/***** 01 - ARRAYS ********/
/***** 02 - FUNCTIONS ********/
/***** 03 - CONDITIONAL STATEMENTS ********/
/***** 04 - LOOPS ********/
/* ----------------------------------------- */

/***** 01 - ARRAYS ********/

			//A. Creating an array

				//array literal
				let array1 = ['banana', 'orange', 'strewberry', 'apple', 'grapes'];

				//using an array constructor
				let array2 = new Array('banana', 'orange', 'strewberry', 'apple', 'grapes');

				//array constructor with one element
				let array3 = new Array(100);

				// B. Multidimensional arrays
				let multiArray = [['Yu-Hsuan', 'Huang'], 28, 'student', true];

				let lastName = multiArray[0][1];
				console.log(lastName);

				// C.Accessing elements in an array

				//to access the third element in array2
				console.log('The third element is ' + array2[2]);

				//to access the first element in array 1
				console.log('The first element is ' + array1[0]);

				//How can we access the third element in the array INSIDE of multiArray?

				//D. Determining number of elements in an array
				console.log('The length is ' + array1.length);

				// E. Array methods

				//adding items

				//push() to add one or more elements to the end of an array, returns the number of items in the array
				newArray1 = array1.push('pear');
				console.log(newArray1);
				console.log(array1);

				//unshift( ) - adds one or more items to start of array, returns new length of it
				newArray2 = array1.unshift('kiwi', 'blueberries');
				console.log(newArray2);
				console.log(array1);

				//removing items

					//pop() removes last element form array and returns the element
					//what would you expect to see in the console
				newArray3 = array1.pop();
				console.log(newArray3);
				console.log(array1);

					//shift() removes the first element from array, returns the element
				newArray4 = array1.shift();
				console.log(newArray4);
				console.log(array1);

				//iterating

					//forEach( ) executes a function once for each element in the array
					function displayFruit(item, index) {
						console.log(index + " " + item);
					}

					array1.forEach(displayFruit);

					//some( ) checks if some elements in array pass a test specified by a function
					function checkOrange(fruit) {
						return fruit === 'orange';
					}
					console.log(array1.some(checkOrange));

					//every( ) checks is all elements in an array pass a test specified by a function
					console.log(array1.every(checkOrange));

				//combining 

					//concat( ) - creates new array by combining this array and other arrays/values 
					let array4 = array1.concat(array2);
					console.log(array4);

				//filtering 

					//filter( ) - creates new array with elements that pass a test specified by a function 
					let array5 = array4.filter(checkOrange);
					console.log(array5);

				//reordering
				
					//sort( ) reorders items in array using a function (called a compare function) 
					let alphabeticalOrderArray = array1.sort();
					console.log(alphabeticalOrderArray);

					//reverse( ) reverses order of items in an array
					let reversedArray = array1.reverse();
					console.log(reversedArray);

				//modifying

					//map( )  - calls a function on each element in array and creates new array with results 
					let numbersArray = [1,2,3,4,5];
					console.log(numbersArray.map(Math.random));
                
/***** 02 - FUNCTIONS ********/
		
			// A. Built in Functions 
			//eventually, we'll come to learn that these are actually methods, but let's call them built-in browser functions for now 
			let str = 'hello world';
			console.log(str.toUpperCase());

			// B. Named Functions 

			//function definition 
			function myNewFunction() {
				console.log('Hellooooooooooo');
			}

			//invoke function to make it happen! 
			myNewFunction();

			//C. Anonymous FUnction 
			let message = function() {
				console.log('Heyyyyyyyyyyy');
			};

			//how can we invoke this function???? 
			message();

			// anonymous functions are often used when working with events 
			//store a reference to the button element 
			let myButton = document.querySelector('button');
			myButton.onclick = function () {
				alert('Hey! Stop clicking me!');
			};

			// D. Immediately Invoked Function IIFE 
			(function(){
				let veggieArray = ['carrots', 'beets', 'tomatoes'];
				veggieArray.sort();
				console.log(veggieArray);
			}());
	

/***** 03 - CONDITIONAL STATEMENTS ********/

			// A. If Statements 
			let catsAreCute = true;
			if(catsAreCute == true) {
				console.log('The do be like that!');
			} else {
				console.log('Wrong, cats are so cute!');
			}

			//B. Switch Statements 
			let day;
			switch(new Date().getDay()) {
				case 0:
					day = 'Sunday';
					break;
				case 1:
					day = 'Monday';
					break;
				case 2:
					day = 'Tuesday';
					break;
				case 3:
					day = 'Wednesday';
					break;
				case 4:
					day = 'Thursday';
					break;
				case 5:
					day = 'Friday';
					break;
				case 6:
					day = 'Saturday';
					break;
			}
			console.log(day);

			// c. Challenge : Achieve the same functionality in A using a ternary operator 


/***** 04 - LOOPS ********/
			//A. For Loop 
			for (let i = 0; array1.length > i; i++) {
				console.log(array1[i]);
			}
			
			//B. While Loop 
			var text = "";
			var i = 0;
			while (i < 10) {
				text += 'The number is ' + i;
				i++;
			}
			console.log(text);

			//C. Do While 
			do {
				text += 'The number is ' + i;
				i++;
			} while(i < 10);
			console.log(text);
