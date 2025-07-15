"use client"

import { FormEvent, useState } from "react"
import Button from "./Button"
import Input from "./Input"
import { useEmailQuery } from "@/hooks/useEmailQuery"
import { toast } from "sonner"
import { useLoginQuery } from "@/hooks/useLoginQuery"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/store/useAuthStore"
import { handleAxiosError } from "@/utils/axiosError"
import { AxiosError } from "axios"

const LoginForm = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [isEmailValid, setIsEmailValid] = useState(false)
    const { mutate, isPending } = useEmailQuery()
    const { mutate: loginMutate, isPending: loginPending } = useLoginQuery()
    const { login } = useAuthStore()

    const checkEmail = () => {
        mutate(formData.email, {
            onSuccess: (res) => {
                if (res.success) {
                    setIsEmailValid(true)
                } else {
                    toast.error("Please provide a valid email")
                    setIsEmailValid(false)
                }
            }
        })
    }

    const handleLogin = (e: FormEvent) => {
        e.preventDefault()
        loginMutate(formData, {
            onSuccess: (res) => {
                toast.success(res.message)
                router.push('/dashboard')
                setFormData({
                    email: '',
                    password: ''
                })
                login(res.token)
            },
            onError: (err: unknown) => {
                const axiosError = err as AxiosError<{ message?: string }>;
                const errorMessage = axiosError.response?.data?.message || 'Something went wrong';

                if (errorMessage === "Your account is not verified.") {
                    toast.error("Please verify your account first");
                    return router.push('/verify');
                }

                handleAxiosError(axiosError);
            }
        })
    }

    return (
        <div className="flex flex-col items-start gap-4">
            <h1 className="font-medium lg:text-3xl md:text-2xl text-lg w-full text-center">
                Welcome back
            </h1>
            <Input
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                name="email"
                type="email"
                placeholder="Email"
            />
            {isEmailValid &&
                <Input
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    name="password"
                    type="password"
                    placeholder="Password"
                />
            }
            <Button
                type="button"
                onClick={isEmailValid ? handleLogin : checkEmail}
                className="bg-[var(--yellow)] w-full"
            >
                {!isEmailValid ? (isPending ? "Checking email..." : "Continue with email") :
                    (loginPending ? "Logging in..." : "Login")
                }
            </Button>

        </div>
    )
}

export default LoginForm