"use client"

import { useState } from "react"
import Input from "./Input"
import Otp from "./Otp"
import { useRouter } from "next/navigation"
import Button from "./Button"
import { useSendOtpQuery, useVerifyOtpQuery } from "@/hooks/useOtpQuery"
import { toast } from "sonner"
import { handleAxiosError } from "@/utils/axiosError"

const OtpForm = () => {
    const router = useRouter()
    const [isOtpSent, setIsOtpSent] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        otp: ''
    })

    const { isPending: sendOtpPending, mutate: sendOtpMutate } = useSendOtpQuery()
    const { isPending: verifyOtpPending, mutate: verifyOtpMutate } = useVerifyOtpQuery()

    const handleVerify = () => {
        verifyOtpMutate(formData, {
            onSuccess: (res) => {
                toast.success(res.message)
                router.push('/login')
            },
            onError: (err) => {
                handleAxiosError(err)
            }
        })
    }

    const sendOtp = () => {
        sendOtpMutate(formData.email, {
            onSuccess: (res) => {
                toast.success(res.message)
                if (!res.success) {
                    setIsOtpSent(false)
                } else {
                    setIsOtpSent(true)
                }
            },
            onError: (err) => {
                handleAxiosError(err)
            }
        })
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <Input
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                name="email"
                type="email"
                placeholder="Email"
            />
            {isOtpSent &&
                <Otp
                    onChangeOtp={(otp) =>
                        setFormData((prev) => ({
                            ...prev,
                            otp,
                        }))
                    }
                    className="mx-4 size-16"
                />
            }
            <Button
                type="button"
                onClick={isOtpSent ? handleVerify : sendOtp}
                className="bg-[var(--yellow)] w-full"
            >
                {!isOtpSent ? (sendOtpPending ? "Sending OTP..." : "Send OTP") :
                    (verifyOtpPending ? "Verifying OTP..." : "Verify OTP")
                }
            </Button>
        </div>
    )
}

export default OtpForm