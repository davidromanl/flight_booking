const API_BASE_URL = "/api";

type UserModel = {
  id?: string;
  nombre: string;
  email: string;
};

const userService = {
  getUsers: async () => {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) {
      throw new Error("Error al obtener los usuarios");
    }
    return response.json();
  },

  createUser: async (user: UserModel) => {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Error al crear el usuario");
    }
    return response.json();
  },
};

export default userService;
