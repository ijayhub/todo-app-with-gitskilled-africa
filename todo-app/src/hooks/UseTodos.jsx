import { useState, useEffect } from 'react';
import { loadTasks, saveTasks } from '../utils/Storage';
import { uuid } from '../utils/Uuid';

export function useTodos() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		setTodos(loadTasks());
	}, []);

	useEffect(() => {
		saveTasks(todos);
	}, [todos]);

	const addTodo = (text) => {
		setTodos([
			...todos,
			{ id: uuid(), text, completed: false, created: Date.now() },
		]);
	};

	const updateTodo = (id, newText) => {
		setTodos(
			todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
		);
	};

	const toggleTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return {
		todos,
		addTodo,
		updateTodo,
		toggleTodo,
		deleteTodo,
	};
}
