import {create} from "zustand";
import { createHeader } from "@/authProvider/authProvider";
import axiosInstance from "@/lib/axios";

interface UserStore {
    users: any;
    setUser: (users: any) => void;
    usersEmail:any;
    setUsersEmail: (usersEmail: any) => void;
    fetchUser: () => Promise<void>;
    fetchUserEmail: () => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
    users: null,
    setUser: (users) => set({ users: users }),
    usersEmail:null,
    setUsersEmail: (usersEmail) => set({ usersEmail: usersEmail }),
    fetchUser: async () => {
        try {
            const header = await createHeader();
            const response = await axiosInstance.get("/users/google", header);
            set({ users: response.data }); 
        } catch (error) {
            console.log(error);
        }
    },
    fetchUserEmail: async () => {
        try {
            const header = await createHeader();
            const response = await axiosInstance.get("/users/email", header);
            set({ usersEmail: response.data }); 
        } catch (error) {
            console.log(error);
        }
    },
}));