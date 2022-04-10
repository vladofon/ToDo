<template>
	<v-container class="">
		<v-row>
			<v-col align="center">
				<todo-card v-for="card in 5" :key="card"/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import TodoCard from '@/components/main/TodoCard.vue'
	
	export default {
		components: {
			TodoCard
		}
	}
</script>