import { Link } from "@inertiajs/react";

export default function NavLink({ link, text }) {
    return (
        <Link
            as="button"
            href={link}
            className="py-1 px-4 border-2 border-primary-100 bg-white text-primary-100 font-semibold text-base hover:text-white hover:bg-primary-200 w-fit"
        >
            {text}
        </Link>
    );
}
