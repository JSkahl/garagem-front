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
        <div class="login">
            <p>Login</p>
        </div>
    </div>
</template>

<style scoped>

.side-bar {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 15%;
    border-radius: 10px;
    box-shadow: black 3px 10px 12px;
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
    display: flex;
    flex-direction: column;
    margin-top: 20%;
    margin-left: 4%;
    height: 100%;
    font-size: 1.4em;
}

.models > p {
    margin-top: 2%;
}

.login {
    display: flex;
    margin-left: 4%;
    font-size: 1.2em;
}
</style>