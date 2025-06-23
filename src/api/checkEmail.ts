import axios from "axios";

export async function checkEmail(email: string) {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/check-username`, {
        email
    });
    return res.data
}