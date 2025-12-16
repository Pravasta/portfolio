import { create } from 'zustand';

interface PortfolioState {
  activeSection: string;
  isNavOpen: boolean;
  setActiveSection: (section: string) => void;
  setNavOpen: (open: boolean) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  activeSection: 'home',
  isNavOpen: false,
  setActiveSection: (section) => set({ activeSection: section }),
  setNavOpen: (open) => set({ isNavOpen: open }),
}));
