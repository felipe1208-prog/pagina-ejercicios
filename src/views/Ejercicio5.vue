<script setup>
import { ref } from 'vue';
import axios from 'axios';

const mensaje = ref("");
const nombreUsuario = ref("");
const clave = ref("");
const email = ref("");

const inicioSesion = async () => {
    try {
        const response = await axios.post("https://localhost:7242/api/Ejercicio5", {
            nombre: nombreUsuario.value,
            correoElectronico: email.value,
            clave: clave.value
        });
        mensaje.value = response.data;
    } catch (error) {
        if (error.response.data.errors) {
            mensaje.value = Object.values(error.response.data.errors)[0][0];
        } else if (error.response.data.mensaje) {
            mensaje.value = error.response.data.mensaje;
        } else {
            console.error("Error: ", error);
        }
    }
}
</script>

<template></template>

<style scoped></style>