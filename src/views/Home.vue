<script setup>
import Titulo from '../components/Titulo.vue';
import { ref } from 'vue';
import TarjetaEjercicio from '../components/TarjetaEjercicio.vue';

const listaTarjetasEjercicios = ref([
    {
        id: "1",
        descripcion: "Conectar ASP.NET Core (C#) con Vue.js y configurar Politicas CORS en Program.cs",
        url: "/ejercicio1",
        resumen: "SETUP y CORS",
        img: "../assets/cap1.png"
    },
    {
        id: "2",
        descripcion: "Endpoint GET que devuelva JSON con tasa de cambio (USD, EUR). Consumir en onMounted y mostrar tarjetas reactivas",
        url: "/ejercicio2",
        resumen: "WIDGET FINANCIERO",
        img: "../assets/fotoo.jpeg"
    },
    {
        id: "3",
        descripcion: "Endpoint POST que reciba sueldo bruto, deduzca impuestos y devuelva neto. Formulario de ingreso de sueldo e impresión del recibo dinámico",
        url: "nohay",
        resumen: "NÓMINA (LÓGICA)",
        img: "../assets/fotoo.jpeg"
    },
    {
        id: "4",
        descripcion: "Endpoint GET con parámetro. Filtrar lista usando .Where(). Input que dispara búsquedas al teclear y renderiza empleados.",
        url: "nohay",
        resumen: "DIRECTORIO",
        img: "../assets/fotoo.jpeg"
    },
    {
        id: "5",
        descripcion: "Proteger DTO con [Required] y [EmailAddress]. Manejar HTTP 400 y mostrar textos en rojo",
        url: "nohay",
        resumen: "ERRORES",
        img: "../assets/fotoo.jpeg"
    },
    {
        id: "6",
        descripcion: "Add-Migration para tabla Activos. Endpoints completos. DataGrid para listar, editar y eliminar activos",
        url: "nohay",
        resumen: "INVENTARIO TI (CRUD)",
        img: "../assets/fotoo.jpeg"
    },
    {
        id: "7",
        descripcion: "Insertar cabecera y detalle en BD en una transacción. Carrito que acumula items y envía JSON estructurado",
        url: "nohay",
        resumen: "FACTURACIÓN (1:N)",
        img: "../assets/fotoo.jpeg"
    },
    {
        id: "8",
        descripcion: "Aplicar .AsNoTracking() , .Skip() y .Take(). Tabla con botones llamando bloques de datos",
        url: "nohay",
        resumen: "REPORTE PAGINADO",
        img: "../assets/fotoo.jpeg"
    },
    {
        id: "9",
        descripcion: "Recibir imagen, guardarla en carpeta y ruta en BD. Enviar form con FormData para binarios",
        url: "nohay",
        resumen: "MESA AYUDA",
        img: "../assets/fotoo.jpeg"
    },
    {
        id: "10",
        descripcion: "Interceptar errores globales y devolver JSON (Status 500). Interceptores globales para mostrar Toast de error",
        url: "nohay",
        resumen: "MIDDLEWARE ERROR",
        img: "../assets/fotoo.jpeg"
    },
    {
        id: "11",
        descripcion: "Validar login en BD y emitir Token JWT. Guardar Token e inyectar en headers HTTP",
        url: "nohay",
        resumen: "AUTH JWT",
        img: "../assets/fotoo.jpeg"
    },
    {
        id: "12",
        descripcion: "Restringir endpoint con [Authorize(Roles='Gerente')]. Ocultar botón condicionalmente (v-if) según token",
        url: "nohay",
        resumen: "APROBACIONES (ROL)",
        img: "../assets/fotoo.jpeg"
    },
    {
        id: "13",
        descripcion: "Sobrescribir SaveChangesAsync para estampar fecha/usuario.",
        url: "nohay",
        resumen: "AUDITORÍA EF CORE",
        img: "../assets/fotoo.jpeg"
    },
    {
        id: "14",
        descripcion: "Emitir alertas en vivo con Hub SignalR. Escuchar web-sockets y actualizar interfaz",
        url: "nohay",
        resumen: "MONITOR SIGNALR",
        img: "../assets/fotoo.jpeg"
    },
    {
        id: "15",
        descripcion: "Publicar API desde Visual Studio. Compilar frontend ( npm run build )",
        url: "nohay",
        resumen: "DESPLIEGUE IIS",
        img: "../assets/fotoo.jpeg"
    },
    ])
</script>

<template>
    <div class="container">
        <div class="titulo-principal">
        <Titulo titulo="EJERCICIOS INSYSTECH"/>
        </div>
        <div class="bloque">
            <TarjetaEjercicio v-for="info in listaTarjetasEjercicios" :key="info.id" :ejercicio="'Ejercicio ' + info.id" :descripcion="info.descripcion" :url="info.url" :resumen="info.resumen" :img="info.img"></TarjetaEjercicio>
        </div>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    text-align: center;
    background:  
        linear-gradient(rgba(0, 0, 0, 0.226), rgba(0, 0, 0, 0.336)),
        url('/assets/foto2.jpeg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
    padding-top: 15px;
    }

.bloque {
    text-align: center;
    justify-content: center;
    display: grid;
    justify-items: center;
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
