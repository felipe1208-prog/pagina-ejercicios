<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const pokemon = ref(null);
const id = ref(0);
const mensaje = ref(null);

const BuscarPorId = async () => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id.value}`);
        pokemon.value = response.data
    } catch (error) {
        console.error("Error al cargar el pokemon: ", error);
    }
};

const BuscarPokemon = async () => {
    const numero = Math.trunc(Math.random() * (1026 - 1) + 1);
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${numero}`);
        pokemon.value = response.data;
    } catch (error) {
        console.error("Error al cargar el pokemon: ", error);
    }
};

const cargarBackend = async () => {
    try {
        const response = await axios.get("https://localhost:7242/api/Ejercicio1");
        mensaje.value = response.data;
    } catch (error) {
        console.error("Error al cargar: ", error)
    }
};

onMounted(() => {
    BuscarPokemon();
    cargarBackend();
});


</script>

<template>
    <div class="container-principal">    
        <div class="bloque-izquierdo">    
            <div class="contenido">
                <p class="mensaje-conexion" v-if="mensaje">{{ mensaje.msg }}</p>
                <p class="mensaje-conexion" v-else>Estamos trabajando para establecer la conexión</p>
                <div class="img-conexion">
                    <img src="/assets/fadding-cat.gif" alt="Gato bailando" class="imagen" v-if="mensaje">
                    <img src="/assets/gato.gif" alt="Gato trabajando" class="imagen" v-else>
                </div>
            </div>
        </div>
        <div class="bloque-pokemon">
            <div class="contenido" v-if="pokemon">
                <p class="mensaje-conexion">Tu pokemon es {{ pokemon.name }}</p>
                <div class="cuadro-pokemon">
                    <div class="imagen-pokemon" v-if="pokemon">
                        <img :src="pokemon.sprites.other['official-artwork'].front_default" alt="Imagen Pokemon" class="imagen">
                    </div>
                    <div class="detalles-pokemon" v-if="pokemon">
                        <ul class="lista-caracteristicas">
                            <li class="caracteristicas"><strong>ID</strong>: {{ pokemon.id }}</li>
                            <li class="caracteristicas"><strong>Tipo</strong>: {{ pokemon.types[0].type.name}}</li>
                            <li class="caracteristicas"><strong>Peso</strong>: {{ pokemon.weight / 10 }} Kg</li>
                            <li class="caracteristicas"><strong>Altura</strong>: {{ pokemon.height / 10 }} m</li>
                            <li class="caracteristicas"><strong>HP</strong>: {{ pokemon.stats[0].base_stat }}</li>
                            <li class="caracteristicas"><strong>ATK</strong>: {{ pokemon.stats[1].base_stat }}</li>
                        </ul>
                    </div>
                </div>
                <div class="botones">
                    <button @click="BuscarPokemon" class="generador-pokemon">Buscar Pókemon Aleatorio</button>
                    <div class="boton">
                        <input type="number" class="input" v-model="id">
                        <button class="generador-pokemon" @click="BuscarPorId">Send</button>
                    </div>
                </div>
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
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* align-items: center; */
    /* text-fit: grow; */
    width: 100vh;
    padding: 15px;
    margin: 10px;
    min-height: 500px;
    border-radius: 26px;
}

.img-conexion {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    height: 250px;
}

.imagen {
    border-radius: 5px;
}

.mensaje-conexion {
    text-align: center;
    font-weight: bold;
    font-size: 50px;
    font-family: Google Sans;
}

.imagen-pokemon {
    display: flex;
    justify-content: flex-start;
    height: 250px;
    border: 1px solid black;
    border-radius: 10px;
}

.cuadro-pokemon {
    display: flex;
    padding: 20px;
    padding-left: 30px;
    padding-right: 30px;
    height: 305px;
    justify-content: flex-start;
    gap: 40px;
}

.detalles-pokemon {
    display: flex;
    justify-content: center;
}

.lista-caracteristicas {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.caracteristicas {
    letter-spacing: 0.5px;
    font-family: Google Sans;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 25px;
}

.botones {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content:space-between;
    padding: 20px;
}

.boton {
    display: flex;
    gap: 10px;
}

.generador-pokemon {
    font-size: 25px;
    padding: 10px;
    border-radius: 10px;
    font-family: Google Sans;
}

.input {
    border-radius: 10px;
    padding-left: 10px;
    font-size: 25px;
    width: 100px;
}

</style>