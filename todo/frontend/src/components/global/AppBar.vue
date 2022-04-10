<template>
  <v-app-bar
    color="info"
    density="prominent"
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>ToDo list</v-app-bar-title>

    <template v-slot:append>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>