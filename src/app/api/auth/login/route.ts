import connectToDb from "@/lib/db";
import User from "@/models/User";
import { handleError } from "@/utils/error";
import { errorResponse } from "@/utils/response";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    await connectToDb()
    const { email, password } = await req.json();

    try {
        const user = await User.findOne({ email })
        if (!user) return errorResponse("User not found")

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return errorResponse("Wrong credentials")

        const isVerified = user.verified;
        if (!isVerified) return errorResponse("Your account is not verified.")

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET!,
            { expiresIn: "7d" }
        )

        return NextResponse.json({
            message: "Logged in successfully",
            token
        }, {
            status: 200
        })

    } catch (err) {
        return handleError(err)
    }

}