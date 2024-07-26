<script setup>
import { ref } from 'vue'
import Menu from 'vue-material-design-icons/Menu.vue';
import { useScreen } from '@/composables/screen.js';

const { browserWidth, deviceWidth, isMobile } = useScreen();
const menuAberto = ref(false);

</script>

<template>
    <div class="header">
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
        <Menu v-if="isMobile" class="menu-hamburger" @click="menuAberto = !menuAberto" />

    </div>
        <div v-if="menuAberto" class="menu">
            <div class="models-mobile">
            <router-link class="link-mobile" to="/">Home</router-link>
            <router-link class="link-mobile" to="/acessorios">Acessórios</router-link>
            <router-link class="link-mobile" to="/categorias">Categorias</router-link>
            <router-link class="link-mobile" to="/cores">Cores</router-link>
            <router-link class="link-mobile" to="/modelos">Modelos</router-link>
            <router-link class="link-mobile" to="/veiculos">Veículos</router-link>
        </div>
        <div class="login-mobile">
            <router-link class="link-mobile" to="/login">Login</router-link>
        </div>
        </div>
</template>

<style scoped>

.header {
    display: flex;
    justify-content: space-between;
    height: 8vh;
    width: 100%;
    border-radius: 10px;
    box-shadow: black 3px 10px 12px;
}

.logo {
    display: flex;
    width: 15%;
    align-items: center;
    font-size: 2em;
}

img {
    width: 20%;
}

.models {
    display: flex;
    align-items: center;
    justify-content: space-between;
    display: flex;
    font-size: 1.4em;
    width: 35%;
}

.login {
    display: flex;
    align-items: center;
    font-size: 1.2em;
}

.link {
    text-decoration: none;
    color: inherit;
}

.link:hover {
    color: rgb(26, 26, 26);
}

.menu-hamburguer {
    display: none;
}

@media (max-width: 768px) {
    .models, .login {
        display: none;
    }

    .logo > p {
        display: none;
    }

    .menu {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 10px;
        height: 89vh;
        margin-top: 2%;
        background-color: rgb(230, 230, 230);
        box-shadow: black 1px 1px 6px;
        font-size: 1.5rem;
    }

    .models-mobile {
        display: flex;
        flex-direction: column;
        margin-top: 3%;
        margin-left: 3%;
    }
    
    .link-mobile {
        text-decoration: none;
        color: inherit;
    }

    .link-mobile:hover {
        color: rgb(26, 26, 26);
    }

    .login-mobile {
        margin: 0 0 3% 3%
    }

    img {
        width: 20vw;
    }
}
</style>