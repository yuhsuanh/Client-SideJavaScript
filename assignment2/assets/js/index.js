
let processTable = document.getElementById('processing');
let completeTable = document.getElementById('completed');


function removeFromProcessTable() {
    document.getElementById("audioDelete").play();

    var tr = this.parentElement.parentElement;
    var tbody = this.parentElement.parentElement.parentElement;
    tbody.removeChild(tr);
}

function completeFromProcessTable() {
    document.getElementById("audioComplete").play();
    
    var tr = this.parentElement.parentElement;
    var newTbody = completeTable.querySelector('tbody');
    newTbody.appendChild(tr);
    
    //remove complete goal button
    var td = this.parentElement;
    td.removeChild(this);
}

function addToProcessTable() {
    let goal = document.getElementById('goal');
    
    //create td goal name
    let name = document.createElement('td');
    name.style.verticalAlign = 'middle';
    name.style.textAlign = "center";
    name.textContent = goal.value;

    //create td goal options (delete, complete)
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delete btn btn-danger');
    deleteButton.textContent = "Delete";

    let completeButton = document.createElement('button');
    completeButton.setAttribute('class', 'complete btn btn-success');
    completeButton.textContent = "Complete";

    let options = document.createElement('td');
    options.style.textAlign = "center";
    options.setAttribute('class', 'option-width');
    options.appendChild(deleteButton);
    options.appendChild(completeButton);

    //create tr and add two columns
    let tr = document.createElement('tr')
    tr.appendChild(name);
    tr.appendChild(options);

    //add tr to processing table
    processTable.querySelector('tbody').appendChild(tr);

    //event listener
    deleteButton.addEventListener('click', removeFromProcessTable);
    completeButton.addEventListener('click', completeFromProcessTable);

    //clear input value
    goal.value = "";
}


let adding = document.getElementById('adding');
adding.addEventListener('click', addToProcessTable);


let goalInput = document.querySelector('#goal');
goalInput.addEventListener('keydown', function(event) {
    if(event.keyCode === 13) { //Enter key
        event.preventDefault(); //cancel default action
        document.getElementById('adding').click();
    }
});