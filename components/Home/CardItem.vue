<template>
  <NuxtLink
    :to="link"
    class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"
  >
    <div
      class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl hover:shadow-none transition-shadow duration-200 ease-in-out rounded-2xl bg-clip-border"
    >
      <div class="flex-auto p-4">
        <div class="flex flex-row -mx-3">
          <div class="flex-none w-2/3 max-w-full px-3">
            <div>
              <p class="mb-0 font-sans font-semibold leading-normal text-sm">
                {{ title }}
              </p>
              <h5 class="mb-0 font-bold">
                {{ value }}
              </h5>
            </div>
          </div>
          <div class="px-3 text-right basis-1/3">
            <div
              class="inline-flex items-center justify-center w-12 h-12 text-white rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500"
            >
              <Icon :name="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  link: String,
  value: String,
  icon: String,
});
</script>
