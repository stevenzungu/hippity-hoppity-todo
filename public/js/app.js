var todoApp = {
  todos: [], //our data source/store
  init: function(){
    todoApp.cacheDom();
    todoApp.addEventListeners();
    todoApp.render();
  },
  cacheDom: function(){
    todoApp.createButton = document.querySelector("#create");
    todoApp.taskInput = document.querySelector("#task");
    todoApp.categoryInput = document.querySelector("#category");
    todoApp.dateInput = document.querySelector("#date");
    todoApp.list = document.querySelector("#list");
},
  render: function(){

    var listItemsFromTodos = todoApp.todos
                                 .map(todoApp.createListItem)


                                .join("");
    todoApp.list.innerHTML = listItemsFromTodos;

  var deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach(function(button){
    button.addEventListener('click', todoApp.removeTodo);
  });
  console.log(deleteButtons);
},
  createListItem: function (todo, index){
    return `<li data-index='${index}'>${todo.task}: (${todo.date}) [${todo.category}]<button class='delete'>x</button></li>`;
  },
  addEventListeners: function() {
    this.createButton.addEventListener('click', this.addTodo);
  },
  addTodo: function() {
      var task = todoApp.taskInput.value; //specific to input field
      var date = todoApp.dateInput.value;
      var category = todoApp.categoryInput.value;
      var newTodo = createTodo(task, date, category);
      todoApp.todos.push(newTodo);
      todoApp.taskInput.value = "";
      todoApp.dateInput.value = "";
      todoApp.categoryInput.value = "";
      todoApp.render();
  },
  removeTodo: function(){

    var element = this; //only refers to the element because we are in an even handler
    var parent = element.parentNode;
    var index = parent.dataset.index;
    todoApp.todos.splice(index, 1);
    todoApp.render();
  }
};

todoApp.init();
