import { Link } from "@inertiajs/react";

export default function PrimaryLink({
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
                } rounded-full bg-primary-100 py-2 px-6 font-semibold text-white text-base hover:bg-primary-200 block text-center` +
                className
            }
        >
            {text}
        </Link>
    );
}
