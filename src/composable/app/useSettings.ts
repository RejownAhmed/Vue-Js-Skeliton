// import { ref } from "vue";

// import { useAxios } from "../useAxios";

// import { SETTINGS } from "@/utils/endpoints";

export function useSettings() {
  // const { get, post, update, remove } = useAxios();

  // const { settings } = storeToRefs(useSettingsStore());

  // const loading = ref<boolean | string>(false);
  // const errors = ref<any>({});
  // const formData = ref<ISettings>({
  //   name: "",
  // });

  // const selectedId = ref<number>();

  // const clear = () => {
  //   formData.value = {
  //     name: "",
  //   };

  //   errors.value = {};
  //   loading.value = false;
  // };

  // const getSettings = async () => {
  //   loading.value = "GET";
  //   return get(`${SETTINGS}`)
  //     .then((response) => {
  //        settings.value = response.data
  //       // Show success toaster

  //       return response;
  //     })
  //     .catch((error) => {
  //       // Show toaster error message

  //       throw error;
  //     })
  //     .finally(() => {
  //       loading.value = false;
  //     });
  // };

  // const updateSettings = async () => {
  //   loading.value = "UPDATE";
  //   return update(`${SETTINGS}`, formData.value)
  //     .then((response) => {
  //       // Show success toaster
  //       console.log(response);

  //       return response;
  //     })
  //     .catch((error) => {
  //       if (error.data?.errors) {
  //         errors.value = error.data.errors;
  //       }

  //       throw error;
  //     })
  //     .finally(() => {
  //       loading.value = false;
  //     });
  // };

  return {
    // loading,
    // errors,
    // formData,
    // selectedId,
    // updateSettings,
    // clear,
  };
}
