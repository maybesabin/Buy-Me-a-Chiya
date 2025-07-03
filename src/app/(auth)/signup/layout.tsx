export const metadata = {
    title: "Signup | Buy Me a Chiya",
    description: "Signup page for buy me a chiya"
}

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-start">
            <div className="h-svh bg-[var(--yellow)] w-1/3 py-9">

            </div>
            <div className="h-svh w-[70%] absolute rounded-l-4xl right-0 bg-white">
                {children}
            </div>
        </div>
    )
}

export default layout