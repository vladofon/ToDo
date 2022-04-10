<template>
	<main-header />
	<todo-form />
	<todo-list />
</template>

<script>
	import MainHeader from '@/components/main/MainHeader.vue'
	import TodoList from '@/components/main/TodoList.vue'
	import TodoForm from '@/components/main/TodoForm.vue'
	
	export default {
		components: {
			MainHeader,
			TodoList,
			TodoForm
		}
	}
</script>