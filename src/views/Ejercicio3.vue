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
            <h1 class="titulo">Formulario Para Sueldo</h1>
            <div class="input-y-eso">
                <input type="text" class="ingreso">
                <button class="boton"></button>
            </div>
            <div class="resultados">
                Hola
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.label-boton {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 700px;
    height: 600px;
    flex-direction: column;
    gap: 50px;
}

.boton {
    width: 100px;
    height: 50px;
}

.ingreso {
    
}

.resultados {
    display: flex;
    justify-content: center;
    border: 1px solid black;
    height: 200px;
    width: 500px;
}

</style>