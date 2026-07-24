<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import Nav from '@/components/Nav.vue';

const tasaBCV = ref(0);
const euro = ref(0);

const rutasHeader = ref([
    { nombre: "Dolar", ruta: "/ejercicio2/dolar" },
    { nombre: "Euro", ruta: "/ejercicio2/euro" },
    { nombre: "Usdt", ruta: "/ejercicio2/usdt" }
]);

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

<template>
    <div class="main-container">

        <Nav :enlaces="rutasHeader"/>

        <div class="contenido">
            <router-view></router-view>
        </div>

    </div>
    
</template>