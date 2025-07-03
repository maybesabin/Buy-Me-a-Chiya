import { cn } from "@/lib/utils";
import { InputHTMLAttributes } from "react";

interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
}

const Input = ({
    name,
    required = true,
    type = "text",
    placeholder,
    className,
    ...props
}: InputPropsType) => {
    return (
        <input
            name={name}
            required={required}
            type={type}
            placeholder={placeholder}
            className={cn(
                "w-96 bg-neutral-100 rounded-lg px-4 py-3 border-none focus:outline-none focus:ring-2 focus:bg-white transition-all duration-300 md:text-sm text-xs",
                className
            )}
            {...props}
        />
    )
}

export default Input