import { auth } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function home() {
    const [user] = useAuthState(auth);
    if (!user) return <div>Unauthorized</div>;
    const navigate = useNavigate();
    const handleSignout = async () => {

        try {
            await signOut(auth);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div>home</div>
            <button onClick={() => handleSignout()} className="text-sm font-medium hover:underline underline-offset-2 bg-emerald-600 p-2 rounded-md">
                Sign Out
            </button>

        </>
    )
}

export default home