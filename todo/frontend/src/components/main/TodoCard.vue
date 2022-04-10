<template>
	<v-card class="my-2" max-width="500px">
		<v-card-title class="d-flex justify-space-between">
			<span>{{todo.text}}</span>
			<v-spacer></v-spacer>
			
			<todo-menu :todo="todo"/>
			
		</v-card-title>
	</v-card>
</template>

<script>
	import TodoMenu from '@/components/main/TodoMenu.vue'
	
	export default {
		components: {
			TodoMenu
		},
		props: ['todo']
	}
</script>