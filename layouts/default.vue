<template>
  <div
    class="m-0 font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500 min-h-screen"
  >
    <!-- desktop sidenav -->
    <aside
      class="max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 w-full hidden flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-all duration-200 xl:block"
    >
      <LayoutSideBar />
    </aside>
    <!-- end desktop sidenav -->

    <!-- background overlay -->
    <div
      @click="sidebarToggle = false"
      @keydown.self="sidebarToggle = false"
      :class="`fixed inset-0 z-110 bg-black/50 transition-all duration-200 ease-nav-brand ${
        sidebarToggle ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`"
    ></div>

    <!-- mobile sidenav -->
    <aside
      :class="`fixed top-4 left-4 z-990 h-screen p-0 rounded-2xl border-0 overflow-y-auto transition-all duration-200 ease-nav-brand ${
        sidebarToggle ? 'translate-x-0' : '-translate-x-full'
      } bg-white w-80 dark:bg-gray-800`"
    >
      <button
        type="button"
        @click="sidebarToggle = false"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <Icon name="material-symbols:cancel" />
      </button>
      <LayoutSideBar />
    </aside>
    <!-- end mobile sidenav -->

    <!-- Main content -->
    <main
      class="ease-soft-in-out xl:ml-68.5 py-6 relative h-full max-h-screen rounded-xl transition-all duration-200"
    >
      <!-- Navbar -->
      <LayoutHeader v-model:sidebarToggle="sidebarToggle" />
      <!-- end Navbar -->

      <!-- cards -->
      <slot />
      <!-- end cards -->
    </main>
  </div>
</template>

<script setup lang="ts">
const darkMode = ref(false);
const stickyMenu = ref(false);
const sidebarToggle = ref(false);
const scrollTop = ref(false);
</script>
