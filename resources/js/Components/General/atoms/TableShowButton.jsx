import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";

export default function TableShowButton({ linkShow }) {
    return (
        <Link
            href={linkShow}
            className="bg-primary-200 size-8 rounded-full flex justify-center items-center hover:bg-primary-100"
        >
            <Icon
                icon="oui:arrow-right"
                width="1.5rem"
                className="text-white"
            />
        </Link>
    );
}
