<script lang="ts" setup>
defineProps<{
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

const toast = useToast()

function sendMessage() {
  toast.add({
    title: ' 「' + model.value + '」送信中',
    description: 'There was a problem with your request.',
    icon: 'i-lucide-smile'
  })
  // handleSubmit()

  // テキスト入力をキャンセルさせる
  return true
}
</script>

<template>
  <div class="flex items-start p-3.5 relative">
    <UTextarea
      v-model="model"
      placeholder="Ask a question about this document..."
      class="w-full"
      :rows="1"
      :maxrows="10"
      autoresize
      :autofocus-delay="1"
      variant="subtle"
      size="xl"
      @keydown.enter.shift="sendMessage"
    />

    <UButton
      size="sm"
      icon="i-heroicons-arrow-up-20-solid"
      class="absolute top-5 right-5"
      :disabled="!model"
      @click="sendMessage"
    />
  </div>
</template>