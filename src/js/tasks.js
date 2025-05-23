let todos = [
    {
      text: "Acheter du lait",
      done: false,
      editMode: false
    }
  ];
  
  export function getTodos() {
    return todos;
  }
  
  export function addTodo(text) {
    todos.push({ text, done: false, editMode: false });
  }
  
  export function deleteTodo(index) {
    todos.splice(index, 1);
  }
  
  export function toggleDone(index) {
    todos[index].done = !todos[index].done;
  }
  
  export function toggleEditMode(index) {
    todos[index].editMode = !todos[index].editMode;
  }
  