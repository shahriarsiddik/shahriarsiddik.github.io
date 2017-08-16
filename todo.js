
	// document.addEventListener("DOMContentLoaded", function() {
	//   // code...
	// });

	// (function() {



	// )();


	var todoList = {
		todos: [],
		displayTodos: function(){
			for (var i=0; i<this.todos.length; i++){
				if (this.todos[i].completed == true){					
					console.log("(x) "+this.todos[i].name);
				}
				else{
					console.log("( ) "+this.todos[i].name);
				}
			}			
		},
		addTodos: function(item){
			this.todos.push({"name":item,"completed":false});
			this.displayTodos();
		},
		deleteTodos: function(position){
			this.todos.splice(position,1);
			this.displayTodos();
		},
		toggleTodo: function (index) {
			if (this.todos[index].completed){
				this.todos[index].completed = false;
			}
			else{
				this.todos[index].completed = true;
			}			
			this.displayTodos();
		},
		toggleAll: function () {
			var totalItems = this.todos.length;
			var totalCompleted = 0;
			for (var i=0; i<totalItems; i++){
				if (this.todos[i].completed===true){
					totalCompleted += 1;
				}
			}

			if (totalItems === totalCompleted){
				for (var i=0; i<totalItems; i++){
					this.todos[i].completed = false;
				}
			}

			else{
				for (var i=0; i<totalItems; i++){
					this.todos[i].completed = true;
				}
			}

			this.displayTodos();
		},
		changeTodo: function(position,text){
			this.todos[position].name = text;
			this.displayTodos();
		}
	}

	todoList.addTodos("task 1");
	todoList.addTodos("task 2");
	todoList.addTodos("task 3");
	todoList.addTodos("task 4");
	todoList.addTodos("task 5");


	var handler = {
		toggleAll: function () {
			todoList.toggleAll()
		},

		showAll: function () {
			todoList.displayTodos()
		},

		addTodoText: function () {
			todoText = document.getElementById("addTodoText");
			todoList.addTodos(todoText.value);
			todoText.value = "";
		},

		changeTodo: function () {
			todoPosition = document.getElementById("changeTodoPosition");
			todoText = document.getElementById("changeTodoText");
			todoList.changeTodo(todoPosition,todoText);
			todoPosition.value = '';
			todoText.value = '';
		}

	}