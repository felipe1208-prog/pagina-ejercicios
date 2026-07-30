<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ModalNotificacion from '@/components/ModalNotificacion.vue';

const tasaBCV = ref(0);
const indicador = ref(0);
const mostrarModal = ref(false);

const obtenerTasaBCV = async () => {
    try {
        const response = await axios.get("https://ve.dolarapi.com/v1/dolares");
        tasaBCV.value = response.data;
        if (tasaBCV.value) {
            indicador.value = 1;
            mostrarModal.value = true;
            setTimeout(() => {
                mostrarModal.value = false;
            }, 3000);
        };
    } catch (error) {
        console.error("Error al cargar tasa BCV: ", error);
    }
};

onMounted(() => {
    obtenerTasaBCV();
});

const tasaEuro = ref(0);

const obtenerTasaEuro = async () => {
    try {
        const response = await axios.get("https://ve.dolarapi.com/v1/euros");
        tasaEuro.value = response.data;
        if (tasaEuro.value) {
            indicador.value = 2;
            mostrarModal.value = true;
            setTimeout(() => {
                mostrarModal.value = false;
            }, 3000);
        };
    } catch (error) {
        console.error("Error al cargar la tasa Euro: ", error);
    }
};

const tasaUsdt = ref(0);

const obtenerTasaUsdt = async () => {
    try {
        const response = await axios.get("https://ve.dolarapi.com/v1/dolares");
        tasaUsdt.value = response.data;
        if (tasaUsdt.value) {
            indicador.value = 3;
            mostrarModal.value = true;
            setTimeout(() => {
                mostrarModal.value = false;
            }, 3000);
        };
    } catch (error) {
        console.error("Error al cargar tasa BCV: ", error);
    }
};

const flechaDerecha = ref(false);
const flechaIzquierda = ref(false);
const direccionTransicion = ref("fade");

const cambiarValorIndicador = () => {
    if (indicador.value == 1) {
        direccionTransicion.value = "slide-derecha";
        indicador.value = 2;
    } else if (indicador.value == 2 && flechaDerecha.value == true) {
        direccionTransicion.value = "slide-derecha";
        indicador.value = 3;
        flechaDerecha.value = false;
    } else if (indicador.value == 2 && flechaIzquierda.value == true) {
        direccionTransicion.value = "slide-izquierda";
        indicador.value = 1;
        flechaIzquierda.value = false;
    } else {
        direccionTransicion.value = "slide-izquierda";
        indicador.value = 2;
    };
};

const cambiarTasa = async () => {
    if (indicador.value == 1) {
        await obtenerTasaBCV();
    } else if (indicador.value == 2) {
        await obtenerTasaEuro();
    } else {
        await obtenerTasaUsdt();
    }
};

const mostrarModalRegistro = ref(false);
const mensajeRegistro = ref(""); 

const registrarTasaBcv = async () => {
    try {
        const response = await axios.post("https://localhost:7242/api/TasasDivisas", {
            fechaActualizacion: tasaBCV.value[0].fechaActualizacion,
            tasa: "BCV",
            precio: tasaBCV[0].promedio,
            moneda: tasaBCV[0].moneda
        });
        mensajeRegistro.value = "Tasa BCV Registrada!";
        mostrarModalRegistro.value = true;
        setInterval(() => {
            mostrarModalRegistro.value = false;
        });
    } catch (error) {
        console.error("Error al registrar la tasa BCV: ", error);
        alert("No se pudo registrar la tasa, revise su conexión");
    }
};

const registrarTasaEuro = async () => {
    const response = await axios.post("https://localhost:7242/api/TasasDivisas", {
        fechaActualizacion: tasaEuro.value[0].fechaActualizacion,
        tasa: "EURO",
        precio: tasaEuro.value[0].promedio,
        moneda: tasaEuro.value[0].moneda
    });
    mensajeRegistro.value = "Tasa Euro Registrada!";
    mostrarModalRegistro.value = true;
    setInterval(() => {
        mostrarModalRegistro.value = false; 
    });
};

const registrarTasaUsdt = async () => {
    try {
        const response = await axios.post("https://localhost:7242/api/TasasDivisas", {
            fechaActualizacion: tasaUsdt.value[1].fechaActualizacion,
            tasa: "USDT",
            precio: tasaUsdt.value[1].promedio,
            moneda: tasaUsdt.value[1].moneda
        });
        mensajeRegistro.value = "Tasa BCV Registrada!";
        mostrarModalRegistro.value = true;
        setInterval(() => {
            mostrarModalRegistro.value = false;
        });
    } catch (error) {
        console.error("Error al registrar la tasa BCV: ", error);
        alert("No se pudo registrar la tasa, revise su conexión");
    }
};

</script>

<template>
    <div class="cuadro-principal">
        <Transition :name="direccionTransicion" mode="out-in">
            <div class="comprobacion" v-if="indicador === 0" key="0">
                <!--Seccion Skeleton-->
                <div class="skeleton">
                    <div class="skeleton-loader"></div>
                </div>
            </div>
            <div class="comprobacion" v-else-if="indicador === 1" key="1">
                <!--Seccion del BCV-->
                <div class="titulo-superior">
                    <h1 class="titulo">Tasa BCV</h1>
                </div>
                <div class="fila-tarjeta">
                    <div class="circulo-desactivado">
                        <i class="fa-solid fa-caret-left flecha-desactivada"></i>
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
                                    <p class="detalle">Moneda: {{ tasaBCV[0]?.moneda || "Cargando..." }}</p>
                                    <p class="detalle">Fecha de Actualización: {{ new Date(tasaBCV[0]?.fechaActualizacion).toLocaleDateString('es-VE') || "Cargando..." }}</p>
                                    <p class="detalle">Dificultad de Compra: Imposible</p>
                                </div>
                                <div class="div-btn-recarga">
                                    <i class="fa-solid fa-rotate boton-recarga" @click="obtenerTasaBCV()"></i>
                                </div>
                                <ModalNotificacion :open="mostrarModal" mensaje="Tasa BCV Actualizada"/>
                            </div>
                        </div>
                    <div class="circulo-flecha" @click="cambiarValorIndicador(); cambiarTasa()">
                        <i class="fa-solid fa-caret-right flecha"></i>
                    </div>
                </div>
                <div class="puntos">
                    <div class="punto-activo"></div>
                    <div class="punto-default"></div>
                    <div class="punto-default"></div>
                </div>
            </div>
            <div class="comprobacion" v-else-if="indicador === 2" key="2">
                <!--Seccion del Euro-->
                <div class="titulo-superior">
                    <h1 class="titulo">Tasa Euro</h1>
                </div>
                <div class="fila-tarjeta">
                    <div class="circulo-flecha" @click="flechaIzquierda = true; cambiarValorIndicador(); cambiarTasa()">
                        <i class="fa-solid fa-caret-left flecha"></i>
                    </div>
                    <div class="tasa-euro">
                        <div class="superior-tarjeta">
                            <h1 class="titulo-tarjeta">{{ tasaEuro[0]?.promedio?.toFixed(2) }} Bs.</h1>
                            <h1 class="titulo-tarjeta">=</h1>
                            <h1 class="titulo-tarjeta">1€</h1>
                        </div>
                        <p class="linea"></p>
                        <div class="inferior-tarjeta">
                            <div class="texto-inferior">
                                <p class="detalle">Moneda: {{ tasaEuro[0]?.moneda || "Cargando..." }}</p>
                                <p class="detalle">Fecha de Actualización: {{ new Date(tasaEuro[0]?.fechaActualizacion).toLocaleDateString('es-VE') || "Cargando..." }}</p>
                                <p class="detalle">Dificultad de Compra: Poco Probable</p>
                            </div>
                            <div class="div-btn-recarga">
                                <i class="fa-solid fa-rotate boton-recarga" @click="obtenerTasaEuro"></i>
                            </div>
                            <ModalNotificacion :open="mostrarModal" mensaje="Tasa Euro Actualizada"/>
                        </div>
                    </div>
                    <div class="circulo-flecha" @click="flechaDerecha = true; cambiarValorIndicador(); cambiarTasa()">
                        <i class="fa-solid fa-caret-right flecha"></i>
                    </div>
                </div>
                <div class="puntos">
                    <div class="punto-default"></div>
                    <div class="punto-activo"></div>
                    <div class="punto-default"></div>
                </div>
            </div>
            <div class="comprobacion" v-else-if="indicador === 3" key="3">
                <!--Seccion del Usdt-->
                <div class="titulo-superior">
                    <h1 class="titulo">Tasa USDT</h1>
                </div>
                <div class="fila-tarjeta">
                    <div class="circulo-flecha" @click="flechaIzquierda = true; cambiarValorIndicador(); cambiarTasa()">
                        <i class="fa-solid fa-caret-left flecha"></i>
                    </div>
                    <div class="tasa-usdt">
                        <div class="superior-tarjeta">
                            <h1 class="titulo-tarjeta">{{ tasaUsdt[1]?.promedio?.toFixed(2) }} Bs.</h1>
                            <h1 class="titulo-tarjeta">=</h1>
                            <h1 class="titulo-tarjeta">1₮</h1>
                        </div>
                        <p class="linea"></p>
                        <div class="inferior-tarjeta">
                            <div class="texto-inferior">
                                <p class="detalle">Moneda: {{ tasaUsdt[1]?.moneda || "Cargando..." }}</p>
                                <p class="detalle">Fecha de Actualización: {{ new Date(tasaUsdt[1]?.fechaActualizacion).toLocaleDateString('es-VE') || "Cargando..." }}</p>
                                <p class="detalle">Dificultad de Compra: Común</p>
                            </div>
                            <div class="div-btn-recarga">
                                <i class="fa-solid fa-rotate boton-recarga" @click="obtenerTasaUsdt"></i>
                            </div>
                            <ModalNotificacion :open="mostrarModal" mensaje="Tasa Usdt Actualizada"/>
                        </div>
                    </div>
                    <div class="circulo-desactivado">
                        <i class="fa-solid fa-caret-right flecha-desactivada"></i>
                    </div>
                </div>
                <div class="puntos">
                    <div class="punto-default"></div>
                    <div class="punto-default"></div>
                    <div class="punto-activo"></div>
                </div>
            </div>
        </Transition>
        <button v-if="indicador === 1" @click="registrarTasaBcv">Registrar Tasa Actual</button>
        <button v-else-if="indicador === 2" @click="registrarTasaEuro">Registrar Tasa Actual</button>
        <button v-else-if="indicador === 3" @click="registrarTasaUsdt">Registrar Tasa Actual</button>
        <ModalNotificacion :open="mostrarModalRegistro" :mensaje="mensajeRegistro"/>
    </div>
</template>

<style scoped>

.cuadro-principal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.comprobacion {
    width: 100%;
    display: flex;
    flex-direction: column;
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

.circulo-desactivado {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 60px;
    margin: 20px;
}

.flecha-desactivada {
    font-size: 25px;
    color: transparent;
}

.tasa-bcv, .tasa-euro, .tasa-usdt {
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

.slide-derecha-enter-active,
.slide-derecha-leave-active {
    transition: all 0.4s ease;
}

.slide-derecha-enter-from {
    transform: translateX(150px);
    opacity: 0;
}

.slide-derecha-leave-to {
    transform: translateX(-150px);
    opacity: 0;
}

.slide-izquierda-enter-active,
.slide-izquierda-leave-active {
    transition: all 0.4s ease;
}

.slide-izquierda-enter-from {
    transform: translateX(-150px);
    opacity: 0;
}

.slide-izquierda-leave-to {
    transform: translateX(150px);
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
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
}

.titulo {
    font-family: Google Sans;
    letter-spacing: 20px;
    font-size: 50px;
    font-weight: 100;
}

.fila-tarjeta {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.puntos{
    display: flex;
    flex-direction: row;
    padding: 20px;
}

.punto-activo {
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 100%;
    margin: 5px;
}

.punto-default {
    width: 10px;
    height: 10px;
    background-color: lightgray;
    border-radius: 100%;
    margin: 5px;
}

button {
    appearance: none;
    background-color: transparent;
    border: 0.125em solid #1A1A1A;
    border-radius: 0.9375em;
    box-sizing: border-box;
    color: #3B3B3B;
    cursor: pointer;
    display: inline-block;
    font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    min-height: 3.75em;
    min-width: 0;
    outline: none;
    padding: 1em 2.3em;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;
}

button:disabled {
    pointer-events: none;
}

button:hover {
    color: #fff;
    background-color: #1A1A1A;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
}

button:active {
    box-shadow: none;
    transform: translateY(0);
}
</style>