<template>
  <div class="flex flex-col w-full">
    <div class="flex flex-col items-center w-full mb-20">
      <img src="/logo.svg" alt="KPL" class="w-2/4" />
      <span class="font-semibold text-sm text-center text-[#b0b0b0] mt-2"
        >Kalamazoo Public Library</span
      >
    </div>
    <ul class="flex flex-col w-full gap-16">
      <li
        class="flex justify-center shrink border-0 hover:border-l-[6px] border-amber-600 transition-all duration-150 ease-in-out"
        v-for="menuItem in menuItems"
        :key="menuItem.name"
      >
        <NuxtLink
          :to="menuItem.link"
          class="inline-flex flex-col items-center gap-1 text-[#b0b0b0]"
        >
          <Icon :name="menuItem.icon" size="1.4rem" />
          <span class="text-sm tracking-wide text-center">{{
            menuItem.name
          }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const menuItems = ref([
  {
    name: "Login",
    icon: "material-symbols:person",
    link: "/auth/login",
  },
  {
    name: "Dashboard",
    icon: "IconsDashboard",
    link: "/admin",
  },
  {
    name: "Help",
    icon: "material-symbols:support",
    link: "/auth/login",
  },
]);
</script>
