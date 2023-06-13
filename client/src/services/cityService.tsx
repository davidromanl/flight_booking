const API_BASE_URL = "/api";

const cityService = {
  getCities: async () => {
    const response = await fetch(`${API_BASE_URL}/cities`);
    if (!response.ok) {
      throw new Error("Error al obtener las ciudades");
    }
    return response.json();
  },
};

export default cityService;
