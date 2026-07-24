<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const tasaBCV = ref(0);
const indicador = ref(0);

const obtenerTasaBCV = async () => {
    try {
        indicador.value = 0;
        const response = await axios.get("https://ve.dolarapi.com/v1/dolares");
        tasaBCV.value = response.data;
        if (tasaBCV.value) {
            indicador.value = 1;
        };
    } catch (error) {
        console.error("Error al cargar tasa BCV: ", error);
    }
};

onMounted(() => {
    obtenerTasaBCV();
});

</script>

<template>
    <div class="cuadro-principal">
        <!--Seccion Skeleton-->
        <div class="comprobacion" v-if="indicador === 0">
            <div class="circulo-flecha">
                <i class="fa-solid fa-caret-left flecha"></i>
            </div>
            <div class="skeleton">
                <h1>Cargando tasa...</h1>
            </div>
            <div class="circulo-flecha">
                <i class="fa-solid fa-caret-right flecha"></i>
            </div>
        </div>
        <!--Seccion del BCV-->
        <div class="comprobacion" v-if="indicador === 1">
            <div class="circulo-flecha">
                <i class="fa-solid fa-caret-left flecha"></i>
            </div>
            <div class="tasa-bcv">
                <div class="superior-tarjeta">
                    <h1 class="titulo-tarjeta">{{ tasaBCV[0]?.promedio?.toFixed(2) }} Bs.</h1>
                    <h1 class="titulo-tarjeta">=</h1>
                    <h1 class="titulo-tarjeta">1$</h1>
                </div>
                <p class="linea"></p>
                <div class="inferior-tarjeta">
                    <div class="texto-inferior">
                        <p class="detalle">Moneda: {{ tasaBCV[0].moneda }}</p>
                        <p class="detalle">Fecha de Actualización: {{ new Date(tasaBCV[0].fechaActualizacion).toLocaleDateString('es-VE') }}</p>
                        <p class="detalle">Dificultad de Compra: Imposible</p>
                    </div>
                    <div class="div-btn-recarga">
                        <i class="fa-solid fa-rotate boton-recarga" @click="obtenerTasaBCV"></i>
                    </div>
                </div>
            </div>
            <div class="circulo-flecha">
                <i class="fa-solid fa-caret-right flecha"></i>
            </div>
        </div>
    </div>
</template>

<style scoped>

.cuadro-principal {
    display: flex;
    justify-content: center;
    align-items: center;
}

.comprobacion {
    display: flex;
    justify-content: center;
    align-items: center;
}

.circulo-flecha {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    height: 60px;
    width: 60px;
    margin: 20px;
    border-radius: 100%;
    transition: all 0.3s ease;
}

.flecha {
    font-size: 25px;
    transition: all 0.3s ease; 
}

.circulo-flecha:hover {
    cursor: pointer;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.456),
        inset 0px 3px 4px rgba(0, 0, 0, 0);
    transform: scale(1.1);
}

.circulo-flecha:active {
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0),
        inset 0px 3px 4px rgba(0, 0, 0, 0.456);
    transform: scale(1);
}

.tasa-bcv {
    border: 1px solid black;
    min-height: 400px;
    width: 700px;
    border-radius: 30px;
}

.skeleton {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    min-height: 400px;
    width: 700px;
    border-radius: 30px;
}

.titulo-tarjeta {
    display: inline-block;
    font-family: Google Sans;
    font-size: 90px;
    font-weight: 800;
    letter-spacing: 4px;
    color: white;
}

.superior-tarjeta {
    padding: 15px;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 150px;
    margin-top: 30px;
}

.linea {
    width: 90%;
    margin-left: 5%;
    border-radius: 5px;
    height: 25px;
    margin-top: 35px;
    margin-bottom: 35px;
    background-color: rgba(128, 128, 128, 0.426);
}

.inferior-tarjeta {
    padding: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    height: 108px;
    border-radius: 20px;
    background-color: rgba(128, 128, 128, 0.486);
    margin-left: 2.5%;
}

.texto-inferior {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    flex-direction: column;
}

.detalle {
    font-family: Google Sans;
}

.div-btn-recarga {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 50px;
    width: 50px;
    margin-right: 10px;
}

.boton-recarga {
    font-size: 50px;
    transition: transform 0.5s ease-in-out, color 0.2s ease;
}

.div-btn-recarga:active .boton-recarga {
    transform: rotate(360deg);
}

</style>