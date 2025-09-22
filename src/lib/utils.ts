import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Theme } from '../types/ui';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const changeTheme = (theme: Theme) => {
  const root = window.document.documentElement;
  const isDark = theme === 'dark';
  root.classList.remove(isDark ? 'light' : 'dark');
  root.classList.add(theme);
};
