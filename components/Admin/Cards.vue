<template>
  <div class="flex flex-wrap -mx-3">
    <AdminCardItem
      v-for="card in cards"
      :key="card.name"
      :title="card.name"
      :value="card.value"
      :icon="card.icon"
      :link="card.link"
    />
  </div>
</template>

<script setup lang="ts">
const cards = [
  {
    name: "Assets",
    link: "/assets",
    value: "2,300",
    icon: "material-symbols:devices-other",
  },
  {
    name: "Requests",
    link: "/requests",
    value: "10",
    icon: "material-symbols:contract-edit",
  },
];
</script>
