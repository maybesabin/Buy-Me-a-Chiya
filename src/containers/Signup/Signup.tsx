"use client"

import SignupForm from "@/components/SignupForm"
import { useUserStore } from "@/store/useUserStore"

const Signup = () => {
    const { username } = useUserStore()
    return (
        <main className="flex items-center justify-center h-full">
            <div className="flex flex-col items-start gap-4">
                <h1 className="font-medium lg:text-3xl md:text-2xl text-lg w-full text-center">
                    Welcome, {username}
                </h1>
                <SignupForm username={username} />
            </div>
        </main>
    )
}

export default Signup