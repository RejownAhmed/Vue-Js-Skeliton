export function useToken() {
  const getToken = () => {
    const token = localStorage.getItem("access_token");

    if (token) return token;

    return null;
  };

  const setToken = (newToken: string) => {
    localStorage.setItem("access_token", newToken);
  };

  const deleteToken = () => {
    localStorage.removeItem("access_token");
  };

  return {
    getToken,
    setToken,
    deleteToken,
  };
}
