<script setup>
defineProps({
    enlaces: {
        type: Array,
        required: true
    }
});
</script>

<template>
    <nav class="navegacion">
        <img src="/assets/cat-mew.gif" alt="Gato pro" class="gato-pro"/>
        <router-link v-for="link in enlaces" :key="link.ruta" :to="link.ruta" class="nav-btn">{{ link.nombre }}</router-link>
    </nav>

</template>

<style scoped>
.navegacion {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-height: 100vh;
    width: 250px;
    justify-content: flex-start;
    background-color: #f0f0f0;
    box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.382);
}

.gato-pro {
    height: 120px;
}

.nav-btn {
    display: flex;
    align-items: center;
    height: 70px;
    font-size: 30px;
    font-family: Google Sans;
    text-decoration: none;
    font-weight: bold;
    color: #333;
    padding: 10px 15px;
    transition: all 0.3s ease;
}

.router-link-active {
    background-color: green;
}

.nav-btn:hover {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.359);
}
</style>