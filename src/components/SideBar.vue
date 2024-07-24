<script setup>
</script>

<template>
    <div class="side-bar">
        <div class="logo">
            <img src="/logo.png" alt="Logo">
            <p>Garagem</p>
        </div>
        <div class="models">
            <p>Acessórios</p>
            <p>Categorias</p>
            <p>Cores</p>
            <p>Marcas</p>
            <p>Modelos</p>
            <p>Veículos</p>
        </div>
    </div>
</template>

<style scoped>

.side-bar {
    display: flex;
    flex-direction: column;
    background-color: aqua;
    width: 15%;
    height: 100vh;
}

.logo {
    display: flex;
    align-items: flex-end;
    font-size: 2em;
}

img {
    
    background-color: aliceblue;
    width: 20%;
}

.models {
    background-color: red;
    height: 30%;
    font-size: large;
}
</style>