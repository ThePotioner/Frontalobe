import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Theme } from '../types/ui';

export interface IUrmomStore {
  urmom: number;
  increaseUrmom: () => void;
  removeUrmom: () => void;
}

export const useUrmomStore = create<IUrmomStore>((set) => ({
  urmom: 0,
  increaseUrmom: () =>
    set((state) => ({
      urmom: state.urmom + 1,
    })),
  removeUrmom: () => set({ urmom: 0 }),
}));

export interface IThemeStore {
  theme: Theme;
  toggleTheme: (theme: Theme) => void;
}

export const useThemeStore = create<IThemeStore>()(
  persist(
    (set) => ({
      theme: 'dark',
      toggleTheme: (theme: Theme) =>
        set(() => ({
          theme: theme === 'dark' ? 'light' : 'dark',
        })),
    }),
    {
      name: 'Frontalobe-Theme',
    }
  )
);
