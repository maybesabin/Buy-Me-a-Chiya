import axios from "axios"

export async function checkUsername(username: string) {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/check-username`, {
        username
    })
    return res.data
}