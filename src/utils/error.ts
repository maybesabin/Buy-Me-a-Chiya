import { errorResponse } from "./response";

export function handleError(err: unknown, fallbackMessage = "Unexpected server error") {
    if (err instanceof Error) {
        console.log(err.message)
        return errorResponse(err.message)
    } else {
        console.log("Unknown error", err)
        return errorResponse(fallbackMessage);
    }
}