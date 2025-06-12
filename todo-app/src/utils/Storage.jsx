const STORAGE_KEY = 'todo-app-tasks';

export function saveTasks(tasks) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function loadTasks() {
	const data = localStorage.getItem(STORAGE_KEY);
	try {
		return data ? JSON.parse(data) : [];
	} catch {
		return [];
	}
}
