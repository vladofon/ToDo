<template>
	<v-container  align="center">
	
		<v-row align="center" justify="center">
			<v-col align="center" cols="6">
				<v-text-field v-model="todo.text" @keyup.enter="createTodo"
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
					text: ''
				}
			}
		},
		methods: {
			...mapMutations(['addTodo']),
			createTodo() {
				this.todo.id = Math.floor(Math.random() * 1000000)
				this.addTodo(this.todo)
				
				this.todo = {
					text: ''
				}
			}
		}
	}
</script>