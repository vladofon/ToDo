<template>
	<v-card class="my-2" max-width="500px">
		<v-card-title class="d-flex justify-space-between">
			<span>Current toDo</span>
			<v-spacer></v-spacer>
			
			<app-menu>
			
			</app-menu>
			
		</v-card-title>
	</v-card>
</template>

<script>
	import AppMenu from '@/components/global/AppMenu.vue'
	
	export default {
		components: {
			AppMenu
		}
	}
</script>