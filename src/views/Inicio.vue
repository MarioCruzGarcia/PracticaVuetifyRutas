<template>
  <div>
    <v-card class="mx-auto my-8" row wrap max-width="344" v-for="user in users" :key="user.id" elevation="16">
      <v-card-item>
        <v-card-title>{{ user.name }}</v-card-title>
        <v-card-subtitle>{{ user.lastname }}</v-card-subtitle>
      </v-card-item>
      <v-card-text>Usuario ID: {{ user.id }}</v-card-text>
      <v-btn text :to="`/perfil/${user.id}`">Perfil</v-btn>
    </v-card>
  </div>
</template>
<script setup>
import { ref } from "vue";

const users = ref([
  { id: 1, name: "Juan", lastname: "Perez" },
  { id: 2, name: "María", lastname: "González" },
  { id: 3, name: "Pedro", lastname: "Fernandez" },
]);
</script>
