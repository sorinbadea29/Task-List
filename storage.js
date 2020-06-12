class LocalStorage{

  // Get Tasks from LS
  getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    }else{
      tasks = JSON.parse(localStorage.getItem('tasks'));
    };
    tasks.forEach(function(task){
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.appendChild(document.createTextNode(task));
      const link = document.createElement('a');
      link.className = 'delete-item secondary-content';
      link.innerHTML = '<i class="fa fa-remove"></i>';
      li.appendChild(link);
      taskList.appendChild(li);
    });
  };

  // Store Task in LS
  storeTask(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    }else{
      tasks = JSON.parse(localStorage.getItem('tasks'));
    };
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  // Remove Task from LS
  removeStorageTask(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    };
    tasks.forEach(function(task, index){
      if(taskItem.textContent === task){
        tasks.splice(index, 1);
      };
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  
  // Clear Tasks from LS
  clearStorageTasks(){
    localStorage.clear();
  };
};