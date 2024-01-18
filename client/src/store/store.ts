import { create } from 'zustand'


export const useStore = create(set => ({
    isDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
    isMobile: false,
    showNavList: false,
    base: 'https://api.main.vocarista.com',
    toggleTheme: (mode: boolean) => set((state: any) => ({...state, isDark: !mode})),
    toggleView: (isMobile: boolean) => set((state: any) => ({...state, isMobile: isMobile})),
    toggleShowNavList: () => set((state: any) => ({...state, showNavList: !state.showNavList}))
}))

