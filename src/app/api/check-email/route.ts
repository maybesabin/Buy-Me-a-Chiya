import connectToDb from "@/lib/db";
import User from "@/models/User";
import { handleError } from "@/utils/error";
import { errorResponse, successResponse } from "@/utils/response";

export async function POST(req: Request) {
    try {
        await connectToDb()
        const { email } = await req.json();

        const checkEmail = await User.findOne({ email })
        if (checkEmail) return successResponse("User with this email exists")
        return errorResponse("User not found with this email")
    } catch (error) {
        return handleError(error)
    }
}