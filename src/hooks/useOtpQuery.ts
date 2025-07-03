import { sendOtp, verifyOtp } from "@/api/otp"
import { useMutation } from "@tanstack/react-query"

interface formData {
    email: string;
    otp: string
}

export const useSendOtpQuery = () => {
    return useMutation({
        mutationFn: (email: string) => sendOtp(email)
    })
}

export const useVerifyOtpQuery = () => {
    return useMutation({
        mutationFn: (formData: formData) => verifyOtp(formData)
    })
}