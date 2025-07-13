import Form from "./components/Form"
import Header from "./components/Header"

const page = () => {
    return (
        <div className="w-full flex flex-col items-start gap-4">
            <Header />
            <Form />
        </div>
    )
}

export default page