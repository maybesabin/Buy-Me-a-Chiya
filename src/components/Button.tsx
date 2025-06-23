type ButtonProps = {
    text: string;
    className: string;
    type?: "button" | "submit" | "reset";
    disabled?: any
}

const Button = ({
    text,
    className,
    type,
    disabled
}: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            type={type ? type : "button"}
            style={{ cursor: "pointer" }}
            className={`font-medium md:text-sm text-xs px-4 py-3 hover:scale-105 transition-all rounded-full ${className}`}
        >
            {text}
        </button>
    )
}

export default Button