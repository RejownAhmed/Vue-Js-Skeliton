import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth";
import { useToken } from "@/composable/useToken";
import type { Middleware } from "@/types/middleware";

const middleware: Middleware = async (to, from, next) => {
  const authStore = useAuthStore();
  const { isAuthenticated } = storeToRefs(authStore);
  const { getToken } = useToken();

  if (isAuthenticated.value || getToken()) {
    return next("/dashboard"); // Redirect to dashboard if already logged in
  }

  return next(); // Proceed to the next route
};

export default middleware;
