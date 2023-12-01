import { create } from 'zustand'


export const useStore = create(set => ({
    isDark: true,
    isMobile: false,
    showNavList: false,
    base: 'https://api.main.vocarista.com',
    toggleTheme: () => set((state: any) => ({...state, isDark: !state.isDark})),
    toggleView: (isMobile: boolean) => set((state: any) => ({...state, isMobile: isMobile})),
    toggleShowNavList: () => set((state: any) => ({...state, showNavList: !state.showNavList}))
}))

