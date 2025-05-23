export function createTodoElement(todo, index, { onDelete, onToggleEdit }) {
    const li = document.createElement("li");
    li.innerText = todo.text;
  
    const buttonEdit = document.createElement("button");
    buttonEdit.innerText = "Éditer";
    buttonEdit.addEventListener("click", () => onToggleEdit(index));
  
    const buttonDelete = document.createElement("button");
    buttonDelete.innerText = "Supprimer";
    buttonDelete.addEventListener("click", () => onDelete(index));
  
    li.appendChild(buttonEdit);
    li.appendChild(buttonDelete);
  
    return li;
  }
  
  export function createTodoEditElement(todo, index, { onDelete, onToggleEdit }) {
    const li = document.createElement("li");
  
    const input = document.createElement("input");
    input.type = "text";
    input.value = todo.text;
  
    const buttonApply = document.createElement("button");
    buttonApply.innerText = "Appliquer";
    buttonApply.addEventListener("click", () => {
      todo.text = input.value;
      onToggleEdit(index); // Sort du mode édition
    });
  
    li.appendChild(input);
    li.appendChild(buttonApply);
  
    return li;
  }
  