const app = new Vue({
  el: "#app",
  data: {
    title: "Simple TodoList",
    alert: "Please add a todo",
    footer: "Created by Matt Day, using VueJs",
    isAlert: false,
    newTodo: "",
    todos: [],
  },
  methods: {
    addTodo() {
      if (this.newTodo === "") {
        this.isAlert = true;
        setTimeout(() => {
          this.isAlert = false;
        }, 2000);
        return;
      }
      this.todos.push({
        title: this.newTodo,
        done: false,
      });
      this.newTodo = "";
    },
    removeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    allDone() {
      this.todos.forEach((todo) => {
        todo.done = true;
      });
    },
    clearAll() {
      this.todos = [];
    },
  },
});
