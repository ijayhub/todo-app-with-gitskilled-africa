import React, { useState } from 'react';
import './../styles/AddTodo.css';

const AddTodo = ({ onAdd }) => {
	const [value, setValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value.trim()) {
			onAdd(value.trim());
			setValue('');
		}
	};

	return (
		<form className='add-todo-form' onSubmit={handleSubmit}>
			<input
				className='add-todo-input'
				type='text'
				placeholder='Add a new task...'
				value={value}
				onChange={(e) => setValue(e.target.value)}
				maxLength={100}
			/>
			<button className='add-todo-btn' type='submit'>
				Add
			</button>
		</form>
	);
};

export default AddTodo;
