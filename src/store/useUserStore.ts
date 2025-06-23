import { create } from "zustand"

interface UserStore {
    username: string;
    setUsername: (username: string) => void;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    username: '',
    currentPage: 1,
    setUsername: (username) => {
        set({ username })
    },
    setCurrentPage: (page) => {
        set({ currentPage: page })
    }
}))