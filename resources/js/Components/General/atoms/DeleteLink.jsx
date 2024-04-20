import { Link } from "@inertiajs/react";

export default function DeleteLink({
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
            as="button"
            method="DELETE"
            href={href}
            className={
                `w-${
                    full ? "full" : "fit"
                } rounded-full bg-white py-1.5 px-5 font-semibold text-red-500 text-base border-2 border-red-500 hover:bg-gray-200 block text-center` +
                className
            }
        >
            {text}
        </Link>
    );
}
