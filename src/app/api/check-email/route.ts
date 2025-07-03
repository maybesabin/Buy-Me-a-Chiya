import connectToDb from "@/lib/db";
import User from "@/models/User";
import { handleError } from "@/utils/error";
import { errorResponse, successResponse } from "@/utils/response";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        await connectToDb()
        const { email } = await req.json();

        const checkEmail = await User.findOne({ email })
        if (checkEmail) return NextResponse.json({
            message: "User with this email exists",
            success: true
        }, {
            status: 200
        })
        return NextResponse.json({
            message: "User with this email does not exist",
            success: false
        }, {
            status: 200
        })
    } catch (error) {
        return handleError(error)
    }
}