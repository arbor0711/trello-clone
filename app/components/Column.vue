<script setup>
import { useBoardStore } from "../../stores/boardStore";

defineProps({
  column: {
    type: Object,
    required: true,
  },
  editingItemId: {
    type: [Number, null],
    required: true,
  }
});

const emit = defineEmits(['isEditing'])

const boardStore = useBoardStore();
const { handleDeleteColumn } = boardStore;

const input = ref();

function handleEditColumn(id) {
  emit('isEditing', id)
  nextTick(() => {
    const input = document.getElementById('input')
      input.focus()
  })
}

function handleSaveColumn() {
  emit('isEditing', null)
}
</script>

<template>
  <section class="bg-gray-200 px-4 pt-4 rounded-lg h-max flex-1 min-w-xs">
    <div class="flex justify-between mb-4">
      <UInput
        v-if="editingItemId === column.id"
        v-model="column.name"
        @keyup.enter="handleSaveColumn"
        :key="column.id"
        ref="input"
        id="input"
      />
      <h2 v-else class="font-bold">{{ column.name.toUpperCase() }}</h2>
      <div class="flex gap-1">
        <UButton
          icon="i-heroicons-pencil-square"
          color="info"
          @click="handleEditColumn(column.id)"
          :disabled="!!editingItemId"
        />
        <UButton
          icon="i-heroicons-trash"
          color="error"
          @click="handleDeleteColumn(column.id)"
        />
      </div>
    </div>
    <ul>
      <li v-for="task in column.tasks" :key="task.id" class="mb-4">
        <UCard>
          <strong>{{ task.name }}</strong>
          <p>{{ task.description }}</p>
        </UCard>
      </li>
    </ul>
  </section>
</template>
