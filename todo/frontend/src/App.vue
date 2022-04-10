<template>
  <v-app>
		<app-bar />
    <v-main class="main">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/global/AppBar.vue'

export default {
  name: 'App',

  components: {
		AppBar
  },

  data: () => ({
    //
  }),
}
</script>

<style>
	.main {
		background-color: #f0f0f0;
		height: 100vh;
	}
</style>
