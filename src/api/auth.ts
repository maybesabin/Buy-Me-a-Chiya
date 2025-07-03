import User from "@/types/User";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function signup(formData: Partial<User>) {
    const res = await axios.post(`${url}/api/auth/signup`, formData)
    return res.data
}

export async function login(formData: Partial<User>) {
    const res = await axios.post(`${url}/api/auth/login`, formData)
    return res.data
}