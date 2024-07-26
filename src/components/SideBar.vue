<script setup>
</script>

<template>
    <div class="side-bar">
        <div class="logo">
            <img src="/logo.png" alt="Logo">
            <p>Garagem</p>
        </div>
        <div class="models">
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/acessorios">Acessórios</router-link>
            <router-link class="link" to="/categorias">Categorias</router-link>
            <router-link class="link" to="/cores">Cores</router-link>
            <router-link class="link" to="/modelos">Modelos</router-link>
            <router-link class="link" to="/veiculos">Veículos</router-link>
        </div>
        <div class="login">
            <router-link class="link" to="/login">Login</router-link>
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

.login {
    display: flex;
    margin-left: 4%;
    font-size: 1.2em;
}

.link {
    text-decoration: none;
    color: inherit;
}

.link:hover {
    color: rgb(26, 26, 26);
}
</style>