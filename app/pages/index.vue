<script setup>
import { useBoardStore } from "../../stores/boardStore"

const boardStore = useBoardStore();
console.log(boardStore.board)
</script>

<template>
    <main>
        <h1>Hello from Nuxt3</h1>
        <pre>{{ boardStore.board }}</pre>
    </main>
</template>