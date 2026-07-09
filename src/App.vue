<script setup>
import Titulo from './components/Titulo.vue';
import TarjetaEjercicio from './components/TarjetaEjercicio.vue';
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap" rel="stylesheet">
  <header>
    <Titulo titulo="EJERCICIOS INSYSTECH"/>
  </header>
  <body>
    <TarjetaEjercicio ejercicio="Ejercicio 1 -  SETUP y CORS" descripcion="Conectar ASP.NET Core (C#) con Vue.js y configurar CORS" url=no hay link dificultad="facil"></TarjetaEjercicio>
    <TarjetaEjercicio ejercicio="Ejercicio 2 -" descripcion="Conectar ASP.NET Core (C#) con Vue.js y configurar CORS" url=no hay link dificultad="facil"></TarjetaEjercicio>
    <TarjetaEjercicio ejercicio="Ejercicio 1" descripcion="Conectar ASP.NET Core (C#) con Vue.js y configurar CORS" url=link dificultad="facil"></TarjetaEjercicio>
  </body>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
}
</style>
