import React from 'react';
import TodoItem from './../components/TodoItem';
import './../styles/TodoList.css';

const TodoList = ({ todos, onToggle, onDelete, onUpdate }) => (
	<ul className='todo-list'>
		{todos.length === 0 ? (
			<li className='empty-list'>No tasks yet! 🎉</li>
		) : (
			todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onToggle={onToggle}
					onDelete={onDelete}
					onUpdate={onUpdate}
				/>
			))
		)}
	</ul>
);

export default TodoList;
