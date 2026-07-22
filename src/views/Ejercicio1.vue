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
                    <button class="generador-pokemon" @click="BuscarPokemon">
                        <div class="pokemon-outer">
                            <div class="inner">
                                <span>Buscar Pókemon Aleatorio</span>
                            </div>
                        </div>
                    </button>
                    <div class="boton">
                        <input type="text" class="input" v-model="id">
                        
                        <button class="generador-pokemon" @click="BuscarPorId">
                            <div class="pokemon-outer">
                                <div class="inner">
                                    <span>Send</span>
                                </div>
                            </div>
                        </button>
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
    background: #e0e0e0;
    box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
}

.img-conexion {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    height: 250px;
}

.imagen {
    border-radius: 5px;
    background: #e0e0e0;
    border-radius: 10px;
    box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
    padding: 5px;
}

.mensaje-conexion {
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.288);
    padding-bottom: 10px;
    padding-top: 10px;
    text-align: center;
    font-weight: bold;
    font-size: 50px;
    font-family: Google Sans;
}

.imagen-pokemon {
    display: flex;
    justify-content: flex-start;
    height: 250px;
    background: #e0e0e0;
    border-radius: 10px;
    box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
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

/* From Uiverse.io by FColombati */ 
.generador-pokemon {
    all: unset;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    position: relative;
    border-radius: 100em;
    background-color: rgba(0, 0, 0, 0.75);
    box-shadow:
    -0.15em -0.15em 0.15em -0.075em rgba(5, 5, 5, 0.25),
    0.0375em 0.0375em 0.0675em 0 rgba(5, 5, 5, 0.1);
}

.generador-pokemon::after {
    content: "";
    position: absolute;
    z-index: 0;
    width: calc(100% + 0.3em);
    height: calc(100% + 0.3em);
    top: -0.15em;
    left: -0.15em;
    border-radius: inherit;
    background: linear-gradient(
        -135deg,
        rgba(5, 5, 5, 0.5),
        transparent 20%,
        transparent 100%
    );
    filter: blur(0.0125em);
    opacity: 0.25;
    mix-blend-mode: multiply;
}

.generador-pokemon .pokemon-outer {
    position: relative;
    z-index: 1;
    border-radius: inherit;
    transition: box-shadow 300ms ease;
    will-change: box-shadow;
    box-shadow:
    0 0.05em 0.05em -0.01em rgba(5, 5, 5, 1),
    0 0.01em 0.01em -0.01em rgba(5, 5, 5, 0.5),
    0.15em 0.3em 0.1em -0.01em rgba(5, 5, 5, 0.25);
}

.generador-pokemon:hover .pokemon-outer {
    box-shadow:
    0 0 0 0 rgba(5, 5, 5, 1),
    0 0 0 0 rgba(5, 5, 5, 0.5),
    0 0 0 0 rgba(5, 5, 5, 0.25);
}

.inner {
    --inset: 0.035em;
    position: relative;
    z-index: 1;
    border-radius: inherit;
    padding: 1em 1.5em;
    background-image: linear-gradient(
        135deg,
        rgba(230, 230, 230, 1),
        rgba(180, 180, 180, 1)
    );
    transition:
    box-shadow 300ms ease,
    clip-path 250ms ease,
    background-image 250ms ease,
    transform 250ms ease;
    will-change: box-shadow, clip-path, background-image, transform;
    overflow: clip;
    clip-path: inset(0 0 0 0 round 100em);
    box-shadow:
        /* 1 */
    0 0 0 0 inset rgba(5, 5, 5, 0.1),
    /* 2 */ -0.05em -0.05em 0.05em 0 inset rgba(5, 5, 5, 0.25),
    /* 3 */ 0 0 0 0 inset rgba(5, 5, 5, 0.1),
    /* 4 */ 0 0 0.05em 0.2em inset rgba(255, 255, 255, 0.25),
    /* 5 */ 0.025em 0.05em 0.1em 0 inset rgba(255, 255, 255, 1),
    /* 6 */ 0.12em 0.12em 0.12em inset rgba(255, 255, 255, 0.25),
    /* 7 */ -0.075em -0.25em 0.25em 0.1em inset rgba(5, 5, 5, 0.25);
}

.generador-pokemon:hover .inner {
    clip-path: inset(
    clamp(1px, 0.0625em, 2px) clamp(1px, 0.0625em, 2px)
        clamp(1px, 0.0625em, 2px) clamp(1px, 0.0625em, 2px) round 100em
    );
    box-shadow:
        /* 1 */
    0.1em 0.15em 0.05em 0 inset rgba(5, 5, 5, 0.75),
    /* 2 */ -0.025em -0.03em 0.05em 0.025em inset rgba(5, 5, 5, 0.5),
    /* 3 */ 0.25em 0.25em 0.2em 0 inset rgba(5, 5, 5, 0.5),
    /* 4 */ 0 0 0.05em 0.5em inset rgba(255, 255, 255, 0.15),
    /* 5 */ 0 0 0 0 inset rgba(255, 255, 255, 1),
    /* 6 */ 0.12em 0.12em 0.12em inset rgba(255, 255, 255, 0.25),
    /* 7 */ -0.075em -0.12em 0.2em 0.1em inset rgba(5, 5, 5, 0.25);
}

.generador-pokemon .inner span {
    position: relative;
    z-index: 4;
    font-family: Google Sans;
    letter-spacing: -0.05em;
    font-weight: 500;
    color: rgba(0, 0, 0, 0);
    background-image: linear-gradient(
        135deg,
        rgba(25, 25, 25, 1),
        rgba(75, 75, 75, 1)
    );
    -webkit-background-clip: text;
    background-clip: text;
    transition: transform 250ms ease;
    display: block;
    will-change: transform;
    text-shadow: rgba(0, 0, 0, 0.1) 0 0 0.1em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.generador-pokemon:hover .inner span {
    transform: scale(0.975);
}

.generador-pokemon:active .inner {
    transform: scale(0.975);
}

.input {
    border: 1px solid rgba(119, 136, 153, 0.11);
    padding: 1rem;
    border-radius: 1rem;
    background: #e8e8e8;
    box-shadow: inset 5px 5px 10px #c5c5c5,
        inset -5px -5px 10px #ffffff;
    transition: box-shadow 0.5s ease;
    font-size: 15px;
    width: 100px;
    font-family: Google Sans;
}

.input:hover {
    box-shadow: inset 5px 5px 10px #c5c5c5,
            inset -5px -5px 10px #ffffff;
}

.input:focus {
    outline: none;
}

</style>