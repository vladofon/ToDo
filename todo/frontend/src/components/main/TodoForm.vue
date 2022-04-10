<template>
	<v-container  align="center">
	
		<v-row align="center" justify="center">
			<v-col align="center" cols="6">
				<v-text-field 
					v-model="todo.text" 
					@keyup.enter="saveTodo"
					@edit="editTodo"
				
					width="500px"
					color="info"
					label="ToDo"
					placeholder="Enter some task etc..."
					variant="contained">
				</v-text-field>
			</v-col>
		</v-row>
		
	</v-container>
</template>

<script>
	import { mapMutations } from 'vuex'
	
	export default {
		data() {
			return {
				todo: {
					id: null,
					text: ''
				}
			}
		},
		methods: {
			...mapMutations(['addTodo', 'updateTodo']),
			saveTodo() {
				if(this.todo.id) {
					this.updateTodo(this.todo)
				} else {
					this.todo.id = Math.floor(Math.random() * 1000000)
					this.addTodo(this.todo)
				}
				
				this.todo = {
					id: null,
					text: ''
				}
			},
			editTodo(todo) {
				this.todo = todo
			}
		}
	}
</script>