<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: "KPL Asset Loan",
  meta: [
    {
      name: "description",
      content: "Kalamazoo Public Library Asset Loan and Management System",
    },
  ],
});
</script>

<style>
@import "node_modules/@vueform/vueform/themes/material/css/index.min.css";
</style>
