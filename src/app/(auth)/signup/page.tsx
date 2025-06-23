"use client"

import Signup from "@/containers/Signup/Signup"
import Username from "@/containers/Signup/Username"
import { useUserStore } from "@/store/useUserStore"
import Link from "next/link"

const page = () => {
    const { currentPage } = useUserStore()
    return (
        <div className="h-full relative">
            <h4 className="md:text-sm text-xs absolute top-10 right-10">
                <span>Already have an account?</span>&nbsp;
                <Link href={'/login'} className="underline hover:no-underline">
                    Sign in
                </Link>
            </h4>
            {currentPage == 1 ?
                <Username /> :
                <Signup />
            }
        </div>
    )
}

export default page