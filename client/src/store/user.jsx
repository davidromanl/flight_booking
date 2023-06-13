import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,

  loginUser: (user) =>
    set(() => ({
      user: user,
    })),

  logoutUser: () =>
    set(() => ({
      user: null,
    })),
}));
