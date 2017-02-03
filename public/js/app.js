var todoApp = {
  todos: [], //our data source/store
  init: function(){
    this.cacheDom();
    this.addEventListeners();
    this.render();
  },
  cacheDom: function(){
    this.createButton = document.querySelector("#create");
    this.taskInput = document.querySelector("#task");
    this.list = document.querySelector("#list");
},
  render: function(){
    var listItemsFromTodos = this.todos
                                 .map(function(todo){
                                   return "<li>" + todo + "</li>";
                                 })
                                 .join("");
    this.list.innerHTML = listItemsFromTodos;
  },
  addEventListeners: function() {
    this.createButton.addEventListener('click', this.addTodo);
  },
  addTodo: function() {
      var taskValue = todoApp.taskInput.value; //specific to input field
      todoApp.todos.push(taskValue);
      todoApp.render();
  }
};

todoApp.init();
