import { auth } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoaderSpin from "../Loader/Loader";
import { useUserStore } from "@/store/User.store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import CardSkeleton from "@/Skeleton/card";
function Home() {
    const [user, loading] = useAuthState(auth);
    const [signingOut, setSigningOut] = useState(false);
    const userStore = useUserStore();
    const { users, fetchUser, usersEmail, fetchUserEmail, isLoading } = userStore;
    const navigate = useNavigate();

    const handleSignout = async () => {
        try {
            setSigningOut(true);
            await signOut(auth);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!loading && !user && !signingOut) {
            navigate("/unauthorized");
        }

        if (!loading && user) {
            fetchUser();
            fetchUserEmail();
        }
    }, [user, loading, navigate, signingOut, fetchUser, fetchUserEmail]);

    if (loading) {
        return <LoaderSpin />
    }

    if (!user) {
        return null;
    }

    return (
        <>
            <div className="min-h-screen bg-radial from-gray-500 to-gray-100 p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Welcome, {user.displayName || "User"}</h1>
                    <Button variant="destructive" onClick={handleSignout}>
                        Sign Out
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {isLoading ? (
                        <CardSkeleton />
                    ) : (
                        (users ?? []).map((user: any) => (
                            <Card key={user._id} className="shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader className="flex items-center gap-4">
                                    <img
                                        src={user.imageUrl}
                                        alt={user.fullName}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <CardTitle>{user.fullName}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600">Firebase UID: {user.firebaseUID}</p>
                                    <p className="text-sm text-gray-600">Created: {new Date(user.createdAt).toLocaleString()}</p>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </div>

                <div className="p-4">
                    <h1 className="font-bold text-3xl">Users Via Email Login</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {isLoading ? (
                        <CardSkeleton />
                    ) : (
                        
                        (usersEmail ?? []).map((user: any) => (
                            <Card key={user._id} className="shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader className="flex items-center gap-4">
                                    <User />
                                    <CardTitle>{user.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600">Email : {user.email}</p>
                                    <p className="text-sm text-gray-600">Created: {new Date(user.createdAt).toLocaleString()}</p>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;
