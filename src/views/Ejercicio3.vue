<script setup>
import { ref } from 'vue';
import axios from 'axios';

const sueldo = ref();
const mensajeError = ref("");

const calcularSueldo = async () => {
    try {
        const response = await axios.post(`https://localhost:7242/api/Ejercicio3?sueldo=${sueldo.value}`);
        sueldo.value = response.data;
    } catch (error) {
        if (error.response) {
            mensajeError.value = error.response.data;
            Swal.fire({
                icon: "error",
                title: "Monto inválido",
                text: "Ingrese un monto mayor a 0",
                customClass: {
                    popup: "alerta-dulce"
                }
            });
        } else {
            console.error("Error al calcular el sueldo: ", error);
        }
    }
}

</script>

<template>
    <div class="container">
        <div class="label-boton">
            <h1 class="titulo">Formulario Para Sueldo</h1>
            <div class="input-y-eso">
                <input type="number" class="ingreso" placeholder="Ingrese su sueldo" v-model="sueldo">
                <button class="boton" @click="calcularSueldo">Calcular Impuestos</button>
            </div>
            <div class="resultados">
                <div class="lado-izquierdo">
                    <p>Sueldo Base...</p>
                    <p>Fondo de Ahorro para la Vivienda...</p>
                    <p>Seguro Social...</p>
                    <p>Régimen Prestacional de Empleo...</p>
                    <p>Sueldo Neto...</p>
                </div>
                <div class="lado-derecho">
                    <p>...{{ sueldo?.sueldoInicial || 0 }} $</p>
                    <p>...{{ sueldo?.fondoAhorroObligatorio || 0 }} $</p>
                    <p>...{{ sueldo?.seguroSocialObligatorio || 0 }} $</p>
                    <p>...{{ sueldo?.regimenPrestacionalDeEmpleo || 0 }} $</p>
                    <p>...{{ sueldo?.sueldoFinal || 0 }} $</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.alerta-dulce {
    font-family: Google Sans;
}
</style>

<style scoped>

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url('../assets/Gemini_Generated_Image_chakxfchakxfchak.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

.label-boton {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 700px;
    height: 600px;
    flex-direction: column;
    gap: 50px;
    box-shadow: 6px 6px 10px black;
    background-color: white;
}

.boton {
    width: 100px;
    height: 50px;
    font-family: Google Sans;
}

.input-y-eso {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.ingreso {
    padding: 15px;
    width: 350px;
    height: 50px;
    font-size: 25px;
    font-family: Google Sans;
    box-shadow: inset 0px 0px 5px black;
}

.ingreso:focus {
    outline: none;
}

.titulo {
    font-family: Google Sans;
    font-weight: 100;
    font-size: 50px;
}

.resultados {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border: 1px solid black;
    box-shadow: inset 0px 0px 10px black;
    height: 250px;
    width: 500px;
}

.lado-derecho {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    width: 40%;
    padding: 20px;
    gap: 30px;
}

.lado-derecho p {
    font-family: Google Sans;
    color: grey;
    font-size: 15px;
}

.lado-izquierdo {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 60%;
    padding: 20px;
    gap: 30px;
}

.lado-izquierdo p {
    font-family: Google Sans;
    font-size: 15px;
}

</style>