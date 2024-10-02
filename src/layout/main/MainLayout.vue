<template>
  <div class="w-full">
    <div class="flex gap-0">
      <Sidebar />
      <div class="content-wrapper">
        <Navbar />
        <main class="main_wrapper">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>
<script setup>
import Navbar from "@/components/app/layout/navbar";
import Sidebar from "@/components/app/layout/sidebar";
</script>
<style lang="scss">
.content-wrapper {
  @apply w-full md:w-[calc(100vw_-_250px)] relative transition-all duration-300 ease-linear;

  .main_wrapper {
    @apply pt-20 pb-5 px-5 min-h-[100vh] h-[100vh] max-h-[100vh] overflow-y-auto overflow-x-hidden;
  }
}
</style>
