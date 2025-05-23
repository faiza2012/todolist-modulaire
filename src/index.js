import "./style.css";

const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("form > input");

console.log(form, input);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  addTodo(value);
});

const todos = [
  {
    text: "Je suis une todo",
    done: false,
    editMode: true,
  },
  {
    text: "Faire du JavaScript",
    done: true,
    editMode: false,
  },
];

// Main bitch
const displayTodo = () => {
  const todosNode = todos.map((todo, index) => {
    if (todo.editMode) {
      return createTodoEditElement(todo, index);
    } else {
      return createTodoElement(todo, index);
    }
  });
  ul.innerHTML = "";
  ul.append(...todosNode);
};

const createTodoElement = (todo, index) => {
  const li = document.createElement("li");
  const buttonDelete = document.createElement("button");
  buttonDelete.innerHTML = "Supprimer";
  const buttonEdit = document.createElement("button");
  buttonEdit.innerHTML = "Editer";
  buttonDelete.addEventListener("click", (event) => {
    deleteTodo(event, index);
  });
  buttonEdit.addEventListener("click", (event) => {
    toggleEditTodo(event, index);
  });

  li.innerHTML = `
    <span class="todo ${todo.done ? "done" : ""}"></span>
    <p>${todo.text}</p>
    `;
  li.addEventListener("click", (event) => {
    toggleTodo(index);
  });
  li.append(buttonEdit, buttonDelete);
  return li;
};

const createTodoEditElement = (todo, index) => {
  const li = document.createElement("li");
  const input = document.createElement("input");
  input.type = "text";
  input.value = todo.text;
  const saveButton = document.createElement("button");
  saveButton.innerHTML = "Save";
  const cancelButton = document.createElement("button");
  cancelButton.innerHTML = "Cancel";

  cancelButton.addEventListener("click", (event) => {
    toggleEditTodo(event, index);
  });

  saveButton.addEventListener("click", (event) => {
    editTodo(event, index, input);
  });

  li.append(input, cancelButton, saveButton);
  return li;
};

const addTodo = (text) => {
  todos.push({
    text: text,
    done: false,
  });
  displayTodo();
};

const deleteTodo = (event, index) => {
  event.stopPropagation();
  todos.splice(index, 1);
  displayTodo();
};

const editTodo = (event, index, input) => {
  event.stopPropagation();
  const value = input.value;
  todos[index].text = value;
  todos[index].editMode = false;
  displayTodo();
};

const toggleEditTodo = (event, index) => {
  event.stopPropagation();
  todos[index].editMode = !todos[index].editMode;
  displayTodo();
};

const toggleTodo = (index) => {
  todos[index].done = !todos[index].done;
  displayTodo();
};

displayTodo();
