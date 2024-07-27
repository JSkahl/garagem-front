<script setup>
import { useMonitor } from '@/composables/monitor.js';

const { menu } = useMonitor();
</script>

<template>
    <div>
        <component :is="menu"/>
        <main>
            <router-view /> 
        </main>
    </div>
</template>

<style scoped>
</style>