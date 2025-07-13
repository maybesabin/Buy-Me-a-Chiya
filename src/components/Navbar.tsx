import Button from "./Button"
import cup from "../../public/cup.png"
import Image from "next/image"
import Link from "next/link"
import { useAuthStore } from "@/store/useAuthStore"

const Navbar = () => {
    const { logout, isAuthenticated } = useAuthStore()
    return (
        <div className="w-full flex items-center justify-center">
            <nav className="xl:w-[85rem] w-full 2xl:px-0 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image
                        height={600}
                        width={600}
                        src={cup.src}
                        alt="Coffee Icon"
                        className="size-8"
                    />
                    <h4 className="md:text-xl text-base cursive-font font-bold">
                        Buy me a chiya
                    </h4>
                </div>
                <div className="flex items-center gap-2">
                    {isAuthenticated ?
                        <Button
                            onClick={logout}
                            className="bg-[var(--yellow)]"
                        >
                            Log out
                        </Button>
                        :
                        <>
                            <Link href={'/login'}>
                                <Button
                                    className="hover:bg-gray-100"
                                >
                                    Log in
                                </Button>
                            </Link>
                            <Link href={'/signup'}>
                                <Button
                                    className="bg-[var(--yellow)]"
                                >
                                    Sign up
                                </Button>
                            </Link>
                        </>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar