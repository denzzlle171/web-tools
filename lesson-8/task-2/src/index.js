import { initTodoListHandlers } from './list/todoList.js';
import { renderTasks } from './list/render.js';
import { getTasksList } from './list/tasksGateway.js';
import { setItem } from './list/storage.js';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then((tasksList) => {
    setItem('taskList', tasksList);
    renderTasks();
  });

  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);

// {
//           "edge": "17",
//           "firefox": "60",
//           "chrome": "67",
//           "safari": "11.1"
//         },
