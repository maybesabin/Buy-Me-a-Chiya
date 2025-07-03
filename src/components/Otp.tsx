"use client"

import { cn } from "@/lib/utils"
import { useRef, useState } from "react"

interface OtpProps {
    length?: number
    className?: string
    onChangeOtp?: (otp: string) => void
}

const Otp = ({
    className,
    length = 4,
    onChangeOtp,
    ...props
}: OtpProps) => {
    const [otp, setOtp] = useState<string[]>(new Array(length).fill(""))
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.replace(/\D/g, "") // Allow only digits
        if (!val) return

        const updatedOtp = [...otp]
        updatedOtp[index] = val[0] // Only take first digit
        setOtp(updatedOtp)
        onChangeOtp?.(updatedOtp.join(""))

        // Auto move to next input
        if (index < length - 1) {
            inputRefs.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace") {
            if (otp[index]) {
                // Just clear the current input
                const updatedOtp = [...otp]
                updatedOtp[index] = ""
                setOtp(updatedOtp)
                onChangeOtp?.(updatedOtp.join(""))
            } else if (index > 0) {
                // Move to previous input if empty
                inputRefs.current[index - 1]?.focus()
            }
        } else if (e.key === "ArrowLeft") {
            if (index > 0) {
                inputRefs.current[index - 1]?.focus()
            }
        } else if (e.key === "ArrowRight") {
            if (index < length - 1) {
                inputRefs.current[index + 1]?.focus()
            }
        }
    }

    const handleClick = (index: number) => {
        inputRefs.current[index]?.select()
    }

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const pastedData = e.clipboardData.getData("Text").replace(/\D/g, "").slice(0, length)
        if (pastedData) {
            const updatedOtp = pastedData.split("")
            while (updatedOtp.length < length) {
                updatedOtp.push("")
            }
            setOtp(updatedOtp)
            onChangeOtp?.(updatedOtp.join(""))

            // Focus last non-empty input
            const nextIndex = Math.min(pastedData.length - 1, length - 1)
            inputRefs.current[nextIndex]?.focus()
        }
    }

    return (
        <div {...props}>
            {otp.map((value, idx) => (
                <input
                    key={idx}
                    ref={(el) => { inputRefs.current[idx] = el; }}
                    type="text"
                    maxLength={1}
                    value={value}
                    className={cn(
                        "border size-14 mx-2 rounded-md px-2 text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                        className
                    )}
                    onChange={(e) => handleChange(idx, e)}
                    onClick={() => handleClick(idx)}
                    onKeyDown={(e) => handleKeyDown(idx, e)}
                    onPaste={handlePaste}
                />
            ))}
        </div>
    )
}

export default Otp
