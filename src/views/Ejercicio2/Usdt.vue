<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const tasaRegistrada = ref(null);
const mostrarInfo = ref(0);
//0: Cargando, 1: Mensaje 404, 2: Info normal

const obtenerTasasRegistradas = async () => {
    try {
        const response = await axios.get("https://localhost:7242/api/TasasDivisas/USDT");
        tasaRegistrada.value = response.data;
        if (tasaRegistrada.value) {
            mostrarInfo.value = 1;
        }
    } catch (error) {
        console.error("Error al obtener las tasas registradas: ", error);
    }
};

onMounted(() => {
    obtenerTasasRegistradas()
});

</script>

<template>
    <div class="super-container">
        <div class="titulo-superior">
            <h1 class="titulo">Tasas USDT Registradas</h1>
        </div>
        <div class="cuadro-principal" v-if="mostrarInfo == 0">
            <div class="skeleton">
                <div class="skeleton-loader"></div>
            </div>
        </div>
        <div class="cuadro-principal" v-else-if="mostrarInfo == 1"></div>
        <div class="cuadro-principal" v-else-if="mostrarInfo == 2"></div>
    </div>
</template>

<style scoped>

.super-container {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 45px);
    width: 100%;
    box-sizing: border-box;
}

.titulo-superior {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
    padding-left: 30px;
    border-radius: 10px;
    height: 100px;
    align-items: center;
    background-color: rgba(128, 128, 128, 0.322);
    box-sizing: border-box;
}

.titulo {
    font-family: Google Sans;
    letter-spacing: 20px;
    font-size: 50px;
    font-weight: 100;
}

.cuadro-principal{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-grow: 1;
    box-sizing: border-box;
}

.skeleton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 30px;
    min-height: 400px;
    border-radius: 30px;
}

.skeleton-loader {
    width: 100px; /* Qué tan ancho es el círculo */
    height: 100px; /* Qué tan alto es el círculo */
    border: 8px solid rgba(128, 128, 128, 0.2);
    border-top: 8px solid black; /* El borde negro que va girando */
    border-radius: 50%;
    animation: giro-loader 1s linear infinite;
}

@keyframes giro-loader {
    0% { 
        transform: rotate(0deg); 
    }
    100% { 
        transform: rotate(360deg); 
    }
}

</style>