<script setup lang="ts">
import type { UploadStreamResponse } from '~/types'

defineEmits(['hideDrawer'])
const toast = useToast()

// test data
const documents = [
    {
        name: 'doc_01_aaaa.doc',
        size: 1234,
        chunks: 'chunks sample!!',
        progress: 'progress sample....'
    },
    {
        name: 'doc_01_aaaa.doc',
        size: 1234,
        chunks: 'chunks sample!!',
        progress: 'progress sample....'
    },
]

</script>

<template>
  <div class="h-full flex flex-col overflow-hidden">
    <div class="flex md:hidden items-center justify-between px-4 h-14">
      <div class="flex items-center gap-x-4">
        <h2 class="md:text-lg text-zinc-600 dark:text-zinc-300">
          Documents
        </h2>
      </div>
      <UButton
        icon="i-heroicons-x-mark-20-solid"
        color="neutral"
        variant="ghost"
        class="md:hidden"
        @click="$emit('hideDrawer')"
      />
    </div>
    <USeparator />
    <div class="px-4 pb-4 flex-1 space-y-2 overflow-y-auto flex flex-col">
      <h2 class="mb-2 text-lg font-semibold text-primary">
        候補 documents
      </h2>
      <div v-for="(document, i) in documents" :key="document.name" class="py-1">
        <p class="font-medium text-sm mb-1 truncate text-zinc-700 dark:text-zinc-300">
          {{ document.name }}
        </p>
        <p class="text-zinc-500 text-xs">
          {{ document.size }} MB
          <template v-if="document.chunks">
            &#x2022; {{ document.chunks }} chunks
          </template>
        </p>
        <div v-if="document.progress" class="mt-0.5 flex items-center px-1.5 gap-2">
          <LoadingIcon class="size-2" />
          <p class="text-zinc-400 text-xs ">
            {{ document.progress }}
          </p>
        </div>

        <USeparator v-if="i < documents.length - 1" class="mt-3" />
      </div>

      <p v-if="!documents.length" class="text-zinc-700 dark:text-zinc-300">
        No documents uploaded
      </p>

    </div>
  </div>
</template>