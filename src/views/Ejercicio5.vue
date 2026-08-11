<script setup>
import { ref } from 'vue';
import axios from 'axios';

const mensaje = ref("");
const esError = ref(false);
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
        esError.value = false;
        mensaje.value = response.data.mensaje;
    } catch (error) {
            esError.value = true;
        if (error.response.data.errors) {
            mensaje.value = Object.values(error.response.data.errors)[0][0];
        } else if (error.response.data.mensaje) {
            mensaje.value = error.response.data.mensaje;
        } else {
            console.error("Error: ", error);
            mensaje.value = "Error al conectar con el servidor";
        }
    }
}
</script>

<template>

<div class="container">
    <div class="container-mensaje" :class="{ 'container-exito': !esError, 'container-error': esError }" v-if="mensaje">
        <h3 class="msj-error">{{ mensaje }}</h3>
    </div>
    <form class="form-control" action="" @submit.prevent="inicioSesion">
        <p class="title">Login</p>
        <div class="input-field">
            <input class="input" type="text" v-model="nombreUsuario"/>
            <label class="label" for="input">Nombre</label>
        </div>
        <div class="input-field">
            <input class="input" type="text" v-model="email"/>
            <label class="label" for="input">Correo Electrónico</label>
        </div>
        <div class="input-field">
            <input class="input" type="password" v-model="clave"/>
            <label class="label" for="input">Contraseña</label>
        </div>
        <button class="submit-btn">Inciar Sesión</button>
    </form>
</div>

</template>

<style scoped>

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    font-family: Google Sans;
}

.form-control {
    margin: 20px;
    background-color: #ffffff;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    width: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    padding: 40px;
    border-radius: 8px;
}
.title {
    font-size: 30px;
    font-weight: 800;
    font-family: Google Sans;
}
.input-field {
    position: relative;
    width: 100%;
}

.input {
    margin-top: 15px;
    width: 100%;
    outline: none;
    border-radius: 8px;
    height: 45px;
    border: 1.5px solid #ecedec;
    background: transparent;
    padding-left: 10px;
}
.input:focus {
    border: 1.5px solid #2d79f3;
}
.input-field .label {
    position: absolute;
    top: 25px;
    left: 15px;
    color: #ccc;
    transition: all 0.3s ease;
    pointer-events: none;
    z-index: 2;
}
.input-field .input:focus ~ .label,
.input-field .input:valid ~ .label {
    top: 5px;
    left: 5px;
    font-size: 12px;
    color: #2d79f3;
    background-color: #ffffff;
    padding-left: 5px;
    padding-right: 5px;
}
.submit-btn {
    margin-top: 30px;
    height: 55px;
    background: #f2f2f2;
    border-radius: 11px;
    border: 0;
    outline: none;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    background: linear-gradient(180deg, #363636 0%, #1b1b1b 50%, #000000 100%);
    box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #000000;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
    cursor: pointer;
}

.submit-btn:hover {
    box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #0000003a;
}

.container-mensaje {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    max-height: 100vh;
    width: 500px;
    padding: 25px;
}

.container-error {
    border: 3px dashed red;
    background-color: rgba(255, 0, 0, 0.075);
}

.container-error h3 {
    font-family: Google Sans;
    font-weight: bold;
    color: red;
}

.container-exito {
    border: 3px dashed green;
    background-color: rgba(0, 255, 0, 0.164);
}

.container-exito h3 {
    font-family: Google Sans;
    font-weight: bold;
    color: green;
}

</style>