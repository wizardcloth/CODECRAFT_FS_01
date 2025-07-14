import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import SignInButton from "@/components/SignInButton";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "@/lib/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [signInWithEmailAndPassword, , loading, ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    
    const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(Email, Password);
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="relative min-h-screen flex items-center">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-xs"
                style={{ backgroundImage: `url('/bg.jpg')` }}
            />

            <div className="relative rounded-xl shadow-2xl/60 backdrop-blur-sm p-10 w-full max-w-md flex flex-col gap-4 mx-auto">
                <h1 className="text-3xl font-bold">Login</h1>
                <p className="text-sm text-gray-500 mb-4">
                    Continue to access your dashboard
                </p>


                <SignInButton />


                <div className="flex items-center my-4">
                    <div className="flex-grow border-t border-gray-300" />
                    <span className="mx-2 text-xs text-gray-500">OR</span>
                    <div className="flex-grow border-t border-gray-300" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border-gray-400 border-2"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password" className="text-xs">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="w-full  border-gray-400 border-2"
                        onChange={(e) => setPassword(e.target.value)}   
                    />
                    {/* <div className="text-right">
                        <a href="#" className="text-xs text-gray-500 hover:underline">
                            Forgot Password?
                        </a>
                    </div> */}
                </div>

                <Button className="w-full hover:cursor-pointer"
                    onClick={handleSignIn}
                    disabled={loading}>
                    Login
                </Button>

                <p className="text-xs text-center text-gray-600">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-black font-semibold underline">
                        Create an Account
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;