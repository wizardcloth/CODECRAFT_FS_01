import { auth } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoaderSpin from "../Loader/Loader";

function Home() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSignout = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!loading && !user) {
            navigate("/unauthorized");
        }
    }, [user, loading, navigate]);

    // ✅ Don’t show page while auth is loading
    if (loading) {
        return <LoaderSpin/>
    }

    // ✅ Don’t show page while redirecting unauthenticated user
    if (!user) {
        return null; // Return nothing while waiting for redirect
    }

    return (
        <>
            <div>home</div>
            <button
                onClick={handleSignout}
                className="text-sm font-medium hover:underline underline-offset-2 bg-emerald-600 p-2 rounded-md"
            >
                Sign Out
            </button>
        </>
    );
}

export default Home;
