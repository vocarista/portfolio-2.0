import { create } from 'zustand'

export const useStore = create(set => ({
    isDark: true,
    isMobile: false,
    toggleTheme: () => set(state => ({...state, dark: !state.isDark})),
    toggleView: (isMobile) => set(state => ({...state, isMobile: isMobile})), 
}))