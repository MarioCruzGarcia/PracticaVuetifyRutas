<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>Práctica Vue</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Inicio</v-btn>
    
    </v-app-bar>

    <div class="content">
      <RouterView />
    </div>
  </v-app>
</template>

<style scoped>
.content {
  margin-top: 64px; 
}
</style>
