"use client";

import { usePathname } from "next/navigation";
const HIDDEN_NAV_PATHS = ["/login", "/signup"];
import Navbar from "@/components/Navbar";

export default function ShowNavbar() {
    const pathname = usePathname();
    const shouldShow = !HIDDEN_NAV_PATHS.includes(pathname);

    if (!shouldShow) return null;

    return <Navbar />;
}
