import Button from "./Button"
import cup from "../../public/cup.png"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <nav className="xl:w-[85rem] w-full py-4 flex items-center justify-between">
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
                    <Link href={'/login'}>
                        <Button
                            text="Log in"
                            className="hover:bg-gray-100"
                        />
                    </Link>
                    <Link href={'/signup'}>
                        <Button
                            text="Sign up"
                            className="bg-[var(--yellow)]"
                        />
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar