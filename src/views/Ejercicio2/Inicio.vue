<script setup>
</script>

<template>
    <div class="cuadro-principal">
        <div class="circulo-flecha">
            <i class="fa-solid fa-caret-left flecha"></i>
        </div>
        <div class="tasas">
            <h1>Soy la vista de inicio</h1>
        </div>
        <div class="circulo-flecha">
            <i class="fa-solid fa-caret-right flecha"></i>
        </div>
    </div>
</template>

<style scoped>

.cuadro-principal {
    display: flex;
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

.tasas {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    min-height: 400px;
    width: 700px;
    border-radius: 30px;
}

h1 {
    font-family: Google Sans;
    font-size: 50px;
}
</style>