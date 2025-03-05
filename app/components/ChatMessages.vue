<script setup lang="ts">
import type { UIMessage } from '@ai-sdk/ui-utils'

defineProps<{
  readonly responseMessages: Ref<UIMessage[]>
}>()

// scroll to bottom
// const chatContainer = useTemplateRef('chatContainer')
// let observer: MutationObserver | null = null

// onMounted(() => {
//   if (chatContainer.value) {
//     observer = new MutationObserver(() => {
//       if (chatContainer.value) {
//         chatContainer.value.scrollTop = chatContainer.value.scrollHeight
//       }
//     })

//     observer.observe(chatContainer.value, {
//       childList: true,
//       subtree: true,
//       characterData: true,
//     })
//   }
// })

// onUnmounted(() => {
//   if (observer) {
//     observer.disconnect()
//   }
// })

// const informativeMessage = useInformativeMessage()
// const relevantContext = useRelevantContext()
// const queries = useQueries()
</script>

<template>
  <div class="flex flex-col p-3 pb-0 space-y-2 h-full">
    <template
      v-for="message in responseMessages"
      :key="`message-${message.id}`"
    >
      <div v-if="message.role === 'user'" class="flex items-center self-end bg-zinc-200 dark:bg-zinc-900 rounded-full px-3 py-1">
        <p>{{ message.content }}</p>
      </div>

      <AssistantMessage v-else :content="message.content" class="px-1" />
    </template>
  </div>
</template>