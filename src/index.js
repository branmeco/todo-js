import { Todo, TodoList } from "./classes";
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class';
import { crearTodoHtml } from "./js/componentes";

import "./styles.css";

export const todoList = new TodoList();

const tarea = new Todo("Aprender JavaScript!!!");
todoList.nuevoTodo( tarea );

console.log( todoList );

crearTodoHtml(tarea);
