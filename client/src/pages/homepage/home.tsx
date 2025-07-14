import { auth } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoaderSpin from "../Loader/Loader";

function Home() {
    const [user, loading] = useAuthState(auth);
    const [signingOut, setSigningOut] = useState(false);
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
    }, [user, loading, navigate]);

    if (loading) {
        return <LoaderSpin/>
    }

    if (!user) {
        return null; 
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
