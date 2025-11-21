<script setup>
import { useBoardStore } from "../../stores/boardStore";

const boardStore = useBoardStore();
const { board } = boardStore;

const newColumn = ref("");
const editingItemId = ref(null);

function handleEdit(id) {
  editingItemId.value = id
}

function handleAddNewColumn() {
  board.columns.push({
    name: newColumn.value,
    tasks: [],
    id: Date.now(),
  });
  newColumn.value = "";
}
</script>

<template>
  <main class="h-screen w-screen bg-emerald-500 pt-4">
    <UContainer
      class="flex flex-row overflow-scroll items-start gap-4 bg-emerald-500 m-0 max-w-auto h-full"
    >
      <Column
        v-for="column in board.columns"
        :key="column.id"
        :column="column"
        @isEditing="(id) => handleEdit(id)"
        :editingItemId="editingItemId"
      />
      <div class="bg-gray-200 p-4 rounded-lg h-max flex-1 min-w-xs">
        <UInput
          type="text"
          placeholder="Add New Column"
          icon="i-heroicons-plus-circle-solid"
          class="w-full"
          @keyup.enter="handleAddNewColumn"
          v-model="newColumn"
        />
      </div>
    </UContainer>
  </main>
</template>
