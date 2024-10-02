import { storeToRefs } from "pinia";
import { useAppStore } from "@/stores/app";
import { useAuth } from "@/composable/auth/useAuth";
import type { Middleware } from "@/types/middleware";

const middleware: Middleware = async (to, from, next) => {
  const appStore = useAppStore();
  const { isLoaded } = storeToRefs(appStore);
  const { fetchUserProfile } = useAuth();

  if (!isLoaded.value) {
    await fetchUserProfile();
    isLoaded.value = true;
  }

  return next();
};

export default middleware;
