import {
    getTodos,
    addTodo,
    deleteTodo,
    toggleEditMode
  } from "./tasks.js";
  
  import {
    createTodoElement,
    createTodoEditElement
  } from "./dom.js";
  
  const ul = document.querySelector("ul");
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input.value.trim() === "") return;
  
    addTodo(input.value);
    input.value = "";
    render();
  });
  
  function render() {
    ul.innerHTML = "";
    getTodos().forEach((todo, index) => {
      const element = todo.editMode
        ? createTodoEditElement(todo, index, {
            onDelete: (i) => {
              deleteTodo(i);
              render();
            },
            onToggleEdit: (i) => {
              toggleEditMode(i);
              render();
            }
          })
        : createTodoElement(todo, index, {
            onDelete: (i) => {
              deleteTodo(i);
              render();
            },
            onToggleEdit: (i) => {
              toggleEditMode(i);
              render();
            }
          });
  
      ul.appendChild(element);
    });
  }
  
  render();
  