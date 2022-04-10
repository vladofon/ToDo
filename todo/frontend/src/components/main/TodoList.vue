<template>
	<v-container>
		<v-row v-if="todos.length">
			<v-col align="center">
				<todo-card v-for="todo in todos" :key="todo" :todo="todo"/>
			</v-col>
		</v-row>
		<v-row v-else>
			<v-col align="center">
				<h3>There are no any ToDo's</h3>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import TodoCard from '@/components/main/TodoCard.vue'
	import { mapState } from 'vuex'
	
	export default {
		components: {
			TodoCard
		},
		computed: {
			...mapState(['todos'])
		}
	}
</script>