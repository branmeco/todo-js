import { Todo, TodoList } from "./classes";
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class';

import "./styles.css";

const todoList = new TodoList();

const tarea = new Todo("Aprender JavaScript");

todoList.nuevoTodo( tarea );

console.log( todoList );
