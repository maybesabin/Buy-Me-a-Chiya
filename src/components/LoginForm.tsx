"use client"

import { useState } from "react"
import Button from "./Button"
import Input from "./Input"
import { useEmailQuery } from "@/hooks/useEmailQuery"
import { toast } from "sonner"

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isEmailValid, setIsEmailValid] = useState(false)
    const { mutate, isPending, isSuccess } = useEmailQuery()

    const checkEmail = () => {
        mutate(email, {
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

    const handleLogin = () => {
        alert("meow")
    }

    return (
        <div className="flex flex-col items-start gap-4">
            <h1 className="font-medium lg:text-3xl md:text-2xl text-lg w-full text-center">
                Welcome back
            </h1>
            <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="Email"
            />
            {isEmailValid &&
                <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                {isEmailValid ? "Login" : "Continue with email"}
            </Button>
        </div>
    )
}

export default LoginForm