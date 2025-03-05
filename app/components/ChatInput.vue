<script lang="ts" setup>
defineProps<{
  loading: boolean,
  handleSubmit: any
 }>()

 const model = defineModel()

// const props = defineProps<{
//   message: string
// }>()

// const message = ref('')
// const emit = defineEmits<{ message: [message: string] }>()

// const sendMessage = () => {
//   if (!message.value.trim()) return
//   emit('message', message.value)
//   message.value = ''
// }
</script>

<template>
  <div class="flex items-start p-3.5 relative">
    <UTextarea
      v-model="model"
      placeholder="Ask a question about this document..."
      class="w-full"
      :ui="{ base: ['pr-11'] }"
      :rows="1"
      :maxrows="5"
      :disabled="loading"
      autoresize
      size="xl"
      @keydown.enter.shift="handleSubmit"
    />

    <UButton
      size="sm"
      icon="i-heroicons-arrow-up-20-solid"
      class="absolute top-5 right-5"
      :disabled="loading "
      @click="handleSubmit"
    />
  </div>
</template>