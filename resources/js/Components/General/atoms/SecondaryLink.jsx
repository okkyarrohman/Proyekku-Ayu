import { Link } from "@inertiajs/react";

export default function SecondaryLink({
    full = false,
    disabled = false,
    href,
    className = "",
    text,
    ...props
}) {
    return (
        <Link
            {...props}
            disabled={disabled}
            href={href}
            className={
                `w-${
                    full ? "full" : "fit"
                } rounded-full bg-white py-1.5 px-5 font-semibold text-primary-100 text-base border-2 border-primary-100 hover:bg-gray-200 block text-center` +
                className
            }
        >
            {text}
        </Link>
    );
}
