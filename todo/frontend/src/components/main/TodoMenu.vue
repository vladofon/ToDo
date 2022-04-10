<template>
	<app-menu>
		<template v-slot:action-buttons>
		
			<v-list-item>
				<v-list-item-title>
					<v-btn @click="removeTodo(todo.id)" class="text-red" plain>Delete</v-btn>
				</v-list-item-title>
			</v-list-item>
			
			<v-list-item>
				<v-list-item-title>
					<v-btn @click="$emit('edit', todo)" class="text-orange" plain>Edit</v-btn>
				</v-list-item-title>
			</v-list-item>
			
		</template>
	</app-menu>
</template>

<script>
	import AppMenu from '@/components/global/AppMenu.vue'
	import { mapMutations } from 'vuex'
	
	export default {
		components: {
			AppMenu
		},
		props: ['todo'],
		methods: {
			...mapMutations([
				'removeTodo',
			]),
			
		}
		
	}
</script>