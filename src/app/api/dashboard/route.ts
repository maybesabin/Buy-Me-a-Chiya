import connectToDb from "@/lib/db";
import { handleError } from "@/utils/error";

export async function GET(req: Request) {
    try {
        await connectToDb()
    } catch (error) {
        handleError(error)
    }
}