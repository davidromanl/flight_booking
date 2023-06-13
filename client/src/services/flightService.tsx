const API_BASE_URL = "/api";

const flightService = {
  getFlights: async () => {
    const response = await fetch(`${API_BASE_URL}/flights`);
    if (!response.ok) {
      throw new Error("Error al obtener los vuelos");
    }
    return response.json();
  },

  searchFlights: async ({origen, destino, fecha}) => {
    const response = await fetch(`${API_BASE_URL}/flights/?fecha=${fecha}&origen=${origen}&destino=${destino}`);
    if (!response.ok) {
      throw new Error("Error al obtener los vuelos");
    }
    return response.json();
  },

  createFlight: async (flight) => {
    const response = await fetch(`${API_BASE_URL}/flights`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(flight),
    });
    if (!response.ok) {
      throw new Error("Error al crear el vuelo");
    }
    return response.json();
  },
};

export default flightService;
