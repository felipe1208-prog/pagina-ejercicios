<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

// https://pokeapi.co/api/v2/pokemon/{id o nombre} Endpoint de la PokeAPI, hacer que se pueda buscar cualquier pokemon y mostrar todos sus detalles junto con su foto y nombre.

const mensaje = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get("https://localhost:7242/api/Ejercicio1");
        mensaje.value = response.data;
    } catch (error) {
        console.error("Error al cargar: ", error)
    }
});

</script>

<template>
    <div class="container-principal">    
        <div class="bloque-izquierdo">    
            <div class="contenido">
                <p class="mensaje-conexion" v-if="mensaje">{{ mensaje.msg }}</p>
                <p class="mensaje-conexion" v-else>No se ha podido establecer conexión</p>
            </div>
        </div>
        <div class="bloque-pokemon">
            <div class="contenido">
                <p>Aqui van a ir los pokemons</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.container-principal {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.contenido {
    border: 1px solid black;
    padding: 100px;
    margin: 10px;
    text-fit: grow;
    width: 100vh;
}

.mensaje-conexion {
    font-family: Google Sans;
}

</style>