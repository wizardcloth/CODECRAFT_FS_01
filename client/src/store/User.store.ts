import { create } from "zustand";
import { createHeader } from "@/authProvider/authProvider";
import axiosInstance from "@/lib/axios";

interface UserStore {
    isLoading: boolean;
    users: any;
    setUser: (users: any) => void;
    usersEmail: any;
    setUsersEmail: (usersEmail: any) => void;
    fetchUser: () => Promise<void>;
    fetchUserEmail: () => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
    users: null,
    setUser: (users) => set({ users: users }),
    usersEmail: null,
    setUsersEmail: (usersEmail) => set({ usersEmail: usersEmail }),
    isLoading: false,
    fetchUser: async () => {
        try {
            set({ isLoading: true });
            const header = await createHeader();
            const response = await axiosInstance.get("/users/google", header);
            set({ users: response.data });
        } catch (error) {
            console.log(error);
        } finally {
            set({ isLoading: false });
        }
    },
    fetchUserEmail: async () => {
        try {
            set({ isLoading: true });
            const header = await createHeader();
            const response = await axiosInstance.get("/users/email", header);
            set({ usersEmail: response.data });
        } catch (error) {
            console.log(error);
        } finally {
            set({ isLoading: false });
        }
    },
}));