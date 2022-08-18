<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div class="">
    {{ route }}
  </div>
</template>

<style scoped module></style>
