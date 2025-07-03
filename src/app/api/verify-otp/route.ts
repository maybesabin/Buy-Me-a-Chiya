import connectToDb from "@/lib/db";
import Otp from "@/models/Otp";
import User from "@/models/User";
import { handleError } from "@/utils/error";
import { errorResponse, successResponse } from "@/utils/response";
import bcrypt from "bcrypt"

export async function POST(req: Request) {
    try {
        await connectToDb()
        const { email, otp } = await req.json()

        if (!email || !otp) return errorResponse("Please provide all fields")

        const user = await User.findOne({ email })
        if (!user) return errorResponse("User with this email doesn't exist")

        const userId = user._id
        const OTP = await Otp.findOne({ userId })
        if (!OTP) return errorResponse("Invalid OTP")

        const expiresAt = OTP.expiresAt;
        const hashedOtp = OTP.otp;

        if (expiresAt.getTime() < Date.now()) {
            await Otp.deleteMany({ userId })
            return errorResponse("Code has expired. Please verify again.")
        }

        const isMatch = await bcrypt.compare(otp, hashedOtp)
        if (!isMatch) return errorResponse("Invalid OTP")

        await User.findByIdAndUpdate(userId, { verified: true })
        await Otp.deleteMany({ userId })
        return successResponse("User verified successfully")
    } catch (error) {
        return handleError(error)
    }
}