import { create } from 'zustand'


export const useStore = create(set => ({
    isDark: true,
    isMobile: false,
    toggleTheme: () => set((state: any) => ({...state, isDark: !state.isDark})),
    toggleView: (isMobile: boolean) => set((state: any) => ({...state, isMobile: isMobile})),
}))


// export const useLoader = create((set) => ({
//     isProjectsLoading: true,
//     setIsProjectsLoading: (loading: boolean) =>
//       set((state: any) => ({ ...state, isProjectsLoading: loading })),
//     isRolesLoading: true,
//     setIsRolesLoading: (loading: boolean) =>
//       set((state: any) => ({ ...state, isRolesLoading: loading })),
//     isSchoolsLoading: true,
//     setIsSchoolsLoading: (loading: boolean) =>
//       set((state: any) => ({ ...state, isSchoolsLoading: loading })),
//   }));