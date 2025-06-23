import connectToDb from "@/lib/db";
import User from "@/models/User";
import { handleError } from "@/utils/error";
import { errorResponse, successResponse } from "@/utils/response";

export async function POST(req: Request) {
    try {
        await connectToDb()
        const { username } = await req.json();

        if (!username) return errorResponse("Please provide all fields")

        if (username.length < 5 || username.length > 30) return errorResponse("Username should be between 5-30 characters")

        const checkUsername = await User.findOne({ username });
        if (checkUsername) return errorResponse("User with this username already exists");
        return successResponse("Username available")
    } catch (error) {
        return handleError(error)
    }
}