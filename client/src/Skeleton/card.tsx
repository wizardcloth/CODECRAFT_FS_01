import { Skeleton } from "@/components/ui/skeleton"

export default function CardSkeleton() {
    return (
        Array(4).fill(0).map((_, i) => (
            <div key={i} className="shadow-lg hover:shadow-xl transition-shadow rounded-md p-4">
                <div className="flex items-center gap-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[150px]" />
                    </div>
                </div>
                <div className="mt-4">
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        ))
    )
}
