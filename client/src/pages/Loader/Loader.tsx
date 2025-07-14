import { Card, CardContent } from "@/components/ui/card"
import { Loader } from "lucide-react"
function LoaderSpin() {
    return (
        <div className="h-screen w-full bg-black flex items-center justify-center">
            <Card className="w-[90%] max-w-md bg-zinc-200 border-zinc-800">
                <CardContent className="flex flex-col gap-4 items-center pt-6">
                    <Loader className="size-15 text-emerald-500 animate-spin" />
                    <h1 className="text-xl font-bold text-black">Authenticating...</h1>
                    <p className="text-sm  text-black">Please wait while we authenticate you</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default LoaderSpin