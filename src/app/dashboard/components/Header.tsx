import Button from "@/components/Button"
import Image from "next/image"
import { MdOutlineContentCopy } from "react-icons/md"

const Header = () => {
    return (
        <div className="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 justify-between w-full border border-neutral-200/80 rounded-2xl p-6">
            <div className="flex items-center gap-4">
                <Image
                    src={"https://img.freepik.com/free-photo/front-view-smiley-man-taking-selfie_23-2149556994.jpg?semt=ais_hybrid&w=740"}
                    alt="person selfie"
                    quality={100}
                    width={600}
                    height={600}
                    className="rounded-full size-20 object-cover"
                />
                <div>
                    <h3 className="font-medium lg:text-xl md:text-lg text-base">
                        Hi, Sabin Hamal
                    </h3>
                    <a
                        href="#"
                        className="md:text-sm text-xs text-neutral-600"
                    >
                        chiya/sabin
                    </a>
                </div>
            </div>
            <Button className="bg-black text-white flex items-center gap-2">
                <MdOutlineContentCopy className="md:size-4 size-3" />
                Copy Page Link
            </Button>
        </div>
    )
}

export default Header