<template>
  <div class="contenedor">
    <div v-if="usuario">
      <v-card class="mx-auto" max-width="600">
        <v-card-title class="headline"
          >Perfil de {{ usuario.nombre }}</v-card-title
        >
        <v-card-text>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Apellido:</v-list-item-title>
                <v-list-item-subtitle>{{
                  usuario.apellido
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Fecha de nacimiento:</v-list-item-title>
                <v-list-item-subtitle>{{
                  usuario.fechaNacimiento
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Edad:</v-list-item-title>
                <v-list-item-subtitle>{{ calcularEdad }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";

const usuario = ref(null);
const router = useRouter();

onMounted(() => {
  const usuarioId = router.currentRoute.value.params.id;
  usuario.value = usuarios.find((u) => u.id === parseInt(usuarioId));
});

const usuarios = [
  { id: 1, nombre: "Juan", apellido: "Perez", fechaNacimiento: "1990-05-15" },
  {
    id: 2,
    nombre: "María",
    apellido: "González",
    fechaNacimiento: "1985-12-10",
  },
  {
    id: 3,
    nombre: "Pedro",
    apellido: "Fernandez",
    fechaNacimiento: "1988-08-20",
  },
];

const calcularEdad = computed(() => {
  if (usuario.value && usuario.value.fechaNacimiento) {
    const fechaNacimiento = new Date(usuario.value.fechaNacimiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    return edad;
  }
  return "";
});
</script>

<style scoped>
.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
