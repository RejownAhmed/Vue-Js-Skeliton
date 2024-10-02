export function useTenant() {
  const getTenant = () => {
    const tenant = localStorage.getItem("tenant");

    if (tenant) return tenant;

    return null;
  };

  const setTenant = (newTenant: string) => {
    localStorage.setItem("tenant", newTenant);
  };

  const deleteTenant = () => {
    localStorage.removeItem("tenant");
  };

  return {
    getTenant,
    setTenant,
    deleteTenant,
  };
}
