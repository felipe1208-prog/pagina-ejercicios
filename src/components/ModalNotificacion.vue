<script setup>
defineProps(
    {
        open: {
            required: true,
            type: Boolean
        },
        mensaje: {
            required: true,
            type: String
        }
    }
);
</script>

<template>
    <Teleport to="body">
        <Transition name="toast">
            <div v-if="open" class="modal">
                {{ mensaje }}
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>

.modal {
    height: auto;
    width: auto;
    font-family: Google Sans;
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 9999;
    background-color: rgba(211, 210, 210, 0.76);
    padding: 20px;
    border-radius: 20px;
    border: 1px solid rgba(43, 43, 43, 0.144);;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.363);
}

.toast-enter-active,
.toast-leave-active {
    transition: all 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
    transform: translateY(50px);
    opacity: 0;
}

</style>