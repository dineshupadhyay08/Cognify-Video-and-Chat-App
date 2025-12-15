import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("cognify-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("cognify-theme", theme);
    set({ theme });
  },
}));
