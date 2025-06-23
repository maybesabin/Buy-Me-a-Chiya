import Link from "next/link"

const page = () => {
    return (
        <div className="relative h-svh flex items-center justify-center">
            <h4 className="md:text-sm text-xs absolute top-6 right-6">
                <span>Don't have an account?</span>&nbsp;
                <Link href={'/signup'} className="underline hover:no-underline">
                    Sign up
                </Link>
            </h4>

            <div className="flex flex-col items-start gap-4">
                <h1 className="font-medium lg:text-3xl md:text-2xl text-lg w-full text-center">
                    Welcome back
                </h1>
                <input
                    name="email"
                    required
                    type="email"
                    placeholder="Email"
                    className=
                    "w-96 bg-neutral-100 rounded-lg px-4 py-3 border-none focus:outline-none focus:ring-2 focus:bg-white transition-all duration-300 md:text-sm text-xs"
                />
            </div>
        </div>
    )
}

export default page