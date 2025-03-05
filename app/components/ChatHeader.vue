<template>
    <div class="flex items-center justify-between px-4 h-14 shrink-0">
      <div class="flex items-center gap-x-4">
        <h2 class="text-xl text-zinc-900 dark:text-white font-semibold">
          Chat with PDF
        </h2>
      </div>
      <div class="flex items-center gap-x-4">
        <ColorMode />
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/goodnasubi/markdown-view-nuxt3-ui-01"
          target="_blank"
        />
        <UButton
          icon="i-heroicons-cog-6-tooth"
          color="neutral"
          variant="ghost"
          class="md:hidden"
          @click="$emit('showDrawer')"
        />
      </div>
    </div>
</template>

<script setup lang="ts">
defineEmits(['showDrawer'])
</script>