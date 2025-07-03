"use client"

import { useState } from "react"
import Button from "./Button"
import { useSignupQuery } from "@/hooks/useSignupQuery"
import { handleAxiosError } from "@/utils/axiosError"
import { toast } from "sonner"
import { useUserStore } from "@/store/useUserStore"
import { useRouter } from "next/navigation"

const SignupForm = ({ username }: { username: string }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        username
    })

    const { isPending, mutate } = useSignupQuery()
    const { setUsername } = useUserStore()
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        mutate(formData, {
            onSuccess: (res) => {
                toast.success(res.message)
                setFormData({
                    ...formData,
                    email: '',
                    password: '',
                    name: '',
                })
                setUsername('')
                router.push('/login')
            },
            onError: (err) => {
                handleAxiosError(err)
            }
        })
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-start gap-4">
            <input
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                type="text"
                placeholder="Full Name"
                className=
                "w-96 bg-neutral-100 rounded-lg px-4 py-3 border-none focus:outline-none focus:ring-2 focus:bg-white transition-all duration-300 md:text-sm text-xs"
            />
            <input
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                type="email"
                placeholder="Email"
                className=
                "w-96 bg-neutral-100 rounded-lg px-4 py-3 border-none focus:outline-none focus:ring-2 focus:bg-white transition-all duration-300 md:text-sm text-xs"
            />
            <div className="relative">
                <input
                    name="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className=
                    "w-96 bg-neutral-100 rounded-lg px-4 py-3 border-none focus:outline-none focus:ring-2 focus:bg-white transition-all duration-300 md:text-sm text-xs"
                />
                <h5
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-xs hover:underline absolute top-3.5 right-4 cursor-pointer"
                >
                    {!showPassword ? "Show" : "Hide"}
                </h5>
            </div>
            <p className="text-neutral-400 text-xs">
                Your password must be between 5-30 characters.
            </p>

            <Button
                disabled={isPending}
                type="submit"
                className="absolute bottom-6 right-6 bg-[var(--yellow)] px-12 py-4"
            >
                {isPending ? "Signing up" : "Sign up"}
            </Button>
        </form>
    )
}

export default SignupForm