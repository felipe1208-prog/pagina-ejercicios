<script setup>
import Titulo from './components/Titulo.vue';
import TarjetaEjercicio from './components/TarjetaEjercicio.vue';
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap" rel="stylesheet">
  <header>
  </header>
  <body>
    <div class="titulo-principal">
      <Titulo titulo="EJERCICIOS INSYSTECH"/>
    </div>
    <div class="bloque">
      <TarjetaEjercicio ejercicio="Ejercicio 1" descripcion="Conectar ASP.NET Core (C#) con Vue.js y configurar CORS" url=no hay link resumen="SETUP y CORS"></TarjetaEjercicio>
      <TarjetaEjercicio ejercicio="Ejercicio 2" descripcion="Conectar ASP.NET Core (C#) con Vue.js y configurar CORS" url=no hay link resumen="SETUP y CORS"></TarjetaEjercicio>
      <TarjetaEjercicio ejercicio="Ejercicio 1" descripcion="Conectar ASP.NET Core (C#) con Vue.js y configurar CORS" url=link resumen="SETUP y CORS"></TarjetaEjercicio>
      <TarjetaEjercicio ejercicio="Ejercicio 1" descripcion="Conectar ASP.NET Core (C#) con Vue.js y configurar CORS" url=link resumen="SETUP y CORS"></TarjetaEjercicio>
    </div>
  </body>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  text-align: center;
  vertical-align: center;
  justify-content: center;
  background:  
    linear-gradient(rgba(0, 0, 0, 0.445), rgba(0, 0, 0, 0.39)),
    url('/assets/foto2.jpeg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.bloque {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  gap: 20px;
  max-width: 1200px;
}

.titulo-principal {
  margin: 0 auto;
  justify-content: center;
  max-width: 1250px;
  align-items: center;
  margin-top: 15px;
  border-radius: 45px;
  box-shadow: inset 0px 0px 20px rgba(185, 185, 185, 0.61);
  backdrop-filter: blur(8px);
}
</style>
