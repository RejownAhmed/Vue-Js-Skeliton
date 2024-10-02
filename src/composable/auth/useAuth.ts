import { useAuthStore } from "@/stores/auth";

// import { useAxios } from "../useAxios";
import { useToken } from "../useToken";
// import { MY_PROFILE } from "@/utils/endpoints";

export function useAuth() {
  // const { get } = useAxios();
  const { getToken, deleteToken } = useToken();
  const { authenticateUser, logout: logoutUser } = useAuthStore();

  // Fetch user profile
  const fetchUserProfile = async () => {
    // Fetch profile
    // By default if has token set a dummy user
    if (getToken()) authenticateUser({
      name: "John Doe",
      email: "john@demo.com"
    });

    // try {
    //   const response: any = await get(MY_PROFILE);

    //   authenticateUser(response.data.result.user);
    // } catch (error: any) {
    //   // handle error

    //   // Logout or forget token when unauthorized
    //   if (error.status === 401) {
    //     deleteToken();
    //   }
    // }

  };

  // Logout user
  const logout = () => {
    deleteToken();
    logoutUser();

    window.location.href = "/login"
  };

  return {
    fetchUserProfile,
    logout,
  };
}
