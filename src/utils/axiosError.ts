import axios from "axios"
import { toast } from "sonner"

export function handleAxiosError(error: unknown) {
    if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || "Something went wrong"
        toast.error(message)
    } else {
        toast.error("Unexpected error occurred")
    }
}