<script lang="ts" setup>
const prop =
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
  prop.handleSubmit()
}

// function keyDownEnter(e: any) {
//   console.log(e.keyCode)
//   // this.keyDownCode = e.keyCode //enterを押した時のkeycodeを記録
//   e.preventDefault()
// }
// function keyUpEnter(e: any) {
//   if (this.keyDownCode === 229) { //229コードの場合は処理をストップ
//     return
//   }
//   e.preventDefault()
//   console.log(e.keyCode)
//   sendMessage()
// }
function keyEnterShift(e: any) {
  console.log('shift,enter')
  e.preventDefault()
  console.log(e.keyCode)
  sendMessage()
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
      @keydown.enter.shift="keyEnterShift"
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