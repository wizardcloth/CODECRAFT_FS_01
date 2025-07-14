import { auth } from "@/lib/firebase";

export const getUserToken = async () => {
    const user = auth.currentUser;
    if (!user) {
        return null; 
    }
    const token = await user.getIdToken();
    return token;
};

export const createHeader = async () => {
    const token = await getUserToken();
    if (!token) {
        return {};
    }
    
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
};
