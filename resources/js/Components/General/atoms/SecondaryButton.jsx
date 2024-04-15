export default function SecondaryButton({
    full = false,
    type = "button",
    disabled = false,
    onClick,
    className = "",
    text,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={
                `w-${
                    full ? "full" : "fit"
                } rounded-full bg-white py-1.5 px-5 font-semibold text-primary-100 text-base border-2 border-primary-100 hover:bg-gray-200` +
                className
            }
        >
            {text}
        </button>
    );
}
