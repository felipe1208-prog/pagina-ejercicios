<script setup>
import { ref } from 'vue';
import axios from 'axios';

const sueldo = ref(0);
const mensajeError = ref("");

const calcularSueldo = async () => {
    try {
        const response = await axios.post(`https://localhost:7242/api/Ejercicio3?sueldo=${sueldo.value}`);
        sueldo.value = response.data;
    } catch (error) {
        if (error.response) {
            mensajeError.value = error.response.data;
        } else {
            console.error("Error al calcular el sueldo: ", error);
        }
    }
}

</script>

<template>
    <div class="container">
        <div class="label-boton">
            <input type="text" class="ingreso">
            <button class="boton"></button>
        </div>
            <div class="resultados"></div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}


</style>