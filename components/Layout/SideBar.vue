<template>
  <div class="h-19.5">
    <i
      class="absolute top-0 right-0 hidden p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden"
    ></i>
    <a
      class="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700"
      href="/"
      target="_blank"
    >
      <img
        src="/logo.svg"
        class="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8"
        alt="main_logo"
      />
      <span
        class="ml-1 font-semibold transition-all duration-200 ease-nav-brand"
        >KPL Asset Management</span
      >
    </a>
  </div>

  <hr
    class="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"
  />

  <div
    class="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full"
  >
    <ul class="flex flex-col pl-0 mb-0">
      <li
        v-for="menuItem in menuItems"
        :key="menuItem.name"
        class="mt-0.5 w-full"
      >
        <NuxtLink
          :class="[
            'py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors',
            currentPage === menuItem.link
              ? 'shadow-soft-xl bg-white text-slate-700 font-semibold'
              : '',
          ]"
          :to="menuItem.link"
        >
          <div
            :class="[
              'shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5',
              currentPage === menuItem.link
                ? 'bg-gradient-to-tl from-purple-700 to-pink-500 rounded-lg text-white'
                : 'text-slate-800',
            ]"
          >
            <Icon :name="menuItem.icon" />
          </div>
          <span
            class="ml-1 duration-300 opacity-100 pointer-events-none ease-soft"
            >{{ menuItem.name }}</span
          >
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const menuItems = ref([
  {
    name: "Dashboard",
    icon: "IconsDashboard",
    link: "/",
  },
  {
    name: "Assets",
    icon: "material-symbols:devices-other",
    link: "/assets",
  },
]);

const currentPage = ref("/");
</script>
