import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AuthStore {
    isAuthenticated: boolean;
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            token: null,
            login: (token) => set({
                token,
                isAuthenticated: true
            }),
            logout: () => set({
                token: null,
                isAuthenticated: false
            })
        }),
        {
            name: "auth-storage"
        }
    )
)