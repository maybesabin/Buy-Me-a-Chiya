import connectToDb from "@/lib/db";
import User from "@/models/User";
import UserType from "@/types/User";
import { handleError } from "@/utils/error";
import { errorResponse, successResponse } from "@/utils/response";
import bcrypt from "bcrypt"

export async function POST(req: Request) {
    try {
        await connectToDb()
        const { name, username, email, password } = await req.json() as Partial<UserType>;

        if (!name || !username || !email || !password) return errorResponse("Please provide all fields")

        if (password.length < 5 || password.length > 30) return errorResponse("Password should be between 5-30 characters")

        const checkUsername = await User.findOne({ username })
        if (checkUsername) return errorResponse("User with this username already exists")

        const checkEmail = await User.findOne({ email })
        if (checkEmail) return errorResponse("User with this email already exists")

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            name,
            username,
            email,
            password: hashedPassword
        })

        await newUser.save()
        return successResponse("User created successfully")
    } catch (error) {
        return handleError(error)
    }
}