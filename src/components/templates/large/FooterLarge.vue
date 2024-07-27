<script setup>
</script>

<template>
    <footer>
        <div class="footer">
            <div class="links">
                <router-link class="infos" to="/">Help</router-link>
                <router-link class="infos" to="/">Contact Us</router-link>
                <router-link class="infos" to="/">Privacy & Terms</router-link>
            </div>
        </div>
    </footer>
</template>

<style scoped="">
.footer {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0%;
    background-color: rgb(230, 230, 230);
    border-radius: 10px;
    width: 99.2%;
    height: 8vh;
}

.links {
    display: flex;
    width: 30%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    font-size: 1.2rem;
}

.infos {
    color: inherit;
    text-decoration: none;
}
</style>