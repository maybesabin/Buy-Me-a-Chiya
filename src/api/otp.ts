import axios from "axios";

interface formData {
    email: string;
    otp: string
}

export async function sendOtp(email: string) {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/send-otp`, {
        email
    });
    return res.data
}

export async function verifyOtp(formData: formData) {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/verify-otp`, {
        email: formData.email,
        otp: formData.otp
    });
    return res.data
}