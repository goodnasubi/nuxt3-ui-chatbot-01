<template>
  <div class="h-dvh flex flex-col md:flex-row max-h-dvh">
    <USlideover
      v-model:open="isDrawerOpen"
      :ui="{ content: 'md:hidden' }"
    >
      <template #content>
        <SideBar @hide-drawer="isDrawerOpen = false" />
      </template>
    </USlideover>

    <div class="hidden md:block max-w-xs w-full">
      <SideBar />
    </div>

    <USeparator orientation="vertical" class="hidden md:block" />

    <div class="w-full h-full flex flex-col bg-zinc-50 dark:bg-zinc-950 ">
      <ChatHeader @show-drawer="isDrawerOpen = true" />
      <USeparator />

      <div class="overflow-y-auto h-full">
        <UContainer class="w-full h-full flex flex-col max-h-full max-w-3xl relative" v-resize-observer="onResizeObserver">
          <ChatMessages v-show="messages.length" :messages />

          <ChatInput class="w-full absolute bottom-0 inset-x-0" :loading="!isChatEnabled" @message="sendMessage" />
        </UContainer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { useChat } from 'ai/vue'
import { useChat } from '@ai-sdk/vue';
import { vResizeObserver } from '@vueuse/components'

import type { QueryStreamResponse } from '~/types'

const sessionId = useState<string>('sessionId', () => crypto.randomUUID())
// const informativeMessage = useInformativeMessage()
// const messages = useMessages()
// const documents = useDocuments()
// const queries = useQueries()
// const relevantContext = useRelevantContext()
const isDrawerOpen = ref(false)

const toast = useToast()

// async function sendMessage(message: string) {
//   messages.value.push({ role: 'user', content: message })
//   relevantContext.value.isProvided = false
//   relevantContext.value.context = []

//   const response = useStream<QueryStreamResponse>('/api/query', { messages: messages.value, sessionId: sessionId.value })()

//   let responseAdded = false
//   for await (const chunk of response) {
//     if (chunk.message) {
//       informativeMessage.value = chunk.message
//     }

//     if (chunk.queries) {
//       queries.value = chunk.queries
//     }

//     if (chunk.relevantContext) {
//       relevantContext.value.context = chunk.relevantContext.map(context => context.text)
//       relevantContext.value.isProvided = true
//     }

//     if (chunk.error) {
//       informativeMessage.value = chunk.error
//       toast.add({
//         title: 'Error',
//         description: chunk.error,
//         color: 'error',
//       })
//     }

//     if (chunk.response) {
//       informativeMessage.value = ''

//       if (!responseAdded) {
//         messages.value.push({
//           role: 'assistant',
//           content: chunk.response,
//         })
//         responseAdded = true
//       }
//       else {
//         messages.value[messages.value.length - 1]!.content += chunk.response
//       }
//     }
//   }
// }

const { messages, input, handleSubmit } = useChat({
    headers: { 'Content-Type': 'application/json' },
})

const text = ref('')
function onResizeObserver(entries: ReadonlyArray<ResizeObserverEntry>) {
  const [entry] = entries
  if (!entry) return

  const { width, height } = entry.contentRect
  text.value = `width: ${width}, height: ${height}`
  console.log("座標：", text.value, entry)
  // entry.target.scrollTop = height
  window.scrollTo ({
      top: height,
      behavior: "smooth"
    })
}

const isChatEnabled = computed(() => true)

// const uploadedFiles = computed(() => documents.value.filter(doc => !doc.progress))
// const isChatEnabled = computed(() => informativeMessage.value === '' && !!uploadedFiles.value.length)

// const isExampleSession = useIsExampleSession()
// const exampleSessions = useExampleSessions()
// const exampleSession = computed(() => exampleSessions.find(session => session.id === sessionId.value))
</script>
