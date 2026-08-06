<script setup>
import { ref } from 'vue';
import axios from 'axios';

const empleado = ref("");
const busqueda = ref("");

const busquedaEmpleado = async () => {
    try {
        const response = await axios.get(`https://localhost:7242/api/Ejercicio4?termino=${busqueda.value}`)
        empleado.value = response.data;
    } catch (error) {
        if (error.response) {
            if (error.response.status === 404 || error.response.status === 400) {
                console.error(`Error ${error.response.status}: `, error);
            } else {
                console.error(`Error ${error.response.status}: `, error);
            }
        } else {
            console.error("Error al cargar los empleados: ", error);
        }
    }
}

</script>

<template>
    <div class="container">
        <div class="tituloo">
            <img class="logo" src="/assets/logo-insystech.png" alt="">
            <h1 class="titulo">Directorio Empleados Insystech</h1>
        </div>
        <div class="seccion-busqueda">
            <div class="cuadro-gris">
                <div class="espacio-boton">
                    <input v-model="busqueda" @input="busquedaEmpleado" type="text" placeholder="Lorem Ipsum..." class="input">
                    <button class="boton" @click="busquedaEmpleado">Buscar</button>
                </div>
                <p class="descripcion">Puedes filtrar por el nombre o el ID del empleado</p>
            </div>
        </div>
        <div v-for="(registro, index) in empleado" key="index">
            <h1>{{ empleado?.resultados }}</h1>
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: rgb(2, 2, 26);
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}

.tituloo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 30px;
    gap: 30px;
    margin-bottom: 20px;
}

.logo {
    height: 100px;
}

.titulo {
    color: white;
    font-family: Google Sans;
    font-size: 50px;
}

.seccion-busqueda {
    display: flex;
    justify-content: center;
    align-items: center;
}

.cuadro-gris {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(32, 32, 32, 0.753);
    width: 90%;
    height: 90px;
    border-radius: 10px;
    padding: 30px;
    gap: 30px;
}

.espacio-boton {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 5px;
    background-color: white;
    border-radius: 7px;
}

.boton {
    font-family: Google Sans;
    font-size: 20px;
    font-weight: bold;
    color: rgb(219, 215, 215);
    background-color: green;
    width: 100px;
    height: 45px;
    border-radius: 5px;
    border: none;
    transition: background-color 0.2s ease;
}

.boton:active {
    background-color: rgb(2, 71, 2);
}

.descripcion {
    font-family: Google Sans;
    color: white;
    font-size: 30px;
    letter-spacing: 1px;
}

.input {
    height: 45px;
    width: 350px;
    padding: 10px;
    font-size: 25px;
    font-family: Google Sans;
    border-radius: 5px;
    background-color: rgb(219, 215, 215);
    border: 1px solid rgba(128, 128, 128, 0.37);
    transition: box-shadow 0.1s ease;
}

.input:focus {
    outline: none;
    box-shadow: inset 0px 0px 5px black;
}

h1 {
    color: white;
}

</style>