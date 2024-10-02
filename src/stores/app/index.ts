import { ref } from "vue";

import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const isLoaded = ref<boolean>(false);

  const setIsLoaded = (value: boolean) => {
    isLoaded.value = value;
  };

  return {
    isLoaded,
    setIsLoaded,
  };
});
