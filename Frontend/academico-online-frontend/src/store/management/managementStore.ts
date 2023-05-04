
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IManagementStore } from '../types/managementStore';

export const useManagementStore = create<IManagementStore>()(
  persist(
    (set, get) => ({
      form: {
        ra: '',
        senha: ''
      },

      setForm: (form) => set((state) => ({ ...state, form })),
      
      cleanCoverageValues: () =>
        set((prevState) => ({
          ...prevState,
          form: {
            ra: '',
            senha: ''
          },
        })),
    }),
    {
      name: 'global-storage-management',
      getStorage: () => localStorage,
      partialize: (s) => ({
        ...s,
        form: {
          ra: '',
          senha: ''
        },
      }),
    },
  ),
);