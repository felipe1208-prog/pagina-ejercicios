<script setup>
defineProps({
    ejercicio: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    resumen: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="card">
        <div class="cabecera">
            <h3>{{ ejercicio }}</h3>
        </div>
        <figure>
            <div class="cuadro">
                <img :src=img alt="Pendiente de imagen">
                <div class="texto">{{ descripcion }}</div>
            </div>
        </figure>
        <div class="contenido">
            <router-link class="boton" :to=url>Visualizar Resultado</router-link>
            <div class="texto2">{{ resumen }}</div>
        </div>
    </div>
</template>

<style scoped>

.card {
    width: 100%;
    height: 450px;
    margin: 20px;
    border-radius: 10px;
    overflow: hidden;
    backdrop-filter: blur(8px);
    box-shadow: inset 0px 1px 10px rgba(255, 255, 255, 0.2);
    cursor: default;
    transition: all 400ms ease;
}

.card:hover {
    box-shadow: inset 0px 10px 154px rgba(255, 255, 255, 0.219);
    transform: translateY(-3%);
}

.card .contenido {
    padding: 15px;
    text-align: center;
    background-color: transparent;
    border-radius: 30px;
    width: 95%;
    height: 150px;
    margin: auto;
    margin-bottom: 10px;
}

.cuadro {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 10px;
}

.texto2 {
    font-family: Google Sans;
    line-height: 1.5;
    font-weight: 700;
    letter-spacing: 0px;
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 25px;
    font-size: 30px;
    text-shadow: 0px 1px 2px rgba(230, 230, 230, 0.699);
    background-image: linear-gradient(var(--angle), rgba(34, 34, 34, 0.993), rgb(233, 233, 233));
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: move 2s linear alternate infinite;
}

@keyframes move {
    0% { --angle: 0.25turn }
    100% { --angle: 0.75turn }
}

@property --angle {
    syntax: "<angle>";
    inherits: false;
    initial-value: 0turn;
}

.texto {
    font-family: Google Sans;
    line-height: 1.5;
    font-weight: 500;
    letter-spacing: -1px;
    color: #6a6a6a;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 400ms ease;
    font-size: 20px;
    text-align: center;
    align-items: center;
    display: flex;
    width: 90.10%;
    height: 84.70%;
    border-radius: 6px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-top: 20px;
    margin-top: 0.2px;
    margin-left: 0.125px;
}

.texto:hover {
    opacity: 1;
    color: rgb(255, 255, 255);
    text-shadow: 0px 2px 3px black;
    background-color: #5b5a5a85;
    backdrop-filter: blur(2px);
    box-shadow: 0px 0px 5px #ffffff85;
    box-sizing: inset 0px 0px 10px black;
}

.card img {
    width: 95%;
    height: 210px;
    border-radius: 6px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
}

.cabecera {
    font-family: Google Sans;
    font-weight: bold;
    letter-spacing: 0px;
    font-size: 35px;
    margin-top: 20px;
    color: rgb(204, 204, 204);
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.644);
}

.boton {
    font-family: Google Sans;
    font-weight: bold;
    text-decoration: none;
    padding: 10px;
    color: rgb(255, 255, 255);
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.144);
    border-radius: 15px;
    transition: all 400ms ease;
    padding: 15px 15px 15px 15px;
}

.boton:hover {
    background-color: rgba(255, 255, 255, 0.226);
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.678);
    box-shadow: inset 0px 0px 5px rgba(255, 255, 255, 0.61);
}
</style>