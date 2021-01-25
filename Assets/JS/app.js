// UI Vars
const taskInput = document.querySelector('#task');               //the task input text field

const form = document.querySelector('#task-form');             //The form at the top

const filter = document.querySelector('#filter');                      //the task filter text field

const taskList = document.querySelector('.collection');          //The ul

const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button

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
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to ul 
    taskList.appendChild(li);




       //disable form submission
}


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
console.log(e.target);





