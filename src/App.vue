<template>
  <div>
    <vue-progress-bar />
    <div
      class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased text-default items-center"
    >
      <router-view />
    </div>
  </div>
</template>
<script setup>
import { useDark } from "@vueuse/core";
// Has Dark mode
useDark({
  selector: "html",
  attribute: "theme",
  valueDark: "dark",
  valueLight: "light",
});
</script>
<script>
export default {
  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start();
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        // parse meta tags
        this.$Progress.parseMeta(meta);
      }
      //  start the progress bar
      this.$Progress.start();
      //  continue to next page
      next();
    });

    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from, failure) => {
      if (!failure) {
        //  finish the progress bar
        this.$Progress.finish();
      } else {
        this.$Progress.fail();
      }
    });

    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.onError(() => {
      //  fail the progress bar
      this.$Progress.fail();
    });
  },
};
</script>
