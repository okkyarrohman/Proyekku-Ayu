export default function PrimaryButton({
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
                } rounded-full bg-primary-100 py-2 px-6 font-semibold text-white text-base hover:bg-primary-200` +
                className
            }
        >
            {text}
        </button>
    );
}
