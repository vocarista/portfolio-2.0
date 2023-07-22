import { create } from 'zustand'


export const useStore = create(set => ({
    isDark: true,
    isMobile: false,
    toggleTheme: () => set((state: any) => ({...state, dark: !state.isDark})),
    toggleView: (isMobile: boolean) => set((state: any) => ({...state, isMobile: isMobile})), 
}))