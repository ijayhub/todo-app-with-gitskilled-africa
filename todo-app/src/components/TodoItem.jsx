import React, { useState } from 'react';
import './../styles/TodoItem.css';

const TodoItem = ({ todo, onToggle, onDelete, onUpdate }) => {
	const [editing, setEditing] = useState(false);
	const [editValue, setEditValue] = useState(todo.text);

	const handleEdit = () => setEditing(true);

	const handleSave = () => {
		if (editValue.trim()) {
			onUpdate(todo.id, editValue.trim());
			setEditing(false);
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') handleSave();
		else if (e.key === 'Escape') {
			setEditing(false);
			setEditValue(todo.text);
		}
	};

	return (
		<li className={`todo-item${todo.completed ? ' completed' : ''}`}>
			<input
				type='checkbox'
				checked={todo.completed}
				onChange={() => onToggle(todo.id)}
			/>
			{editing ? (
				<input
					className='edit-input'
					value={editValue}
					onChange={(e) => setEditValue(e.target.value)}
					onBlur={handleSave}
					onKeyDown={handleKeyDown}
					autoFocus
					maxLength={100}
				/>
			) : (
				<span
					className='todo-text'
					onDoubleClick={handleEdit}
					title='Double click to edit'>
					{todo.text}
				</span>
			)}
			<button
				className='delete-btn'
				onClick={() => onDelete(todo.id)}
				title='Delete'>
				&times;
			</button>
			{!editing && (
				<button className='edit-btn' onClick={handleEdit} title='Edit'>
					✎
				</button>
			)}
		</li>
	);
};

export default TodoItem;
