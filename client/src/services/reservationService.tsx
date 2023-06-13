const API_BASE_URL = "/api";

const reservationService = {
  getReservations: async (idUser: string) => {
    const response = await fetch(
      `${API_BASE_URL}/reservations/?user_id=${idUser}`
    );
    if (!response.ok) {
      throw new Error("Error al obtener los usuarios");
    }
    return response.json();
  },

  createReservation: async (reservation) => {
    const response = await fetch(`${API_BASE_URL}/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservation),
    });
    if (!response.ok) {
      throw new Error("Error al crear el usuario");
    }
    return response.json();
  },
};

export default reservationService;
