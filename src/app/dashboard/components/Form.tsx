import Image from "next/image"
import Cup from "../../../../public/cup.png"
import Input from "@/components/Input"
import Button from "@/components/Button"

const Form = () => {
    return (
        <form className="w-full flex lg:flex-row flex-col items-start gap-8 border border-neutral-200/80 rounded-2xl p-6">
            <div className="lg:w-1/2 w-full">
                <div className="flex items-center gap-2">
                    <Image
                        className="size-10"
                        quality={100}
                        width={600}
                        height={600}
                        src={Cup}
                        alt="Coffee Mug"
                    />
                    <h4 className="font-medium lg:text-xl md:text-lg text-base">
                        Your Chiya Page
                    </h4>
                </div>

                <div
                    className="flex flex-col items-start gap-5 w-full mt-6"
                >
                    <div className="w-full">
                        <label htmlFor="displayName" className="md:text-sm text-xs">
                            Display Name
                        </label>
                        <Input
                            name="displayName"
                            required
                            type="text"
                            placeholder="Display Name"
                            className=
                            "w-full mt-1 bg-neutral-100 rounded-lg px-4 py-3 border-none focus:outline-none focus:ring-2 focus:bg-white transition-all duration-300 md:text-sm text-xs"
                        />
                    </div>

                    <div className="w-full">
                        <label htmlFor="esewaNumber" className="md:text-sm text-xs">
                            E-Sewa Number
                        </label>
                        <Input
                            name="esewaNumber"
                            type="text"
                            placeholder="E-sewa Number"
                            className=
                            "w-full mt-1 bg-neutral-100 rounded-lg px-4 py-3 border-none focus:outline-none focus:ring-2 focus:bg-white transition-all duration-300 md:text-sm text-xs"
                        />
                    </div>

                    <div className="w-full">
                        <label htmlFor="khaltiNumber" className="md:text-sm text-xs">
                            Khalti Number
                        </label>
                        <Input
                            name="khaltiNumber"
                            type="text"
                            placeholder="Khalti Number"
                            className=
                            "w-full mt-1 bg-neutral-100 rounded-lg px-4 py-3 border-none focus:outline-none focus:ring-2 focus:bg-white transition-all duration-300 md:text-sm text-xs"
                        />
                    </div>

                    <div className="w-full">
                        <label htmlFor="bio" className="md:text-sm text-xs">
                            Bio
                        </label>
                        <textarea
                            style={{ resize: "none" }}
                            name="bio"
                            placeholder="Tell us about yourself"
                            className=
                            "w-full h-40 mt-1 bg-neutral-100 rounded-lg px-4 py-3 border-none focus:outline-none focus:ring-2 focus:bg-white transition-all duration-300 md:text-sm text-xs"
                        />
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 w-full lg:mt-12 mt-[-2rem]">
                <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                    <div className="w-full flex flex-col items-center gap-2 border rounded-xl p-3">
                        <label htmlFor="specialChiya">Special Chiya ₹</label>
                        <Input
                            name="specialChiya"
                            required
                            type="number"
                            step={0.01}
                            defaultValue={30}
                            placeholder="Enter amount"
                            className=
                            "w-full mt-1 bg-neutral-100 rounded-lg px-4 py-3 border-none focus:outline-none focus:ring-2 focus:bg-white transition-all duration-300 md:text-sm text-xs"
                        />
                    </div>
                    <div className="w-full flex flex-col items-center gap-2 border rounded-xl p-3">
                        <label htmlFor="specialChiya">Masala Chiya ₹</label>
                        <Input
                            name="masalaChiya"
                            required
                            type="number"
                            step={0.01}
                            defaultValue={50}
                            placeholder="Enter amount"
                            className=
                            "w-full mt-1 bg-neutral-100 rounded-lg px-4 py-3 border-none focus:outline-none focus:ring-2 focus:bg-white transition-all duration-300 md:text-sm text-xs"
                        />
                    </div>
                    <div className="w-full flex flex-col items-center gap-2 border rounded-xl p-3">
                        <label htmlFor="specialChiya">Premium Chiya ₹</label>
                        <Input
                            name="premiumChiya"
                            required
                            type="number"
                            step={0.01}
                            defaultValue={100}
                            placeholder="Enter amount"
                            className=
                            "w-full mt-1 bg-neutral-100 rounded-lg px-4 py-3 border-none focus:outline-none focus:ring-2 focus:bg-white transition-all duration-300 md:text-sm text-xs"
                        />
                    </div>
                </div>
                <Button className="bg-[var(--yellow)] mt-4 w-full">
                    Save Changes
                </Button>
            </div>
        </form>
    )
}

export default Form