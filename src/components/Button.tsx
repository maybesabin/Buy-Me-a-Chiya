import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const Button = ({
    className,
    type = "button",
    children,
    ...props
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={cn(
                "cursor-pointer font-medium md:text-sm text-xs px-4 py-3 hover:scale-105 transition-all rounded-full",
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button