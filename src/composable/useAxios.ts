import { defu } from "defu";
import { useToken } from "@/composable/useToken";
import axios, { AxiosRequestConfig } from "axios";
// import { useTenant } from "@/composable/useTenant";

export function useAxios() {
  const { getToken } = useToken();
  // const { getTenant } = useTenant();

  const getLocale = () => {
    return "en";
  };

  const useCustomAxios = async (url: string, options = {}) => {
    const token = getToken();
    const defaults: AxiosRequestConfig<any> = {
      baseURL: import.meta.env.VITE_API_BASE + "/api",
      // set user token if connected
      headers: { Accept: "application/json" },
    };

    if (!defaults.headers) defaults.headers = {};

    // Set authorization token
    if (token) defaults.headers["Authorization"] = `Bearer ${token}`;
    // Send locale information
    defaults.headers["X-locale"] = getLocale();
    // Set tenant
    // const organizationSlug = getTenant();
    // if (organizationSlug) {
    //   defaults.headers["X-domain"] = organizationSlug;
    // }

    // for nice deep defaults, please use unjs/defu
    const params = defu(defaults, options);

    try {
      const { data } = await axios(url, params);

      return Promise.resolve({
        data: data,
      });
    } catch (error: any) {
      console.log("From axios", error);

      // If success return result
      // If error, return errors
      if (error.response) return Promise.reject(error.response);
    }
  };

  const get = (url: string, config?: object) => {
    return useCustomAxios(url, config);
  };

  const post = (url: string, body?: object | FormData, config?: object) => {
    return useCustomAxios(url, {
      method: "post",
      data: body,
      ...config,
    });
  };

  const update = (url: string, body?: object | FormData, config?: object): Promise<any> => {
    return useCustomAxios(url, {
      method: "patch",
      data: body,
      ...config,
    });
  };

  const remove = async (url: string, config?: AxiosRequestConfig): Promise<any> => {
    return useCustomAxios(url, {
      method: "delete",
      ...config,
    });
  };

  return {
    get,
    post,
    update,
    remove,
  };
}
