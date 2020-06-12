const LS = new LocalStorage;

// Define UI const
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners(){
  document.addEventListener('DOMContentLoaded', LS.getTasks);
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks);
};

// Add Task
function addTask(e){
  if(taskInput.value === ''){
    alert('Add a task');
  }else{
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
    LS.storeTask(taskInput.value);
    taskInput.value = '';
  }
  e.preventDefault();
};

// Remove Task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are You Sure?')){
      e.target.parentElement.parentElement.remove();
      LS.removeStorageTask(e.target.parentElement.parentElement);
    };
  };
};

// Clear Tasks
function clearTasks(){
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  };
  LS.clearStorageTasks();
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