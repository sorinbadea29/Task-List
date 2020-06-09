const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();
function loadEventListeners(){
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks);
};

// Add Task
function addTask(e) {
  e.preventDefault();
  if(taskInput.value === ''){
    alert('Add a task');
  }else{
    let li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    let link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
    taskInput.value = '';
    };
};

// Remove Task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are You Sure?')){
      e.target.parentElement.parentElement.remove();
    };
  };
};


// Clear Tasks
function clearTasks(){
  taskList.innerHTML = '';
};

// Filter Tasks
function filterTasks(e){
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    }else{
      task.style.display = 'none';
    };
  });
};