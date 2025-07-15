import LoginForm from "@/components/LoginForm"
import Link from "next/link"

export const metadata = {
    title: "Login | Buy Me a Chiya",
    description: "Login page for buy me a chiya"
}

const page = () => {
    return (
        <div className="relative h-svh flex items-center justify-center">
            <h4 className="md:text-sm text-xs absolute top-6 right-6">
                <span>Don&apos;t have an account?</span>&nbsp;
                <Link href={'/signup'} className="underline hover:no-underline">
                    Sign up
                </Link>
            </h4>

            <LoginForm />
        </div>
    )
}

export default page