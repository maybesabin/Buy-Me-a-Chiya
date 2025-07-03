import OtpForm from "@/components/OtpForm"

export const metadata = {
    title: "Verify Account | Buy Me a Chiya",
    description: "Account verification page for buy me a chiya"
}
const page = () => {
    return (
        <div className="relative h-[90svh] flex flex-col items-center gap-4 justify-center">
            <h1 className="font-medium lg:text-3xl md:text-2xl text-lg w-full text-center">
                Verify Account
            </h1>
            <OtpForm />
        </div>
    )
}

export default page