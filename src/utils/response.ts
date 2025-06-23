import { NextResponse } from "next/server";

export function errorResponse(message: string, status: number = 500) {
    return NextResponse.json({ message, status }, { status })
}

export function successResponse(message: string, status: number = 200) {
    return NextResponse.json({ message, status }, { status })
}