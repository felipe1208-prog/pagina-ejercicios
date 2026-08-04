<script setup>
import { ref } from 'vue';
import axios from 'axios';

const empleado = ref("");
const busqueda = ref("");

const busquedaEmpleado = async () => {
    try {
        const response = await axios.get(`https://localhost:7242/api/Ejercicio3?sueldo=${busqueda.value}`)
        empleado.value = response.data;
    } catch (error) {
        if (error.response) {
            console.error("Error 404 o 400: ", error.response.data);
        } else {
            console.error("Error al cargar los empleados: ", error);
        }
    }
}

</script>

<template></template>

<style scoped></style>