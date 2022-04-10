import { createStore } from 'vuex'

export default createStore({
	state: {
		todos: [
			{id: 1, text: 'My current ToDo for this day'},
			{id: 2, text: 'My current ToDo for this day'},
			{id: 3, text: 'My current ToDo for this day'},
			{id: 4, text: 'My current ToDo for this day'},
			{id: 5, text: 'My current ToDo for this day'},
		]
	},
	getters: {
		
	},
	mutations: {
		addTodo(state, todo) {
			state.todos.push(todo)
		},
		removeTodo(state, id) {
			state.todos = state.todos.filter(item => item.id !== id)
		},
		updateTodo(state, todo) {
			const index = state.todos.findIndex(item => item.id === todo.id)
			
			state.todos[index] = todo
		}
	},
	actions: {
		
	},
	modules: {
		
	}
})