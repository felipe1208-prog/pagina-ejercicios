<script setup>
import { ref } from 'vue';
import axios from 'axios';

const empleado = ref("");
const busqueda = ref("");

const busquedaEmpleado = async () => {
    try {
        const response = await axios.get(`https://localhost:7242/api/Ejercicio4?termino=${busqueda.value}`)
        empleado.value = response.data.resultados;
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
        <div class="empleados">
            <div class="campo-seccion-empleados">
                <div class="titulo-seccion-empleados">
                    <div class="id-nombre">ID del Empleado</div>
                    <div class="id-nombre">Nombre y Apellido</div>
                </div>
                <div class="tabla-seccion-empleados">
                    <div class="linea-registro-empleado" v-for="(registro, index) in empleado" key="index">
                        <div class="cuadro-registro">{{ registro.id }}</div>
                        <div class="cuadro-registro">{{ registro.nombre }}</div>
                    </div>
                </div>
            </div>
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

.empleados {
    display: flex;
    justify-content: center;
    align-items: center;
}

.campo-seccion-empleados {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(32, 32, 32, 0.753);
    width: 90%;
    height: auto;
    border-radius: 10px;
    padding: 30px;
    margin-top: 30px;
}

.titulo-seccion-empleados {
    display: flex;
    align-items: center;
    width: 100%;
}

.id-nombre {
    font-family: Google Sans;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 40px;
    font-weight: 500;
    color: white;
}

.tabla-seccion-empleados {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    border: 5px solid green;
    width: 100%;
    border-radius: 5px;
    margin-top: 30px;
}

.linea-registro-empleado {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.cuadro-registro {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Google Sans;
    font-size: 30px;
    border: 1px solid black;
    width: 100%;
    height: 60px;
}

</style>