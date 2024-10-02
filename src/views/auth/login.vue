<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import { Icon } from "@iconify/vue";
// import { useAxios } from "@/composable/useAxios";
import { useToken } from "@/composable/useToken";
import type { ILoginRequest } from "@/types/auth";

// const { post } = useAxios();

const formData = ref<ILoginRequest>({
  email: "",
  password: "",
});

const router = useRouter();
const { setToken } = useToken();

const loader = ref(false);
const errors = ref<{
  email?: Array<string>;
  password?: Array<string>;
}>({});

const submit = async () => {
  errors.value = {};
  loader.value = true;
  // Login here and do your jobs
  // By default let's set the default token
  setToken("token");
  router.push("/dashboard");
};
</script>

<template>
  <div>
    <div>
      <form @submit.prevent="submit">
        <div class="shadow-lg p-5 rounded-md min-w-[400px]">
          <div class="card_wrapper flex flex-col gap-5">
            <icon class="w-12 h-12" icon="material-symbols:login-sharp" />
            <h1 class="text-2xl">Login to Application</h1>
            <div>
              <label class="space-y-3">
                <div>Email Address</div>
                <input
                  class="w-full p-3 py-2 rounded-md border border-gray-300"
                  type="email"
                  v-model="formData.email"
                  placeholder="example@demo.com"
                />
              </label>
            </div>
            <div>
              <label class="space-y-3">
                <div>Password</div>
                <input
                  class="w-full p-3 py-2 rounded-md border border-gray-300"
                  type="password"
                  v-model="formData.password"
                  placeholder="Min: 6"
                />
              </label>
            </div>
            <hr class="border-gray-300" />
            <button type="submit" class="w-full bg-green-500 text-white rounded-md py-3">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
