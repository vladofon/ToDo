<template>
	<v-menu transition="scale-transition">
		<template v-slot:activator="{ props }">
			<v-btn v-bind="props" flat icon="mdi-dots-vertical" class="align-self-start"></v-btn>
		</template>
		
		<v-list elevation="5" rounded class="pa-0">
			<slot name="action-buttons"></slot>
<!-- 			<v-list-item>
				<v-list-item-title>
					<v-btn class="text-red" plain>Delete</v-btn>
				</v-list-item-title>
			</v-list-item>
			
			<v-list-item>
				<v-list-item-title>
					<v-btn class="text-orange" plain>Edit</v-btn>
				</v-list-item-title>
			</v-list-item> -->
			
		</v-list>
	</v-menu>
</template>

<script>
	
	
	export default {
		
	}
</script>