<template>
  <div class="sidebar-wrapper max-h-[100vh] h-[100vh]">
    Sidebar goes here
    <!-- Show links here -->
    <ul>
      <li v-for="(link, i) in links" :key="i" class="w-max p-2 border">
        <RouterLink :to="link.to">
          {{ link.label }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
<script setup>
import links from "./links.js";
</script>
<style lang="scss"></style>
