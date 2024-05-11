function addTodo() {
  var todoInput = document.getElementById('todoInput');
  var todoText = todoInput.value.trim();
  if (todoText !== '') {
    var todoList = document.getElementById('todoList');
    var newTodo = document.createElement('div');
    newTodo.textContent = todoText;
    newTodo.className = 'rounded px-3 py-2';
    var colors = ['bg-blue-100', 'bg-red-100', 'bg-green-100', 'bg-gray-100'];
    var index = todoList.children.length % colors.length;
    var colorClass = colors[index];
    
    newTodo.className = 'rounded px-3 py-2 ' + colorClass;
    todoList.appendChild(newTodo);
    todoInput.value = '';
    updatePendingCount();
  }
}

function updatePendingCount() {
  var pendingTasks = document.querySelectorAll('#todoList > div').length;
  document.getElementById('pendingTasks').textContent = pendingTasks;
}

function clearAll() {
  if (confirm('Are you sure you want to clear all todos?')) {
    var todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    updatePendingCount();
  }
}
updatePendingCount();

