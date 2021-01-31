// UI Vars
const taskInput = document.querySelector('#task');               //the task input text field

const form = document.querySelector('#task-form');             //The form at the top

const filter = document.querySelector('#filter');                      //the task filter text field

const taskList = document.querySelector('.collection');          //The ul

const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button

const reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation 

// Events
form.addEventListener('submit', addNewTask);
clearBtn.addEventListener("click",clearAllTasks);

// Remove task event [event delegation]
taskList.addEventListener('click', removeTask);







// function addNewTask(){
// alert("Add New Task")};

// function clearAllTasks(){
// alert("Clear All Tasks")};



// event handlers
function addNewTask(e) {
    e.preventDefault();

    if (taskInput.value === '') 
    {
        taskInput.style.borderColor = "red";

       return;     //avoiding else statement

    }

    
    // Create an li element when the user adds a task 
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element for the link 
    const link = document.createElement('a');
    const date = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    date.className = 'date';
    date.innerHTML = new Date()
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    li.appendChild(date);
    // Append to ul 
    taskList.appendChild(li);

    taskInput.value = ''




       //disable form submission
}

filter.addEventListener('keyup', () => {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("filter");
    filter = input.value.toUpperCase();
    ul = document.getElementById("lis");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText;
        console.log(txtValue)
        if (txtValue.toUpperCase().indexOf(filter) != -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
})

// Clear Task Function definition 
function clearAllTasks() {
        //  Second Way 
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    



    
}
function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item'))
        {
        if (confirm('Are You Sure about that ?'))
        {
            e.target.parentElement.parentElement.remove();
        }

    }

}

function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}
function sortAscend() {
    var containi;
    var index;
    var content;
    var Switchs;
    var maybe;
    containi = document.getElementById('lis');
    maybe = true
	

	while (maybe) {
        content = containi.getElementsByTagName('LI');
        maybe = false

		for (index = 0; index < content.length - 1; index++) {
			Switchs = false;

			if (content[index].lastChild.textContent > content[index + 1].lastChild.textContent) {
				Switchs = true;
				break;
			}
		}
		if (Switchs) {
            content[index].parentNode.insertBefore(content[index + 1], content[index]);
            maybe = true
            

		}
	}
}
function sortDescend() {
    var containi;
    var index;
    var content;
    var Switchs;
    var maybe;
    containi = document.getElementById('lis');

    maybe = true
	

	while (maybe) {
        content = containi.getElementsByTagName('li');
        maybe = false

		for (index = 0; index < content.length - 1; index++) {
			Switchs = false;

			if (content[index].lastChild.textContent < content[index + 1].lastChild.textContent) {
				Switchs = true;
				break;
			}
		}
		if (Switchs) {
            content[index].parentNode.insertBefore(content[index + 1], content[index]);
            maybe = true
            

		}
	}
}


