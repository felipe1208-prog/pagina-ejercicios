<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const tasaBCV = ref(0);
const euro = ref(0);

const obtenerTasaBCV = async () => {
    try {
        const response = await axios.get("https://ve.dolarapi.com/v1/dolares");
        tasaBCV.value = response.data;
    } catch (error) {
        console.error("Error al cargar tasa BCV: ", error);
    }
};

const obtenerTasaEuro = async () => {
    try {
        const response = await axios.get("https://ve.dolarapi.com/v1/euros");
        euro.value = response.data;
    } catch (error) {
        console.error("Error al cargar la tasa Euro: ", error);
    }
};

onMounted(() => {
    obtenerTasaBCV();
    obtenerTasaEuro();
});
</script>

<template></template>