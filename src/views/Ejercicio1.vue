<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';



const mensaje = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get("https://localhost:7242/api/Ejercicio1");
        mensaje.value = response.data;
    } catch (error) {
        console.error("Error al cargar: ", error)
    }
});

</script>

<template>
    <div class="backend">
        <h1 v-if="mensaje">{{ mensaje.msg }}</h1>
        <h1 v-else>No se ha podido establecer conexión</h1>
    </div>
</template>

<style scoped>

.backend h1 {
    font-family: Google Sans;
}

</style>