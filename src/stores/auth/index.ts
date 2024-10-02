import { ref } from "vue";

import { defineStore } from "pinia";
import { ILoginUser } from "@/types/auth";

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref<boolean>(false);

  const authenticatedUser = ref({});

  const authenticateUser = (user: ILoginUser) => {
    authenticatedUser.value = user;
    isAuthenticated.value = true;
  };

  const logout = () => {
    isAuthenticated.value = false;
  };

  return {
    isAuthenticated,
    user: authenticatedUser,
    authenticateUser,
    logout,
  };
});
