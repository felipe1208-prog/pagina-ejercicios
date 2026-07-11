<script setup>
defineProps({
    titulo: {
        type: String,
        required: true
    },
})
</script>

<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap" rel="stylesheet">
    <div class="cabecera">
        <h1>{{ titulo }}</h1>
    </div>
</template>

<style scoped>

.cabecera h1 {
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.158);
    font-family: Google Sans;
    font-weight: 700;
    font-size: 150px;
    background-image: linear-gradient(var(--angle), rgb(245, 241, 21), rgb(0, 4, 255));
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: move 4s linear alternate infinite;
    text-align: center;
    font-size: 100px;
    letter-spacing: -1px;
    padding: 40px;
    padding-top: 30px;
    padding-bottom: 30px;
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

.cabecera {
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>