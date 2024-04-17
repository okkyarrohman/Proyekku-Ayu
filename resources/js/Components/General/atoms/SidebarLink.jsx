import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";

export default function SidebarLink({ text, icon, active, href, ...props }) {
    return (
        <Link
            {...props}
            href={href}
            className={`font-semibold flex items-center gap-4 py-3 px-4 w-full ${
                active
                    ? "text-primary-200 bg-background rounded-s-full"
                    : "text-white rounded-s-full bg-none hover:bg-primary-100"
            }`}
        >
            <Icon icon={icon} width="1.7rem" />
            {text}
        </Link>
    );
}
