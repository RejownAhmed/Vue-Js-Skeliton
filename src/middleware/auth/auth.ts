import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth";
import type { Middleware } from "@/types/middleware";

const middleware: Middleware = async (to, from, next) => {
  const authStore = useAuthStore();
  const { isAuthenticated } = storeToRefs(authStore);

  if (!isAuthenticated.value) {
    return next("/login"); // Redirect to login if not authenticated
  }

  return next(); // Proceed to the next route
};

export default middleware;
