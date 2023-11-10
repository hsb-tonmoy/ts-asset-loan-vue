<script setup lang="ts"></script>

<template>
  <main class="flex justify-center items-center w-full h-screen bg-[#C1C5D7]">
    <div
      style="box-shadow: 0 4px 16px 4px rgba(0, 0, 0, 0.3)"
      class="md:max-w-3xl lg:max-w-4xl xl:max-w-screen-2xl w-full p-0 flex h-full max-h-180 rounded-3 border-0 bg-white"
    >
      <div id="menu" class="flex flex-col items-center w-[10%] py-12">
        <HomeMenu />
      </div>
      <div
        id="description"
        style="box-shadow: 0 4px 16px 4px rgba(0, 0, 0, 0.3)"
        class="flex flex-col justify-center items-center w-[40%] bg-[#0099D8] -my-6"
      >
        <HomeDescription />
      </div>
      <div
        id="requestForm"
        class="flex flex-col justify-center items-center w-[50%]"
      >
        <HomeRequestForm />
      </div>
    </div>
  </main>
</template>
