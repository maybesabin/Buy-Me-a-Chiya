import connectToDb from "@/lib/db";
import { handleError } from "@/utils/error";
import nodemailer from "nodemailer"
import bcrypt from "bcrypt"
import Otp from "@/models/Otp";
import { errorResponse, successResponse } from "@/utils/response";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        await connectToDb()
        const { email } = await req.json()
        const otp = `${Math.floor(1000 + Math.random() * 9000)}`

        if (!email) {
            return errorResponse("Please provide your email")
        }

        const user = await User.findOne({ email })
        if (!user) return errorResponse("User with this email doesn't exist")
        if (user.verified) return NextResponse.json({
            message: "User is already verified",
            success: false
        }, { status: 200 })

        const userId = user._id //extract userId

        //nodemailer stuff
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        })

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Verify your email",
            html: `<p>Enter <b>${otp}</b> in the app to verify your account 😁. This code expires in 10 mins.</p>`
        }

        const hashedOtp = await bcrypt.hash(otp, 10)
        const newOtp = new Otp({
            userId,
            otp: hashedOtp,
            createdAt: new Date(),
            expiresAt: new Date(Date.now() + 10 * 60 * 1000) //10 mins
        })

        await newOtp.save()
        await transporter.sendMail(mailOptions)
        return NextResponse.json({
            message: "OTP sent to your gmail",
            success: true
        }, { status: 200 })

    } catch (error) {
        return handleError(error)
    }
}