<script setup>
import { useBoardStore } from "../../stores/boardStore";

const boardStore = useBoardStore();
const { board } = boardStore;
</script>

<template>
  <main class="h-screen w-screen bg-emerald-500 p-4">
    <UContainer class="flex flex-row items-start gap-4 bg-emerald-500">
      <ul
        v-for="column in board.columns"
        key="column.name"
        class="bg-gray-50 px-4 pt-4 rounded-lg h-max flex-1"
      >
        <h2 class="font-bold bg-gray-200 p-4 rounded-lg mb-4">{{ column.name.toUpperCase() }}</h2>
        <li>
          <UCard v-for="task in column.tasks" key="task.id" class="mb-4">
            <strong>{{ task.name }}</strong>
            <p>{{ task.description }}</p>
          </UCard>
        </li>
      </ul>
    </UContainer>
  </main>
</template>
