const form = document.querySelector('form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (todoInput.value.trim() === '') {
    return;
  }
  const todoItem = document.createElement('li');
  todoItem.innerHTML = `
    <span class="todo-item">${todoInput.value.trim()}</span>
    <button class="delete-button">Delete</button>
  `;
  todoList.appendChild(todoItem);
  todoInput.value = '';
