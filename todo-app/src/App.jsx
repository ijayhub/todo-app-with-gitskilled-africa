import React from 'react';
import { useTodos } from './hooks/UseTodos';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './styles/App.css';

function App() {
	const { todos, addTodo, updateTodo, toggleTodo, deleteTodo } = useTodos();

	return (
		<div className='app-container'>
			<h1 className='app-title'>My To-Do List</h1>
			<AddTodo onAdd={addTodo} />
			<TodoList
				todos={todos}
				onToggle={toggleTodo}
				onDelete={deleteTodo}
				onUpdate={updateTodo}
			/>
			<footer className='footer'>
				<span>Made with ♥ by you!</span>
			</footer>
		</div>
	);
}

export default App;
