<template>
  <div>
    <p>Hi, I am dashboard page</p>
    <button class="w-max p-3 rounded-md bg-red-500 text-white" @click="logout()">Logout</button>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "@/composable/auth/useAuth";

const { logout } = useAuth();
</script>

<style scoped></style>
