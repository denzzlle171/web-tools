import { onCreateTask } from './createTask.js';
import { onToggleTask, onDeleteTask } from './updateTask.js'; // import { onListClick } from './updateTask.js';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);
  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onToggleTask); //test

  todoListElem.addEventListener('click', onDeleteTask);
};