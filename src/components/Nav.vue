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
        <router-link v-for="link in enlaces" :key="link.ruta" :to="link.ruta" class="nav-btn">{{ link.nombre }}</router-link>
    </nav>

</template>

<style scoped>
.navegacion {
    display: flex;
    gap: 20px;
    justify-content: center;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
}

.nav-btn {
    text-decoration: none;
    font-weight: bold;
    color: #333;
    padding: 10px 15px;
}

/* El estilo dinámico cuando la ruta está activa */
.router-link-active {
    color: #42b883; 
    border-bottom: 2px solid #42b883;
}
</style>