import { Link } from "@inertiajs/react";

export default function FooterLinkItem({ index, href, title }) {
    return (
        <Link
            key={index}
            href={href}
            className="text-white border-b border-white w-fit lg:mx-0 mx-auto"
        >
            {title}
        </Link>
    );
}
