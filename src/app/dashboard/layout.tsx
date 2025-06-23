
const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="xl:w-[85rem] w-full py-4 flex items-center justify-between">
                {children}
            </div>
        </div>
    )
}

export default layout