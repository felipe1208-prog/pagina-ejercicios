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
    dificultad: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="container">
        <div class="cabecera">
            <h3>{{ ejercicio }}</h3>
        </div>
        <div class="card">
            <figure>
                <div class="cuadro">
                    <img src="/assets/foto.png" alt="Pendiente de imagen">
                    <div class="texto">{{ descripcion }}</div>
                </div>
            </figure>
            <div class="contenido">
                <a href=url>Visualizar Resultado</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    display: flex;
    max-width: 500px;
}

.card {
    width: 100%;
    margin: 20px;
    border-radius: 6px;
    overflow: hidden;
    background-image: linear-gradient(150deg, rgb(0, 255, 128), rgba(35, 255, 108, 0.404));
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
    cursor: default;
    transition: all 400ms ease;
}

.card:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.4);
    transform: translateY(-3%);
}


.card .contenido {
    padding: 15px;
    text-align: center;
    background-color: rgb(255, 255, 255);
    border-radius: 30px;
    width: 95%;
    height: 150px;
    margin: auto;
    margin-bottom: 10px;
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.596);
}

.cuadro {
    position: relative;
    text-align: center;
}

.texto {
    font-family: Google Sans;
    line-height: 1.5;
    font-weight: lighter;
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
    width: 95.3%;
    height: 90%;
    border-radius: 6px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-top: 20px;
    margin-top: -1.5px;
}

.texto:hover {
    opacity: 1;
    color: rgb(255, 255, 255);
    text-shadow: 0px 2px 3px black;
    background-color: #ffffff85;
    backdrop-filter: blur(2px);
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

.container .cabecera h3 {
    font-family: Google Sans;
    font-weight: bold;
    letter-spacing: 0px;
    font-size: 25px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.card .contenido a {
    font-family: Google Sans;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    padding: 10px;
    margin-top: 5px;
    color: rgb(255, 255, 255);
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.144);
    box-shadow: inset 0px 0px 5px rgba(255, 255, 255, 0.37);
    background-image: linear-gradient(150deg, rgb(0, 255, 128), rgba(35, 255, 108, 0.404));
    border-radius: 15px;
    transition: all 400ms ease;
}

.card .contenido a:hover {
    background-image: linear-gradient(150deg, rgba(35, 255, 108, 0.404), rgb(0, 255, 128));
}
</style>