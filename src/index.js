import { Todo, TodoList } from "./classes";
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class';
import { crearTodoHtml } from "./js/componentes";

import "./styles.css";

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));